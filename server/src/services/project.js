const { Project } = require('./../models/models');

const project = {
    create: async (project) => {
        try {
            const result = await Project.create(project);
            return result;
        } catch (err) {
            throw new Error(err.message);
        }
    },
    getAll: async () => {
        try {
            const projects = await Project.findAll();
            return projects;
        } catch (err) {
            throw new Error(err.message);
        }
    },
    getOne: async (id) => {
        try {
            const project = await Project.findAll({
                where: {
                    identifier: id
                }
            })
            return project;
        } catch (err) {
            throw new Error(err.message);
        }
    },
    updateOne: async (id, project) => {
        try {
            const newProject = await Project.update({
                name: project.name,
                repoLink: project.repoLink
            },
                {
                    where: {
                        identifier: id
                    }
                })
            return newProject;
        } catch (err) {
            throw new Error(err.message);
        }
    },
    deleteOne: async (id) => {
        try {
            const result = await Project.destroy({
                where: {
                    identifier: id
                }
            })
            return result;
        } catch (err) {
            throw new Error(err.message);
        }
    }
}

module.exports = project;