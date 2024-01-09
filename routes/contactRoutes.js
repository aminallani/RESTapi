const express = require("express")
const router= express.Router()
const {getContact,addContact,updateContact,deleteContact}= require("../controllers/contactControllers")

router.get("/contacts",getContact)
router.post("/addContact",addContact)
router.put("/updateContact/:id",updateContact)
router.delete("/deleteContact/:id",deleteContact)


module.exports = router