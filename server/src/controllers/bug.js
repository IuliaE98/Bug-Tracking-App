const bugService = require('./../services/bug');

const createBug = async (req, res, next) => {
    const bug = req.body;
    if (bug) {
        const result = await bugService.create(bug);
        res.status(201).send({
            message: 'Bug added successfully.'
        });
    } else {
        res.status(400).send({
            message: 'Invalid bug payload.'
        });
    }
}

const getBug = async (req, res, next) => {
    const bugId = req.params.id;
    try {
        const bug = await bugService.getOne(bugId);
        res.status(200).send(bug);
    } catch (err) {
        res.status(500).send({
            message: `Error occured: ${err.message}`
        });
    }
}

const getAllBugs = async (req, res, next) => {
    try {
        const bugs = await bugService.getAll();
        res.status(200).send(bugs);
    } catch (err) {
        res.status(500).send({
            message: `Error occured: ${err.message}`
        });
    }
}

const updateBug = async (req, res, next) => {
    const bug = req.body;
    const id = req.params.id;
    try {
        const result = await bugService.updateOne(id, bug)
        res.status(200).send("Bug updated succesfully");
    } catch (err) {
        res.status(500).send({
            message: `Error occured: ${err.message}`
        });
    }
}

const deleteBug = async (req, res, next) => {
    const id = req.params.id;
    try {
        const result = await bugService.deleteOne(id)
        res.status(200).send("Bug succesfully deleted");
    } catch (err) {
        res.status(500).send({
            message: `Error occured: ${err.message}`
        });
    }
}

module.exports = {
    createBug,
    getAllBugs,
    updateBug,
    getBug,
    deleteBug
}