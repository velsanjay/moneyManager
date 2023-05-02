const express = require('express')
const App = express()
const SignUpRouter = require('./Components/User/newUser');
const bodyParser = require('body-parser');
const SignInRouter = require('./Components/User/Sign')
const ForgetRouter = require('./Components/User/forget')
const IncomeRouter = require('./Components/Income/newIncome')
const GetIncomeRouter = require ('./Components/Income/getIncomDetail')
const NewExpenditure = require('./Components/Expenditure/NewExpenditure')
const GetExtenditureRouter = require('./Components/Expenditure/getExpenditure')
const IncomeMonthRouter = require('./Components/Income/GetByMonth')
const IncomeDateRouter = require('./Components/Income/GetByDate')
const IncomeYearRouter = require('./Components/Income/GetByYear')
const ExpenceMonthRouter = require('./Components/Expenditure/GetByMonth')
const ExpenceDateRouter = require('./Components/Expenditure/GetByDate')
const ExpenceYearRouter = require('./Components/Expenditure/GetByYear')
const ExpenceCatogieRouter = require('./Components/Expenditure/GetByCatogorie')
const EditIncomRoute = require('./Components/Income/EditIncomeDetail')
const EditExpenceRouter = require('./Components/Expenditure/EditExpenceDetail')
const cors = require('cors')
const GetUser = require('./Components/User/GetUser')

require("./Common/dbconfig")


App.use(bodyParser.urlencoded({extended:true}));
App.use(bodyParser.json());
App.use(cors())

App.use('/',SignUpRouter)
App.use('/',SignInRouter)
App.use('/',ForgetRouter)
App.use('/income',IncomeRouter)
App.use('/income',GetIncomeRouter)
App.use('/income',IncomeMonthRouter)
App.use('/income',IncomeDateRouter)
App.use('/income',IncomeYearRouter)
App.use('/income',EditIncomRoute)
App.use('/expence',NewExpenditure)
App.use('/expence',GetExtenditureRouter)
App.use('/expence',ExpenceMonthRouter)
App.use('/expence',ExpenceDateRouter)
App.use('/expence',ExpenceYearRouter)
App.use('/expence',ExpenceCatogieRouter)
App.use('/expence',EditExpenceRouter)
App.use('/',GetUser)


module.exports =App