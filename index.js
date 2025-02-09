
import express from "express";
import bodyParser from "body-parser";
import axios from "axios";


const app = express();
const port = 3000;
app.use(express.static("public"));


app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', async (req, res)=>{
    try {
        const result = await axios.get("https://secrets-api.appbrewery.com/random");
        res.render("index.ejs", { 
            secret: result.data.secret,
            user : result.data.username
         });
        
      } catch (error) {
        res.render("index.ejs", { content: JSON.stringify(error.response.data) });
      }
    
})


app.listen(port,()=>{
    console.log(`server running on ${port}`)
})