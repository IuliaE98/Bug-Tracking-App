const { User } = require('./../models/models');

const user = {
    create: async (user) => {
        try {
            const result = await User.create(user);
            return result;
        } catch (err) {
            throw new Error(err.message);
        }
    },
    getAll: async () => {
        try {
            const users = await User.findAll();
            return users;
        } catch (err) {
            throw new Error(err.message);
        }
    },
    getOne: async (email) => {
        try {
            const user = await User.findAll({
                where: {
                    email: email
                }
            })
            return user;
        } catch (err) {
            throw new Error(err.message);
        }
    },
    updateOne: async (email, user) => {
        try {
            const newUser = await User.update({
                firstName: user.firstName,
                lastName: user.lastName,
                role: user.role,
            },
                {
                    where: {
                        email: email
                    }
                })
            return newUser;
        } catch (err) {
            throw new Error(err.message);
        }
    },
}

module.exports = user;