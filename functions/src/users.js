import dbConnect from "./dbConnect.js";

export function affirmation(req, res) {
    const { title, message } = req.body;
    const db = dbConnect();
    db.collection('users').add({ title, message })
    .then(doc => {
        res.status(201).send({ success: true, user: {title, id: doc.id}})
    })
    .catch(err => {
        res.status(500).send({success: false, message: err.message})
    });
}


