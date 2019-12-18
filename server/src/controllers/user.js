const userService = require('./../services/user');

const createUser = async (req, res, next) => {
    const user = req.body;
    if (user) {
        const result = await userService.create(user);
        res.status(201).send({
            message: 'User added successfully.'
        });
    } else {
        res.status(400).send({
            message: 'Invalid user payload.'
        });
    }
}

const getAllUsers = async (req, res, next) => {
    try {
        const users = await userService.getAll();
        res.status(200).send(users);
    } catch (err) {
        res.status(500).send({
            message: `Error occured: ${err.message}`
        });
    }
}

const getUser = async (req, res, next) => {
    const email = req.params.email;
    try {
        const user = await userService.getOne(email);
        res.status(200).send(user);
    } catch (err) {
        res.status(500).send({
            message: `Error occured: ${err.message}`
        });
    }
}

const updateUser = async (req, res, next) => {
    const user = req.body;
    const email = req.params.email;
    try {
        const result = await userService.updateOne(email, user)
        res.status(200).send(result);
    } catch (err) {
        res.status(500).send({
            message: `Error occured: ${err.message}`
        });
    }
}



module.exports = {
    createUser,
    getAllUsers,
    getUser,
    updateUser
}