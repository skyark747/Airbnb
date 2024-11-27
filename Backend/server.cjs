const express = require('express');
const fs = require('fs');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

let Port = 3000;
let path = require('path');
const { error } = require('console');
const p = '../src/jsfiles/';
app.get('/api/listings/:name', (req, res) => {
    let name = req.params.name;
    name = name + '.js';
    const filePath = path.join(p, name);

    fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'File reading error' });
        }
        res.send(data);
    });
});
app.get('/api/listings/search/query', (req, res) => {
    let location = req.query.query;
    let arr = ["Breakfast.js", "Cabins.js", "Castles.js", "Caves.js", "Cities.js", "Icons.js","Rooms.js"];
    let promises = [];
    
    for (let i = 0; i < arr.length; i++) {
        const filePath = path.join(p, arr[i]);
        
        const file_promise = new Promise((resolve, reject) => {
            fs.readFile(filePath, "utf-8", (err, data) => {
                if (err) {
                    reject(err);
                }
                try {
                    data = JSON.parse(data);
                    let new_data = data.filter((item) => item.place.includes(location));               
                    resolve(new_data);
                } catch (e) {
                    reject(e);
                }
            });
        });
        promises.push(file_promise);
    }
    Promise.all(promises).then((results) => {
        const Arr = results.flat();
        res.send(Arr);
    }).catch((e)=>res.status(500).send({error: "Failure"}));
    
});
app.listen(Port, () => console.log(`Server running on port ${Port}`));