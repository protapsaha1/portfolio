const express = require("express");
const cors = require("cors");
const app = express();
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
require("dotenv").config();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

const projects = require("./projects.json");
app.get("/projects", (req, res) => {
    res.send(projects);
})

app.get("/projects/:id/:name", (req, res) => {
    const id = req.params.id;
    const result = projects.find(pro => pro._id === id);
    // const name = (req.params.name);
    // const pro_name = projects.find(pro => pro.name === name);
    // console.log(ggg)
    // const result = projects.find(_id & pro_name);
    res.send(result);

})

app.post("/send-mail", async (req, res) => {
    const { from, subject, message, name, phone } = req.body;

    const transporter = nodemailer.createTransport({
        // host: "smtp.gmail.com",
        // port: 465,
        // secure: true,
        service: "gmail",
        auth: {
            user: `${process.env.user}`,
            pass: `${process.env.pass}`
        },
    });

    const mailInfo = {
        from: from,
        to: "protap.saha009@gmail.com",
        subject: subject,
        text: `Name: ${name}\nPhone: ${phone}\nMessage:\n ${message}`,
    };

    try {
        await transporter.sendMail(mailInfo);
        res.status(200).send("successfully sent mail");
    } catch {
        res.status(500).send("error to sens");
        console.error("error to send mail", err);
    }

});
app.get("/", (req, res) => {
    res.send("its ok running");
})

app.listen(port, () => {
    console.log("portfolio ->")
});
