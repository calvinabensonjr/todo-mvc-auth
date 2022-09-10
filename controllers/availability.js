const Availability = require('../models/Availability')

module.exports = {
    getAvailability: async (req,res)=>{
        console.log(req.user)
        try{
            const meetings = await Availability.find().sort({ date: 1})
            res.render('availability.ejs', {teamSched: meetings})
        }catch(err){
            console.log(err)
        }
    },
    createMeeting: async (req, res)=>{
        try{
            await Availability.create({date: req.body.date, timeStart: req.body.timeStart, timeEnd: req.body.timeEnd, description: req.body.description, userID: req.user._id, userName: req.user.userName})
            console.log('Your meeting has been added!')
            res.redirect('/availability')
        }catch(err){
            console.log(err)
        }
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