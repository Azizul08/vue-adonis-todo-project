'use strict'

class ProjectController {
    async index({auth}){
         const user= await auth.getUser();
        console.log(user);
        return {
            message: 'Hello World',
        }
    }
}

module.exports = ProjectController
