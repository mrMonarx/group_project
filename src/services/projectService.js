const {v4 : uuidv4} = require("uuid")
const {projects} = require("../config/database")
const {users} = require("../config/database")

exports.createProject = (projectData)=> {
    const project = {
        title: "Title 1",
        description: "Description 1",
        status: "Completed",
        deadline: Date(),
        ownerId: "asjf32poj23rsof2r",
        members: [
            "aslndofasoi32rne23",
            "adpiojp123r3adsapo",
        ]
    
    };
    projects.push(project)
}
