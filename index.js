const app = require('express')();
const mongo = require('mongoose');
const parser = require('body-parser');

app.use(parser.urlencoded({urlencoded:true}))
app.use(parser.json());

mongoose.connect("mongodb+srv://Dev09:9827359312@dbmongo.2lahq.mongodb.net/<dbname>?retryWrites=true&w=majority",{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
  .then(console.log("MOngoConntected"))

const route = require('./Routes/route');
app.use("/us",route);



const port = process.env.PORT||5000;
app.listen(port,(req,res)=>{
     console.log('Server On==> ',port);
});