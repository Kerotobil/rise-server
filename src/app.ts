import express, { Application, Request, Response } from "express"
import cors from "cors";

const app: Application = express()

const port: number = 5000

const priority = {
    Urgent: 3,
    Important: 2,
    Regularly: 1,
}
app.use(cors());
app.get('/', (req: Request, res: Response) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.send("Lütfen /getPriority isteğini kullanın")
})

app.get('/getPriority', (req: Request, res: Response) => {
    res.send(priority)
})

app.listen(port, function () {
    console.log(`App is listening on port ${port} !`)
})