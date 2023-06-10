const express = require('express');
const productApp = express.Router();
const expressAsyncHandler = require('express-async-handler');

productApp.use(express.json());

const products = [
  {
    id: 1,
    name: "9-1-127/1/D/1, Adj To Madhava Nursing Home, Lane Opp St Marys Church, S D Road, Hyderabad — 500003",
    location: "Hyderabad"
  },
  {
    id: 2,
    name: "Gandhi Hospital",
    location: "Hyderabad"
  },
  {
    id: 3,
    name: "Institute Of Preventive Medicine & Health Labs",
    location: "Hyderabad"
  },
  {
    id: 4,
    name: "Central Blood Bank",
    location: "Hyderabad"
  },
  {
    id: 5,
    name: "ltmr Speciality Diagnostics",
    location: "Hyderabad"
  }
];

const middleware1 = (request, response, next) => {
  console.log("middleware 1 executed");
  next();
};

productApp.use(middleware1);

productApp.get('/getbloodbank', expressAsyncHandler(async (request, response, next) => {
  try {
    response.send({ message: "All blood banks", payload: products });
  } catch (error) {
    next(error);
  }
}));

productApp.get('/getbloodbank/:id', expressAsyncHandler(async (request, response, next) => {
  try {
    const pid = (+request.params.id);
    const bloodbank = products.find((bloodbank) => bloodbank.id === pid);

    if (bloodbank) {
      response.send({ message: "Blood bank found", payload: bloodbank });
    } else {
      response.send({ message: "Blood bank not found" });
    }
  } catch (error) {
    next(error);
  }
}));

module.exports = productApp;
