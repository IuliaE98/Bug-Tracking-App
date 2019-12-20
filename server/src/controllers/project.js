const projectService = require('./../services/project');

const createProject = async (req, res, next) => {
    const project = req.body;
    if (project) {
        const result = await projectService.create(project);
        res.status(201).send({
            message: 'Project added successfully.'
        });
    } else {
        res.status(400).send({
            message: 'Invalid project payload.'
        });
    }
}

const getProject = async (req, res, next) => {
    const id = req.params.id;
    try {
        const project = await projectService.getOne(id);
        res.status(200).send(project);
    } catch (err) {
        res.status(500).send({
            message: `Error occured: ${err.message}`
        });
    }
}

const updateProject = async (req, res, next) => {
    const project = req.body;
    const id = req.params.id;
    try {
        const result = await projectService.updateOne(id, project)
        res.status(200).send("Project updated successfully");
    } catch (err) {
        res.status(500).send({
            message: `Error occured: ${err.message}`
        });
    }
}

const deleteProject = async (req, res, next) => {
    const id = req.params.id;
    try {
        const result = await projectService.deleteOne(id)
        res.status(200).send(result);
    } catch (err) {
        res.status(500).send({
            message: `Error occured: ${err.message}`
        });
    }
}

const getAllProjects = async (req, res, next) => {
    try {
        const projects = await projectService.getAll();
        res.status(200).send(projects);
    } catch (err) {
        res.status(500).send({
            message: `Error occured: ${err.message}`
        });
    }
}



module.exports = {
    createProject,
    getAllProjects,
    updateProject,
    deleteProject,
    getProject
}