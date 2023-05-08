const express = require("express");
const {
  addContact,
  getContacts,
  deleteContact,
  updateContact,
  getContact,
} = require("../Controllers/Controllers");
const Contact = require("../models/Contact");

const router = express.Router();

// router.get("/test", (req, res) => {
//   res.send("this is a test");
// });

// add new contact
// method post
// req.body

router.post("/addContact", addContact);

//get all contacts
//method get

router.get("/getAllContacts", getContacts);

//delete contact
// method delete
// req.params

router.delete("/deleteContact/:id", deleteContact);

// update Contact
// method put
// req.params req.body

router.put("/updateContact/:id", updateContact);

// get one contact
// method get
// req.params

router.get("/getOneContact/:id", getContact);

module.exports = router;
