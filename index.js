const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3015;

app.use(cors());
app.use(express.json());

const vehicles = [
  {
    id: 1,
    brand: "Peugeot",
    model: "208",
    price: 21000,
    engine: {
      power_type: "diesel",
      consumption: 5.9,
      autonomy_km: null,
      horsepower: 100,
    },
    license_plate: "AB-123-CD",
    car_picture:
      "https://www.largus.fr/images/images/peugeot-208-active-led.jpg",
  },
  {
    id: 2,
    brand: "Peugeot",
    model: "e-208",
    price: 32000,
    engine: {
      power_type: "électrique",
      consumption: 16.6,
      autonomy_km: 340,
      horsepower: 136,
    },
    license_plate: "EF-456-GH",
    car_picture:
      "https://images.caradisiac.com/logos/9/2/5/4/279254/S8-la-nouvelle-peugeot-e-208-electrique-restylee-obligee-de-baisser-ses-prix-204703.jpg",
  },
  {
    id: 3,
    brand: "Renault",
    model: "Clio",
    price: 20000,
    engine: {
      power_type: "diesel",
      consumption: 5.4,
      autonomy_km: null,
      horsepower: 90,
    },
    license_plate: "IJ-789-KL",
    car_picture:
      "https://im.qccdn.fr/node/actualite-renault-clio-2019-premieres-impressions-67779/thumbnail_1000x600px-135746.jpg",
  },
  {
    id: 4,
    brand: "Hyundai",
    model: "Kona Electric",
    price: 39000,
    engine: {
      power_type: "électrique",
      consumption: 14.7,
      autonomy_km: 484,
      horsepower: 204,
    },
    license_plate: "MN-012-OP",
    car_picture:
      "https://platform.cstatic-images.com/in/v2/stock_photos/c51df517-d2d8-4007-9ad7-85476e25cd40/cbbd7aff-e091-417a-adf5-d25f444c0b9c.png",
  },
  {
    id: 5,
    brand: "BMW",
    model: "X1",
    price: 45000,
    engine: {
      power_type: "essence",
      consumption: 7.2,
      autonomy_km: null,
      horsepower: 192,
    },
    license_plate: "UV-678-WX",
    car_picture:
      "https://platform.cstatic-images.com/in/v2/stock_photos/f558e0c5-435e-4614-b001-472d9759557d/846677fe-3926-4972-bd05-e532c1f54942.png",
  },
  {
    id: 6,
    brand: "Audi",
    model: "Q7",
    price: 70000,
    engine: {
      power_type: "essence",
      consumption: 9.1,
      autonomy_km: null,
      horsepower: 248,
    },
    license_plate: "CD-234-EF",
    car_picture:
      "https://platform.cstatic-images.com/in/v2/stock_photos/66c4dadf-0789-4891-ab2d-66e7c5915dc4/0fb7c028-65e9-45e9-825b-69ad5845d692.png",
  },
  {
    id: 7,
    brand: "Kia",
    model: "EV6",
    price: 45000,
    engine: {
      power_type: "électrique",
      consumption: 16.5,
      autonomy_km: 528,
      horsepower: 229,
    },
    license_plate: "GH-567-IJ",
    car_picture:
      "https://platform.cstatic-images.com/in/v2/stock_photos/bf76186d-39e6-4650-9c31-bd07f18cd6a9/3211e331-bada-4ba3-90a0-49e9ac410103.png",
  },
  {
    id: 8,
    brand: "Ford",
    model: "Mustang Mach-E",
    price: 62000,
    engine: {
      power_type: "électrique",
      consumption: 18.0,
      autonomy_km: 490,
      horsepower: 351,
    },
    license_plate: "KL-890-MN",
    car_picture:
      "https://platform.cstatic-images.com/in/v2/stock_photos/ffd3df74-c4e4-45a0-8358-3af559382fa3/50c7ba84-a416-4dcd-be3e-9679bce87f02.png",
  },
  {
    id: 9,
    brand: "Volkswagen",
    model: "ID.3",
    price: 43000,
    engine: {
      power_type: "électrique",
      consumption: 15.5,
      autonomy_km: 420,
      horsepower: 204,
    },
    license_plate: "NO-123-PQ",
    car_picture: "https://www.breezcar.com/img-c/pageimg/4932_W750.jpg",
  },
  {
    id: 10,
    brand: "Volkswagen",
    model: "Golf",
    price: 25000,
    engine: {
      power_type: "essence",
      consumption: 6.5,
      autonomy_km: null,
      horsepower: 147,
    },
    license_plate: "RS-456-TU",
    car_picture:
      "https://platform.cstatic-images.com/in/v2/stock_photos/5e20d4cf-e46d-4c12-8a62-5f4ee89aefa8/9489b189-2ef2-4e1f-a34f-7c23978113bd.png",
  },
  {
    id: 11,
    brand: "Volkswagen",
    model: "e-Golf",
    price: 37000,
    engine: {
      power_type: "électrique",
      consumption: 13.0,
      autonomy_km: 300,
      horsepower: 136,
    },
    license_plate: "VW-789-XY",
    car_picture:
      "https://platform.cstatic-images.com/in/v2/stock_photos/c178ee74-6148-40a7-ac50-e4e926f86413/bd23fbdc-e518-4a52-acec-f62de79d8c50.png",
  },
  {
    id: 12,
    brand: "Renault",
    model: "Megane",
    price: 24000,
    engine: {
      power_type: "diesel",
      consumption: 6.3,
      autonomy_km: null,
      horsepower: 140,
    },
    license_plate: "ZA-345-BC",
    car_picture:
      "https://leseco.ma/wp-content/uploads/2021/01/Renault-Megane-1.jpg",
  },
  {
    id: 13,
    brand: "Renault",
    model: "Megane E-Tech",
    price: 36000,
    engine: {
      power_type: "électrique",
      consumption: 15.8,
      autonomy_km: 470,
      horsepower: 218,
    },
    license_plate: "DE-678-FG",
    car_picture:
      "https://images.ctfassets.net/g9q6qxi3m2zj/3mO0Ob2Dzp24k6o0cKuqrO/af880978cb75633ff62eb4c2ea62cec0/MeganeEtech_1.png",
  },
  {
    id: 14,
    brand: "Hyundai",
    model: "Ioniq 5",
    price: 45000,
    engine: {
      power_type: "électrique",
      consumption: 17.0,
      autonomy_km: 480,
      horsepower: 225,
    },
    license_plate: "HI-901-JK",
    car_picture:
      "https://platform.cstatic-images.com/in/v2/stock_photos/f2927772-93e5-4376-acd1-a4d23128d3f6/8300e077-edd2-480e-a569-a775ec2f847e.png",
  },
  {
    id: 15,
    brand: "Hyundai",
    model: "Ioniq",
    price: 23000,
    engine: {
      power_type: "essence",
      consumption: 4.7,
      autonomy_km: null,
      horsepower: 141,
    },
    license_plate: "LM-234-NO",
    car_picture:
      "https://platform.cstatic-images.com/in/v2/stock_photos/9b813312-1121-4080-957e-e7115e0649b2/9bcd1202-4cb3-4274-8bcf-362814d534dc.png",
  },
  {
    id: 16,
    brand: "BMW",
    model: "i3",
    price: 40000,
    engine: {
      power_type: "électrique",
      consumption: 14.3,
      autonomy_km: 300,
      horsepower: 170,
    },
    license_plate: "PQ-567-RS",
    car_picture:
      "https://platform.cstatic-images.com/in/v2/stock_photos/bc5d4734-5bf0-4fda-acf3-265023f70310/bcea62da-664e-47ba-8b0a-fe618ea07a47.png",
  },
  {
    id: 17,
    brand: "BMW",
    model: "3 Series",
    price: 42000,
    engine: {
      power_type: "essence",
      consumption: 6.8,
      autonomy_km: null,
      horsepower: 184,
    },
    license_plate: "TU-890-VW",
    car_picture:
      "https://carimages.d2cmedia.ca/newcars/cb6762567152300/BMW/3%20Series/2024/MjkxNDg1Xk1lZGlhIEdhbGxlcnk/3RxKSeC2FJSwjlgTgX3gcCUy4h_BulsPC7pjodvLqgqsHM4oRs6QCtskxpw2Z88LOiJ02IEoSVitJ7fdeJpoOsXGMAWNZGqvmoDDx01gUKUAi5i2OpGuzzxfYOOTIk5LeUISeZkj_dVESKceqdgudZ4jSqdmvKcvtRcNEU2F62dE5JbYZlMXDc8ff4zyCiWd/cc_2024BMC220019_01_1280_668.png",
  },
  {
    id: 18,
    brand: "Kia",
    model: "Soul EV",
    price: 32000,
    engine: {
      power_type: "électrique",
      consumption: 18.0,
      autonomy_km: 450,
      horsepower: 201,
    },
    license_plate: "XY-123-ZA",
    car_picture:
      "https://platform.cstatic-images.com/in/v2/stock_photos/9703ebaa-6b81-4178-9285-bf02a1ecc5c6/53328f01-301f-4e21-a3d8-8d8b9d786286.png",
  },
  {
    id: 19,
    brand: "Nissan",
    model: "Qashqai",
    price: 29000,
    engine: {
      power_type: "essence",
      consumption: 5.5,
      autonomy_km: null,
      horsepower: 158,
    },
    license_plate: "BC-456-DE",
    car_picture:
      "https://www-europe.nissan-cdn.net/content/dam/Nissan/nissan_europe/Configurator/Qashqai-my24/configurator-webp/QQMC-ICE-Tekna.webp",
  },
  {
    id: 20,
    brand: "Renault",
    model: "Clio E-Tech",
    price: 35000,
    engine: {
      power_type: "électrique",
      consumption: 16.0,
      autonomy_km: 385,
      horsepower: 136,
    },
    license_plate: "FG-789-HI",
    car_picture:
      "https://staticeu-h2.izmocars.com/toolkit/commonassets/2024/24renault/24renaultcliohevtechnohb5rb/24renaultcliohevtechnohb5rb_pixGallery/_gallerypix/renault_cliohevtechnohb5rb_concept.jpg",
  },
  {
    id: 21,
    brand: "Audi",
    model: "Q8 e-tron",
    price: 86000,
    engine: {
      power_type: "électrique",
      consumption: 19.5,
      autonomy_km: 412,
      horsepower: 408,
    },
    license_plate: "JK-012-LM",
    car_picture:
      "https://platform.cstatic-images.com/xlarge/in/v2/stock_photos/8284d142-57ca-4f86-94bb-7bc29716ec37/ef69fa59-3bb9-4b7e-8528-f1d932a9f8c2.png",
  },
  {
    id: 22,
    brand: "Nissan",
    model: "Ariya",
    price: 47000,
    engine: {
      power_type: "électrique",
      consumption: 16.8,
      autonomy_km: 403,
      horsepower: 242,
    },
    license_plate: "NO-345-PQ",
    car_picture:
      "https://platform.cstatic-images.com/in/v2/stock_photos/c91ea2ea-e512-4da6-9991-a85453162350/c877bd3a-8174-48f1-b675-8a6076835fae.png",
  },
  {
    id: 23,
    brand: "Kia",
    model: "Sportage",
    price: 32000,
    engine: {
      power_type: "diesel",
      consumption: 5.2,
      autonomy_km: null,
      horsepower: 136,
    },
    license_plate: "VW-901-XY",
    car_picture:
      "https://platform.cstatic-images.com/in/v2/stock_photos/48e0ce59-1e9e-4719-b149-8778d4a27bfe/10fa2b1e-613e-4a96-b5fd-473dfd56f2b9.png",
  },
  {
    id: 24,
    brand: "Ford",
    model: "Puma",
    price: 27000,
    engine: {
      power_type: "essence",
      consumption: 5.4,
      autonomy_km: null,
      horsepower: 125,
    },
    license_plate: "ZA-234-BC",
    car_picture:
      "https://www.gpas-cache.ford.com/guid/1be551bf-1096-36fc-a956-f95dc22df45e.png",
  },
  {
    id: 25,
    brand: "Mercedes",
    model: "C-Class",
    price: 48000,
    engine: {
      power_type: "essence",
      consumption: 6.9,
      autonomy_km: null,
      horsepower: 204,
    },
    license_plate: "ME-567-CD",
    car_picture:
      "https://platform.cstatic-images.com/in/v2/stock_photos/b53bd6cd-c4db-40cd-94e3-cd8fb2d09c5a/fecc5852-a9f8-4bbd-bd7f-1ccf2d6fba51.png",
  },
  {
    id: 26,
    brand: "Mercedes",
    model: "EQC",
    price: 76000,
    engine: {
      power_type: "électrique",
      consumption: 21.5,
      autonomy_km: 417,
      horsepower: 408,
    },
    license_plate: "ME-789-EF",
    car_picture:
      "https://images.ctfassets.net/g9q6qxi3m2zj/3DnGrNqYk7UF12XLqfLijz/1db28d6741fe0a3d417a94f2f1419568/exterior.png",
  },
  {
    id: 27,
    brand: "Toyota",
    model: "RAV4",
    price: 38000,
    engine: {
      power_type: "essence",
      consumption: 6.0,
      autonomy_km: null,
      horsepower: 218,
    },
    license_plate: "TO-123-GH",
    car_picture:
      "https://platform.cstatic-images.com/in/v2/stock_photos/c2f162c8-697b-49c1-a0e6-fbaf1d9c2230/ce0d7e5c-204b-49ad-bfb3-fe1b9bcefab6.png",
  },
  {
    id: 28,
    brand: "Toyota",
    model: "bZ4X",
    price: 49000,
    engine: {
      power_type: "électrique",
      consumption: 16.8,
      autonomy_km: 460,
      horsepower: 217,
    },
    license_plate: "TO-456-IJ",
    car_picture:
      "https://platform.cstatic-images.com/in/v2/stock_photos/dfa641d6-f795-40b2-8d7f-ca4275882de8/a3525337-da8d-48f4-8907-b5c35a09cd00.png",
  },
  {
    id: 29,
    brand: "Volvo",
    model: "XC40",
    price: 41000,
    engine: {
      power_type: "essence",
      consumption: 7.2,
      autonomy_km: null,
      horsepower: 163,
    },
    license_plate: "VO-789-KL",
    car_picture:
      "https://www.caroom.fr/_next/image?url=https%3A%2F%2Fs3.caroom.fr%2Fcache%2Fminiatures_600x350%2Fmodeles%2Fvolvo-xc40-1692627555.png&w=640&q=50",
  },
  {
    id: 30,
    brand: "Volvo",
    model: "XC40 Recharge",
    price: 53000,
    engine: {
      power_type: "électrique",
      consumption: 18.7,
      autonomy_km: 418,
      horsepower: 408,
    },
    license_plate: "VO-012-MN",
    car_picture:
      "https://chargeguru.com/fr-be/wp-content/uploads/sites/7/2019/11/volvo-xc40-recharge.png",
  },
  {
    id: 31,
    brand: "BMW",
    model: "X3",
    price: 52000,
    engine: {
      power_type: "essence",
      consumption: 7.9,
      autonomy_km: null,
      horsepower: 184,
    },
    license_plate: "BM-123-XY",
    car_picture:
      "https://carimages.d2cmedia.ca/newcarimages/fr/cb679f9da97511b/BMW/X3/2025/2100/461424/White/front45.png",
  },
  {
    id: 32,
    brand: "BMW",
    model: "iX3",
    price: 69000,
    engine: {
      power_type: "électrique",
      consumption: 18.5,
      autonomy_km: 460,
      horsepower: 286,
    },
    license_plate: "BM-124-XY",
    car_picture:
      "https://staticeu-h2.izmocars.com/toolkit/commonassets/2024/24bmw/24bmwix3evinspiringsu3fbfr/24bmwix3evinspiringsu3fbfr_pixGallery/_gallerypix/bmw_ix3evinspiringsu3fbfr_concept.jpg",
  },
  {
    id: 33,
    brand: "Peugeot",
    model: "3008",
    price: 36000,
    engine: {
      power_type: "essence",
      consumption: 6.1,
      autonomy_km: null,
      horsepower: 130,
    },
    license_plate: "PE-125-XY",
    car_picture:
      "https://www.wizicar.com/wp-content/uploads/2020/10/peugeot-3008.jpg",
  },
  {
    id: 34,
    brand: "Peugeot",
    model: "e-3008",
    price: 44900,
    engine: {
      power_type: "électrique",
      consumption: 16.7,
      autonomy_km: 525,
      horsepower: 210,
    },
    license_plate: "PE-126-XY",
    car_picture:
      "https://www.peugeot.fr/content/dam/peugeot/master/b2c/our-range/showroom/3008/2023-new-e-3008-/3008-white-label/e-3008-white-label-/NEW_TRIM_E_3008_ALLURE.png?imwidth=768",
  },
  {
    id: 35,
    brand: "Renault",
    model: "Captur",
    price: 24900,
    engine: {
      power_type: "essence",
      consumption: 5.9,
      autonomy_km: null,
      horsepower: 140,
    },
    license_plate: "RE-127-XY",
    car_picture:
      "https://www.autobhl.com/photos/full/captur%20techno%20es%20ext%20avt(1).jpg",
  },
  {
    id: 36,
    brand: "Renault",
    model: "Scenic E-Tech",
    price: 39900,
    engine: {
      power_type: "électrique",
      consumption: 16.8,
      autonomy_km: 520,
      horsepower: 220,
    },
    license_plate: "RE-128-XY",
    car_picture:
      "https://cdn.motor1.com/images/mgl/QeP1N9/s1/4x3/foto---renault-scenic-e-tech-electric.webp",
  },
];

app.get("/", (req, res) => {
  res.send("API Eco Compare");
});

app.get("/api/vehicles/:id", (req, res) => {
  try {
    const vehicle = vehicles.find(
      (vehicle) => vehicle.id === Number.parseInt(req.params.id)
    );
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

app.get("/api/vehicles", (req, res) => {
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
