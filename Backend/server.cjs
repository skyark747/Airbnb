const { MongoClient } = require('mongodb');
const { ObjectId } = require("mongodb");
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();
app.use(cors());
app.use(express.json());

let Port = 3000;
const saltRounds = 10;
const secretkey = 'secretkey';
dotenv.config();

let client;


async function fetchListings(name) {
    try {
        const database = client.db("sample_airbnb");
        const collection = database.collection(name);

        const listings = await collection.find().toArray();
        return listings;
    } catch (error) {
        console.error("Error fetching listings:", error);
        throw error;
    }
}

//retrieve the specific collection from the database
app.get('/api/listings/:name', async (req, res) => {
    let name = req.params.name;
    try {
        const listings = await fetchListings(name);
        res.send(listings);
    } catch (error) {
        console.error("Error fetching listings:", error);
        res.status(500).send({ error: "Failure" });
    }
});

//search query
app.get('/api/listings/search/query', async (req, res) => {

    try {
        let location = req.query.query;
        let arr = ["Breakfast", "Cabins", "Castles", "Caves", "Cities", "Icons", "Rooms", "Views", "Mansion"];
        let promises = [];
        for (const collectionName of arr) {
            const database = client.db("sample_airbnb");
            const collection = database.collection(collectionName);
            const promise = await collection.find({ place: { $regex: location, $options: "i" } }).toArray();
            promises.push(promise);
        }

        const results = await Promise.all(promises);
        const combinedResults = results.flat();
        res.json(combinedResults);

    } catch (error) {
        console.error("Error fetching listings:", error);
        res.status(500).send({ error: "Failure" });
    }

});


//get specific listing by id
app.get('/api/listings/details/:id', async (req, res) => {
    try {
        const id = parseInt(req.params.id, 10);

        const arr = ["Breakfast", "Cabins", "Castles", "Caves", "Cities", "Icons", "Rooms", "Views", "Mansion"];
        let result = null;
        for (const collection_name of arr) {
            const database = client.db("sample_airbnb");
            const collection = database.collection(collection_name);

            result = await collection.findOne({ id: id });
            if (result)
                break;
        }

        if (result) {
            res.send(result);
        } else {
            res.status(404).send({ error: "Not found" });
        }

    } catch (error) {
        console.error("Error fetching details:", error);
        res.status(500).send({ error: "Failure fetching details" });
    }
});

//user registeration
app.post("/api/auth/register", async (req, res) => {
    try {
        const data = req.body;
        let password = data.password;
        const database = client.db("sample_airbnb");
        const collection = database.collection("users");
        bcrypt.hash(password, saltRounds, function (err, hash) {
            collection.insertOne({ email: data.email, password: hash });
        });
        res.status(201).send({ msg: "user registered successfully" });

    } catch (error) {
        res.status(500).send({ msg: "Failure inserting data" });
    }
});


//create booking for user
app.post("/api/bookings", verifyToken, async (req, res) => {
    try {
        const data = req.body;
        const database = client.db("sample_airbnb");
        const collection = database.collection("bookings");
        await collection.insertOne({ userid: req.user._id,clientemail:req.user.email, ...data });
        res.send({ msg: "Booking successful" });
    } catch (error) {
        console.error("Error creating booking:", error);
        res.status(500).send({ msg: "Failure creating booking" });
    }
});


//get history bookings for user
app.get("/api/viewbookings", verifyToken, async (req, res) => {
    try {
        const database = client.db("sample_airbnb");
        const collection = database.collection("bookings");
        const result = await collection.find({ userid: req.user._id }).toArray();
        res.send(result);

    } catch (error) {
        res.status(500).send({ msg: "Failure fetching data" });
    }
});


//middleware for authentication
function verifyToken(req, res, next) {
    const header = req.headers['authorization'];
    if (typeof header != 'undefined') {
        const tokenrec = header.split(' ')[1];
        jwt.verify(tokenrec, secretkey, (err, data) => {

            if (err) {
                return res.status(401).send({ msg: "Unauthorized" });
            } else {

                req.user = data;

                next();
            }
        });

    }
    else {

        return res.status(401).send({ msg: "Unauthorized" });
    }
}

//view bookings for admin
app.get("/api/admin/bookings", verifyToken, async (req, res) => {
    try {
        const database = client.db("sample_airbnb");
        const collection = database.collection("bookings");

        const result = await collection.find().toArray();

        res.send(result);

    } catch (error) {
        res.status(500).send({ msg: "Failure fetching data" });
    }
});


//add listing
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
app.post("/api/admin/listings", verifyToken, async (req, res) => {
    try {
        const data = req.body;
        const database = client.db("sample_airbnb");
        const collection = database.collection(req.body.property_type);
        const num = getRandomInt(100, 50000)
        const new_data = { id: num, ...data };
        collection.insertOne(new_data);

        res.send({ msg: "listing added successfully" });

    } catch (error) {
        res.status(500).send({ msg: "Failure fetching data" });
    }
});


//delete listing
app.delete("/api/admin/listings/:id", verifyToken, async (req, res) => {
    try {
        const id = parseInt(req.params.id, 10);

        const arr = ["Breakfast", "Cabins", "Castles", "Caves", "Cities", "Icons", "Rooms", "Views", "Mansion"];
        let isdelted = false;
        for (const collection_name of arr) {
            const database = client.db("sample_airbnb");
            const collection = database.collection(collection_name);

            const result = await collection.deleteOne({ id: id });
            if (result.deletedCount > 0) {
                isdelted = true;
                break;
            }
        }

        if (isdelted) {
            res.send({ msg: "Successfully deleted" });
        } else {
            res.status(404).send({ error: "Not found" });
        }

    } catch (error) {
        res.status(500).send({ msg: "Failure fetching data" });
    }
});



//login user
app.post("/api/auth/login", async (req, res) => {
    try {
        const data = req.body;
        const database = client.db("sample_airbnb");
        const collection = database.collection("users");
        const user = await collection.findOne({ email: data.email });

        if (user) {

            bcrypt.compare(data.password, user.password, (err, result) => {
                if (err) {
                    res.status(500).send({ msg: "Failure logging in" });
                }
                if (result) {
                    jwt.sign(user, secretkey, { expiresIn: '3h' }, (err, token) => {
                        if (err) {
                            res.status(500).send({ msg: "Failure logging in" });
                        }
                        else {
                            const result = {
                                msg: "Successfuly logged in",
                                token: token
                            }
                            res.send(result);
                        }
                    });
                } else {
                    res.status(401).send({ msg: "incorrect password" });
                }
            });
        }
    } catch (error) {
        res.status(500).send({ error: "Failure" });
    }
});

//connection to the database 
async function connectToDatabase() {
    try {
        client = new MongoClient(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        await client.connect();
        console.log("Connected to MongoDB");

    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        process.exit(1);
    }
}


(async () => {
    await connectToDatabase();
    app.listen(Port, () => console.log('Server is running on port 3000!'));
})();