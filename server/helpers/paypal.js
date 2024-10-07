const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id:
    "AUa864NTJlDBwUALE8IzkIvic5iDDDRO-oXjyu3ZPAh0k7GggBkzU3x9dcrEVisUAZfWGIXgFqqjYF_V",
  client_secret:
    "EBZAggE4rlnjnlXPd3HNKDhG2xtbamXLub4Y6ANxkGe5gahq94e0OnDYdKTFowbGN8nv8f7Smt5LHPGo",
});

module.exports = paypal;
