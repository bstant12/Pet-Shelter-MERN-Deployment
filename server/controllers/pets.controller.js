const Pet = require('../models/pet.model');

module.exports = {

    index: (req, res) => {
        Pet.find().collation({locale:'en', strength:3}).sort({name:1})
            .then(results => res.json(results))
            .catch(err => res.status(400).json(err.errors));
    },

    create: (req, res) => {
        Pet.create(req.body)
            .then(result => res.json(result))
            .catch(err => res.status(400).json(err.errors));
    },

    show: (req, res) => {
        Pet.findById({_id:req.params.id})
            .then(result => res.json(result))
            .catch(err => res.status(400).json(err.errors))
    },

    update: (req, res) => {
        Pet.findOneAndUpdate({_id:req.params.id}, req.body, 
            {runValidators:true, useFindAndModify:true, context:'query'})
            .then(result => res.json(result))
            .catch(err => res.status(400).json(err.errors));
    },

    destroy: (req, res) => {
        Pet.deleteOne({_id:req.params.id})
            .then(result => res.json(result))
            .catch(err => res.status(400).json(err.errors));
    }

}