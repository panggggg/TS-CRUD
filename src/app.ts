import bodyParser from 'body-parser'
import express, {Request, Response} from 'express'
import mongoose from 'mongoose'

const app = express()
const port: number = 3000

app.get('/', (req: Request, res: Response) => {
    res.send("Hello Pangpicc")
})

app.listen(port, () => {
    console.log(`App listening at port ${port}`)
})