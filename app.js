/**
 * app.js
 */
const express = require('express')
const app = express()
const PORT = process.env.PORT
const userAgentHandler = require('./middlewares/userAgentHandler')

app.set('view engine', 'ejs')
app.use('/public', express.static('assets'))
app.use(userAgentHandler)

app.get('/', (req,res,next)=>{
    return res.status(200).render('index')
})


app.listen(PORT, ()=>console.info(`Server is running on port ${PORT}`))