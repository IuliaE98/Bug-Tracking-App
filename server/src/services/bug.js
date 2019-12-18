const { Bug } = require('./../models/models');

const bug = {
    create: async (bug) => {
        try {
            const result = await Bug.create(bug);
            return result;
        } catch (err) {
            throw new Error(err.message);
        }
    },
    getAll: async () => {
        try {
            const bugs = await Bug.findAll();
            return bugs;
        } catch (err) {
            throw new Error(err.message);
        }
    },
    getOne: async (id) => {
        try {
            const bug = await Bug.findAll({
                where: {
                    identifier: id
                }
            })
            return bug;
        } catch (err) {
            throw new Error(err.message);
        }
    },
    updateOne: async (id, bug) => {
        try {
            const newBug = await Bug.update({
                name: bug.name,
                priority: bug.priority
            },
                {
                    where: {
                        identifier: id
                    }
                })
            return newBug;
        } catch (err) {
            throw new Error(err.message);
        }
    },
    deleteOne: async (id) => {
        try {
            const result = await Bug.destroy({
                where: {
                    identifier: id
                }
            })
            return result;
        } catch (err) {
            throw new Error(err.message);
        }
    },
}

module.exports = bug;