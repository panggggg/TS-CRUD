import bodyParser from 'body-parser'
import config from 'config'
import express, {Request, Response} from 'express'
import mongoose from 'mongoose'
import router from '../src/routes/book.route'


const app = express()
const port: number = config.get('api.port')
console.log(port)

const username: string = config.get("mongo.username")
const password: string = config.get('mongo.password')
const host: string = config.get("mongo.host")
const mongoPort: number = config.get("mongo.port")
mongoose.connect(`mongodb://${username}:${password}@${host}:${mongoPort}/books-api?authSource=admin`, (err) => {
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