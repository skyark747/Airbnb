const { MongoClient } = require('mongodb');
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');


const app = express();
app.use(cors());
app.use(express.json());

let Port = 3000;
const { console } = require('inspector');
const saltRounds = 10;
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

app.post("/api/auth/register", async (req, res) => {
    try 
    {
        const data = req.body;
        let password = data.password;
        
        console.log(data);

        // const database = client.db("sample_airbnb");
        // const collection = database.collection("users");
        // bcrypt.hash(password, saltRounds, function (err, hash) {
        //     collection.insertOne({email:data.email, password:hash});
        // });

    } catch (error) {
            res.status(500).send({ error: "Failure inserting data" });
    }
})

app.post("/api/auth/login", async (req, res) => {
    try {
        const data = req.body;
        const database = client.db("sample_airbnb");
        const collection = database.collection("users");
        const user = await collection.findOne({ email: data.email });
        const hashedPassword = null;
        if (user) {
            bcrypt.hash(data.password, saltRounds, function (err, hash) {
                hashedPassword = hash;
            });
            bcrypt.compare(data.password, hashedPassword, function (err, result) {
                if (err) {
                    res.send({ error: "Failure" });
                }
                if (result) {
                    res.send({ success: "Success" });
                } else {
                    res.send({ error: "incorrect password" });
                }
            });
        }
    } catch (error) { 
        res.status(500).send({ error: "Failure" });
    }
})

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