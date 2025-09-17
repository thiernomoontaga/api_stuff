import thing from '../models/thing.js';
import fs from 'fs';
export const creatething = (req, res, next) => {
    let thingObject;
    let imageUrl = '';

    if (req.file && req.body.thing) {
        try {
            thingObject = JSON.parse(req.body.thing);
            imageUrl = `${req.protocol}://${req.get('host')}/images/${req.file.filename}`;
        } catch (err) {
            return res.status(400).json({ error: "Invalid JSON in 'thing' field" });
        }
    }
    else if (req.body && !req.file) {
        thingObject = req.body;
        imageUrl = req.body.imageUrl || ''; 
    } else {
        return res.status(400).json({ error: "Bad request: missing data" });
    }

    delete thingObject._id;
    delete thingObject._userId;

    const newThing = new thing({
        ...thingObject,
        userId: req.auth.userId,
        imageUrl: imageUrl
    });

    newThing.save()
        .then(() => res.status(201).json({ message: "objet creer ! " }))
        .catch(error => res.status(400).json(error));
};

export const modifyThing = (req, res, next) => {
   const thingObject = req.file ? {
       ...JSON.parse(req.body.thing),
       imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
   } : { ...req.body };
 
   delete thingObject._userId;
   thing.findOne({_id: req.params.id})
       .then((thing) => {
           if (thing.userId != req.auth.userId) {
               res.status(401).json({ message : 'Not authorized'});
           } else {
               thing.updateOne({ _id: req.params.id}, { ...thingObject, _id: req.params.id})
               .then(() => res.status(200).json({message : 'Objet modifié!'}))
               .catch(error => res.status(401).json({ error }));
           }
       })
       .catch((error) => {
           res.status(400).json({ error });
       });
};

export const deleteThing = (req, res, next) => {
   thing.findOne({ _id: req.params.id})
       .then(thing => {
           if (thing.userId != req.auth.userId) {
               res.status(401).json({message: 'Not authorized'});
           } else {
               const filename = thing.imageUrl.split('/images/')[1];
               fs.unlink(`images/${filename}`, () => {
                   thing.deleteOne({_id: req.params.id})
                       .then(() => { res.status(200).json({message: 'Objet supprimé !'})})
                       .catch(error => res.status(401).json({ error }));
               });
           }
       })
       .catch( error => {
           res.status(500).json({ error });
       });
};

export const getOnetThing = (req,res,next)=>{
    thing.findOne({_id: req.params.id})
    .then(
    thing=>res.status(200)
    .json(thing))
    .catch(
    error=>res.status(404)
    .json({error}))
}

export const getAllThing = (req,res,next)=>{
    thing.find()
    .then(
    (things)=>res.status(200)
    .json(things))
    .catch(
    error=>res.status(400)
    .json({error}))
}

