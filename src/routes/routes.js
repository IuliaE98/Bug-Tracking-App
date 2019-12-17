const express = require('express');
const router = express.Router();

const { createUser, getAllUsers, getUser, updateUser } = require('./../controllers/user');
const { getAllProjects, getProject, createProject, updateProject, deleteProject } = require('./../controllers/project');
const { getAllBugs, getBug, createBug, updateBug, deleteBug } = require('./../controllers/bug');


router.post('/user', createUser);
router.get('/user', getAllUsers);
router.put('/user/:id', updateUser);
router.get('/user/:id', getUser)

router.get('/bug', getAllBugs);
router.get('/bug/:id', getBug);
router.post('/bug', createBug);
router.update('/bug/:id', updateBug);
router.delete('/bug/:id', deleteBug);

router.get('/project', getAllProjects);
router.get('/project/:id', getProject);
router.post('/project', createProject);
router.update('/project/:id', updateProject);
router.delete('/project/:id', deleteProject);

module.exports = router;