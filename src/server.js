require('dotenv').config();
const { init } = require('./app.js');
const app = require('./app.js');
const initModels = require('./models/initModels.js');
const db = require('./utils/database')

const PORT = process.env.PORT || 8000;

initModels();

db.authenticate()
.then(()=> {console.log('DB conectada')})
.catch((error)=> console.log(error));

db.sync({force : true})
.then(()=>{console.log('DB sincronizada')})
.catch((error)=> {console.log(error)});

app.listen(PORT, ()=> {
    console.log("server on port " + PORT);
})