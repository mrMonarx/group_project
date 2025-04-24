const express = require("express")

const router = express.Router()
const projectController = require("../controllers/project_controller")
//create project
router.post("/",projectController.createProject)

//get project
router.post("/:id",projectController.getProject)

//delete project
router.post("/:id",projectController.deleteProject)

//update 
router.post("/:id",projectController.updateProject)

//get all
router.post("/",projectController.getProjects)

