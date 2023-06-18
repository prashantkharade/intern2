const express = require('express')
const app = express()
const port = 3000;

app.get('/',(req,res) => {
    res.send("hellloooo....!!!!after the update user put");
   
})
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use('/api/users', require('./routes/api/users'))

app.listen(3000, () => {
    console.log("hello.....")
    console.log(`Server run on ${port}`)
});