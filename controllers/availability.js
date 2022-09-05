const Todo = require('../models/Availability')

module.exports = {
    getAvailability: async (req,res)=>{
        console.log(req.user)
        try{
            // const todoItems = await Availability.find({userId:req.user.id})
            // const itemsLeft = await Availability.countDocuments({userId:req.user.id,available: true})
            res.render('availability.ejs')
        }catch(err){
            console.log(err)
        }
    },
    createMeeting: async (req, res)=>{
        // try{
        //     await Todo.create({todo: req.body.todoItem, completed: false, userId: req.user.id})
        //     console.log('Todo has been added!')
        //     res.redirect('/todos')
        // }catch(err){
        //     console.log(err)
        // }
    },
    deleteMeeting: async (req, res)=>{
        // try{
        //     await Todo.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
        //         completed: true
        //     })
        //     console.log('Marked Complete')
        //     res.json('Marked Complete')
        // }catch(err){
        //     console.log(err)
        // }
    }
}    