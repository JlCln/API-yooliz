const express = require("express");
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
            "consumption": 15.5,
            "autonomy_km": 420,
            "horsepower": 204
        },
        "license_plate": "AB-123-CD"
    },
    {
        "id": 2,
        "brand": "Peugeot",
        "model": "e-208",
        "price": 32000,
        "engine": {
            "power_type": "electric",
            "consumption": 16.6,
            "autonomy_km": 340,
            "horsepower": 136
        },
        "license_plate": "EF-456-GH"
    },
    {
        "id": 3,
        "brand": "Renault",
        "model": "Clio",
        "price": 20000,
        "engine": {
            "power_type": "gas",
            "consumption": 5.4,
            "autonomy_km": 820,
            "horsepower": 90
        },
        "license_plate": "IJ-789-KL"
    },
    {
        "id": 4,
        "brand": "Hyundai",
        "model": "Kona Electric",
        "price": 39000,
        "engine": {
            "power_type": "electric",
            "consumption": 14.7,
            "autonomy_km": 484,
            "horsepower": 204
        },
        "license_plate": "MN-012-OP"
    },
    {
        "id": 5,
        "brand": "BMW",
        "model": "X1",
        "price": 45000,
        "engine": {
            "power_type": "gas",
            "consumption": 7.2,
            "autonomy_km": 650,
            "horsepower": 192
        },
        "license_plate": "UV-678-WX"
    },
    {
        "id": 6,
        "brand": "Tesla",
        "model": "Model 3",
        "price": 50000,
        "engine": {
            "power_type": "electric",
            "consumption": 14.0,
            "autonomy_km": 491,
            "horsepower": 283
        },
        "license_plate": "YZ-901-AB"
    },
    {
        "id": 7,
        "brand": "Audi",
        "model": "Q7",
        "price": 70000,
        "engine": {
            "power_type": "gas",
            "consumption": 9.1,
            "autonomy_km": 600,
            "horsepower": 248
        },
        "license_plate": "CD-234-EF"
    },
    {
        "id": 8,
        "brand": "Kia",
        "model": "EV6",
        "price": 45000,
        "engine": {
            "power_type": "electric",
            "consumption": 16.5,
            "autonomy_km": 528,
            "horsepower": 229
        },
        "license_plate": "GH-567-IJ"
    },
    {
        "id": 9,
        "brand": "Ford",
        "model": "Mustang Mach-E",
        "price": 62000,
        "engine": {
            "power_type": "electric",
            "consumption": 18.0,
            "autonomy_km": 490,
            "horsepower": 351
        },
        "license_plate": "KL-890-MN"
    },
    {
        "id": 10,
        "brand": "Peugeot",
        "model": "208",
        "price": 21000,
        "engine": {
            "power_type": "gas",
            "consumption": 5.9,
            "autonomy_km": 750,
            "horsepower": 100
        },
        "license_plate": "NO-123-PQ"
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
            "horsepower": 147
        },
        "license_plate": "RS-456-TU"
    },
    {
        "id": 12,
        "brand": "Volkswagen",
        "model": "e-Golf",
        "price": 37000,
        "engine": {
            "power_type": "electric",
            "consumption": 13.0,
            "autonomy_km": 300,
            "horsepower": 136
        },
        "license_plate": "VW-789-XY"
    },
    {
        "id": 13,
        "brand": "Renault",
        "model": "Megane",
        "price": 24000,
        "engine": {
            "power_type": "gas",
            "consumption": 6.3,
            "autonomy_km": 720,
            "horsepower": 140
        },
        "license_plate": "ZA-345-BC"
    },
    {
        "id": 14,
        "brand": "Renault",
        "model": "Megane E-Tech",
        "price": 36000,
        "engine": {
            "power_type": "electric",
            "consumption": 15.8,
            "autonomy_km": 470,
            "horsepower": 218
        },
        "license_plate": "DE-678-FG"
    },
    {
        "id": 15,
        "brand": "Hyundai",
        "model": "Ioniq 5",
        "price": 45000,
        "engine": {
            "power_type": "electric",
            "consumption": 17.0,
            "autonomy_km": 480,
            "horsepower": 225
        },
        "license_plate": "HI-901-JK"
    },
    {
        "id": 16,
        "brand": "Hyundai",
        "model": "Ioniq",
        "price": 23000,
        "engine": {
            "power_type": "gas",
            "consumption": 4.7,
            "autonomy_km": 900,
            "horsepower": 141
        },
        "license_plate": "LM-234-NO"
    },
    {
        "id": 17,
        "brand": "BMW",
        "model": "i3",
        "price": 40000,
        "engine": {
            "power_type": "electric",
            "consumption": 14.3,
            "autonomy_km": 300,
            "horsepower": 170
        },
        "license_plate": "PQ-567-RS"
    },
    {
        "id": 18,
        "brand": "BMW",
        "model": "3 Series",
        "price": 42000,
        "engine": {
            "power_type": "gas",
            "consumption": 6.8,
            "autonomy_km": 750,
            "horsepower": 184
        },
        "license_plate": "TU-890-VW"
    },
    {
        "id": 19,
        "brand": "Kia",
        "model": "Soul EV",
        "price": 32000,
        "engine": {
            "power_type": "electric",
            "consumption": 18.0,
            "autonomy_km": 450,
            "horsepower": 201
        },
        "license_plate": "XY-123-ZA"
    },
    {
        "id": 20,
        "brand": "Nissan",
        "model": "Qashqai",
        "price": 25000,
        "engine": {
            "power_type": "gas",
            "consumption": 6.5,
            "autonomy_km": 750,
            "horsepower": 158
        },
        "license_plate": "BC-456-DE"
    }
];

app.get('/', (req, res) => {
    res.send('API Eco Compare');
});

app.get('/api/vehicles/:id', (req, res) => {
    try {
        const vehicle = vehicles.find(vehicle => vehicle.id === Number.parseInt(req.params.id));
        if (vehicle) {
            res.json(vehicle);
        } else {
            res.status(404).send("Vehicle not found");
        }
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
    console.log(`API listening on port ${port}`);
});
