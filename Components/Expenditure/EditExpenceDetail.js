const EditExpenceRouter = require('express').Router()
const { validate } = require('../../Common/auth')
const ExpenditureModel = require('../../models/ExpenditureModel')

EditExpenceRouter.patch('/edit',validate,async(req,res,next)=>{
    const {_id,detail,amount} = req.body;

    let user = await ExpenditureModel.findOne({_id}).then(()=>{
 
     }).catch((err)=>{
         res.status(401).send({
             success:false,
             message:"User Not Found"
         })
     })
 
     user.detail=detail
     user.amount = amount
     await user.save().then((respone)=>{
         res.status(200).send({
             success:true,
             message:"Data Updated Successfully!!!",
             data:respone
         })
     })
})

module.exports = EditExpenceRouter