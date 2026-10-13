const Form = require("../models/formModel");

const showForm = (req,res)=>{
    res.render("Form", {message: ""});
};

const submitForm = (req,res)=>{
    const {name , email , phone} = req.body;

    if(!name || !email || !phone){
        return res.status(400).render("form", {
            message: "Please fill all fields",
        });
    }
    try{
        Form.saveForm({name,email,phone});

        res.render("form", {
            message: "Form submitted succesfully",
        });

    }catch (error){
        res.status(500).render("form", {
            message: "something went wrong!",
        });
    }
};


module.exports = {showForm, submitForm};