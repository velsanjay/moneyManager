const ExpenceDateRouter = require('express').Router();
const ExpenditureModel = require('../../models/ExpenditureModel')

ExpenceDateRouter.post('/date', async(req, res, next)=>{
    const {userId , date } = req.body;

    await ExpenditureModel.find({userId,date}).then((responce)=>{
            res.status(200).send({
                success:true,
                message:`Your ${detail[month]} month data is Feiched!!!`,
                data:responce
        })
       
    }).catch((err)=>{
        res.status(401).send({
            success:false,
            message:"User Not Found!!!",
            error:err
        })
    })
})

module.exports = ExpenceDateRouter
