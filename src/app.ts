import bodyParser from 'body-parser'
import express, {Request, Response} from 'express'
import mongoose from 'mongoose'
import router from '../src/routes/book.route'

const app = express()
const port: number = 3000

const username: string = 'root'
const password: string = 'root'
mongoose.connect(`mongodb://${username}:${password}@localhost:27017/books-api?authSource=admin`, (err) => {
    if (err) throw err;
    console.log('Connected to database')
})

app.use(bodyParser.json());

app.get('/', (req: Request, res: Response) => {
    res.send("Hello Pangpicc")
})

app.use('/', router)

app.listen(port, () => {
    console.log(`App listening at port ${port}`)
})