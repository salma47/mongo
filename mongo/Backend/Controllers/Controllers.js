const Contact = require("../models/Contact");

exports.addContact = async (req, res) => {
  const { name, email, age } = req.body;
  try {
    const find = await Contact.findOne({ email });

    if (find) {
      return res.status(400).send("email already exists");
    }
    const contact = new Contact({ name, email, age });
    await contact.save();
    res.status(201).send({ msg: "contact created", contact });
  } catch (error) {
    res.status(500).send("server error");
  }
};

exports.getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).send({ msg: "all contacts", contacts });
  } catch (error) {
    res.status(500).send("server error");
  }
};

exports.deleteContact = async (req, res) => {
  const { id } = req.params;
  try {
    await Contact.findByIdAndDelete(id);
    res.status(200).send("contact deleted");
  } catch (error) {
    res.status(500).send("server error");
  }
};

exports.updateContact = async (req, res) => {
  const { id } = req.params;
  try {
    const contactUpdate = await Contact.findByIdAndUpdate(
      id,
      {
        $set: { ...req.body },
      },
      { new: true }
    );
    res.status(200).send({ msg: "contact updated", contactUpdate });
  } catch (error) {
    res.status(500).send("server error");
  }
};


exports.getContact= async (req, res) => {
    const { id } = req.params;
    try {
      const contact = await Contact.findById(id);
      res.status(200).send({ msg: "contact founded", contact });
    } catch (error) {
      res.status(500).send("server error");
    }
  }
