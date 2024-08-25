import express from 'express';
import rootRouter from './Routes/index.js'
import 'dotenv/config'
import cors from 'cors';


console.log(process.env.MOGODB_URI )


const app = express();

app.use(cors({ origin: '*' }));

app.use(express.json());



app.use('/api/v1' , rootRouter)


app.listen(3000 , ()=>{
    console.log("our app is running on the port 3000");
    
})