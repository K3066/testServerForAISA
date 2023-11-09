const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser')
const v1ConfigRouter = require('./v1/routes/configRoutes')
const app = express();
const PORT = process.env.PORT || 5000;
app.use(bodyParser.json())
app.use(cors())
app.options('*',cors())
app.use('/api/v1/', v1ConfigRouter);
app.all('*', (req,res,next)=>{
        res.header("Access-Control-Allow-Origin", "*")
        res.header("Access-Control-Allow-Methods", '*')
        res.header("Access-Control-Allow-Headers", "*")
        next()
})
app.listen(PORT, () => {
    console.log(`API is listening on port ${PORT}`);
});