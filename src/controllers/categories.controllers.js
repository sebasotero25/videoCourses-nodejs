const Categories = require("../models/categories.models");


class categoriesControllers {
    
    static async getAll(req, res){
       try {
        const categories = await Categories.findAll();
        res.status(200).json(categories)
       } catch (error) {
        res.sendStatus(500)
       };
    };

    static async create(req, res){
        const {name} = req.body
        try {
        const category = await Categories.create({name});
        res.status(201).json(category)
        } catch (error) {
            res.sendStatus(500)

        };

    };

    static async update (req, res){
        const {category_id} = req.params;
        const {name} = req.body;
        try {
            const category = await Categories.findByPk(category_id)
            if (category) {
                category.name = name
            }
            category.save();

            res.status(202).json(category); 
            
        } catch (error) {
            res.status(500).json({error});
            
        };
    };

    static async delete(req, res){
        const {category_id} = req.params;
        try {
            const category = await Categories.findByPk(category_id)
            if(category){
                category.destroy()
                res.sendStatus(202);

            } else {
            res.status(500).json([{ message: "category not found"}]);
            };
        } catch (error) {
            res.status(500).json({error});
            
        };
    };


};

module.exports = categoriesControllers;