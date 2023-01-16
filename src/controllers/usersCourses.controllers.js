const UserCourses = require("../models/userCourses.models");

class usersCoursesController {
    static async create (req, res) {
        const { user_id, course_id } = req.body;
        try {
            const userCourse = await UserCourses.create({user_id, course_id});
            res.status(201).json(userCourse);
        } catch (error) {
            res.status(500).json({error: error});
        };
    };

    static async getAll (req, res){
        try {
            const usersCourses = await UserCourses.findAll();
            res.status(200).json(usersCourses);
        } catch (error) {
            res.sendStatus(500);
        };
    };
};

module.exports = usersCoursesController;