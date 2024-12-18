const express = require ("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3015;

app.use(cors());
app.use(express.json());

const vehicles = [
    {
        "id": 1,
        "brand": "Volkswagen",
        "model": "ID.3",
        "price": 43000,
        "engine": {
            "power_type": "electric",
            "consumption": 1.4,
            "autonomy_km": 425,
            "horsepower": 204,
        },
    },
    { 
        "id": 2,
        "brand": "Peugeot",
        "model": "208",
        "price": 20000,
        "engine": {
            "power_type": "electric",
            "consumption": 1.4,
            "autonomy_km": 425,
            "horsepower": 204,
        },
    },
    { 
        "id": 3,
        "brand": "Renault",
        "model": "Clio",
        "price": 18000,
        "engine": {
            "power_type": "electric",
            "consumption": 1.4,
            "autonomy_km": 425,
            "horsepower": 204,
        },
    },
    { 
        "id": 4,
        "brand": "Dacia",
        "model": "Sandero",
        "price": 15000,
        "engine": {
            "power_type": "electric",
            "consumption": 1.4,
            "autonomy_km": 425,
            "horsepower": 204,
        },
    },
    { 
        "id": 5,
        "brand": "Volkswagen",
        "model": "Golf",
        "price": 25000,
        "engine": {
            "power_type": "electric",
            "consumption": 1.4,
            "autonomy_km": 425,
            "horsepower": 204,
        },
    },
    { 
        "id": 6,
        "brand": "Peugeot",
        "model": "3008",
        "price": 35000,
        "engine": {
            "power_type": "electric",
            "consumption": 1.4,
            "autonomy_km": 425,
            "horsepower": 204,
        },
    },
    { 
        "id": 7,
        "brand": "BMW",
        "model": "X1 U11",
        "price": 45000,
        "engine": {
            "power_type": "electric",
            "consumption": 1.4,
            "autonomy_km": 425,
            "horsepower": 204,
        },
    },
    { 
        "id": 8,
        "brand": "Audi",
        "model": "Q7",
        "price": 70000,
        "engine": {
            "power_type": "electric",
            "consumption": 1.4,
            "autonomy_km": 425,
            "horsepower": 204,
        },
    },
    { 
        "id": 9,
        "brand": "Tesla",
        "model": "Model 3",
        "price": 50000,
        "engine": {
            "power_type": "electric",
            "consumption": 1.4,
            "autonomy_km": 425,
            "horsepower": 204,
        },
    },
    { 
        "id": 10,
        "brand": "Nissan",
        "model": "Leaf",
        "price": 30000,
        "engine": {
            "power_type": "electric",
            "consumption": 1.4,
            "autonomy_km": 425,
            "horsepower": 204,
        },
    },
    {
        "id": 11,
        "brand": "Volkswagen",
        "model": "Golf",
        "price": 25000,
        "engine": {
            "power_type": "gas",
            "consumption": 6.5,
            "autonomy_km": 700,
            "horsepower": 147,
        },
    },
    {
        "id": 12,
        "brand": "Peugeot",
        "model": "208",
        "price": 20000,
        "engine": {
            "power_type": "gas",
            "consumption": 5.9,
            "autonomy_km": 750,
            "horsepower": 100,
        },
    },
    {
        "id": 13,
        "brand": "Renault",
        "model": "Clio",
        "price": 18000,
        "engine": {
            "power_type": "gas",
            "consumption": 5.8,
            "autonomy_km": 760,
            "horsepower": 90,
        },
    },
    {
        "id": 14,
        "brand": "Hyundai",
        "model": "Kona",
        "price": 21000,
        "engine": {
            "power_type": "gas",
            "consumption": 6.2,
            "autonomy_km": 720,
            "horsepower": 147,
        },
    },
    {
        "id": 15,
        "brand": "Peugeot",
        "model": "3008",
        "price": 35000,
        "engine": {
            "power_type": "gas",
            "consumption": 7.0,
            "autonomy_km": 680,
            "horsepower": 165,
        },
    },
    {
        "id": 16,
        "brand": "BMW",
        "model": "X1",
        "price": 45000,
        "engine": {
            "power_type": "gas",
            "consumption": 7.5,
            "autonomy_km": 650,
            "horsepower": 228,
        },
    },
    {
        "id": 17,
        "brand": "Audi",
        "model": "Q7",
        "price": 70000,
        "engine": {
            "power_type": "gas",
            "consumption": 9.0,
            "autonomy_km": 600,
            "horsepower": 248,
        },
    },
    {
        "id": 18,
        "brand": "Tesla",
        "model": "Model S",
        "price": 80000,
        "engine": {
            "power_type": "gas",
            "consumption": 10.0,
            "autonomy_km": 550,
            "horsepower": 300,
        },
    },
    {
        "id": 19,
        "brand": "Nissan",
        "model": "Leaf",
        "price": 30000,
        "engine": {
            "power_type": "gas",
            "consumption": 6.0,
            "autonomy_km": 700,
            "horsepower": 147,
        },
    },
    {
        "id": 20,
        "brand": "Toyota",
        "model": "Corolla",
        "price": 20000,
        "engine": {
            "power_type": "gas",
            "consumption": 7.5,
            "autonomy_km": 600,
            "horsepower": 132,
        },
    }
]

app.get('/', (req, res) => {
    res.send('Api Eco Compare')
}
);

app.get('/api/vehicles/:id', (req, res) => {
    try {
        const vehicle = vehicles.find(vehicle => vehicle.id === Number.parseInt(req.params.id));
        res.json(vehicle);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error");
    }
});


app.get('/api/vehicles', (req, res) => {
    try {
        res.json(vehicles);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error");
    }
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


// Peugeot 208
// Renault Clio
// Volkswagen Golf
// Dacia Sandero
// Peugeot 3008
// BMW X1 U11
// Audi Q7