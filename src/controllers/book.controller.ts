import bookModel, {Books} from "../models/book.model"
import {Request, Response} from 'express'

export let getAllBooks = async (req: Request, res: Response) => {
    await bookModel.find({}, (err: any, book: Books) => {
        try{
            res.status(200).send(book)
        }catch(e: any){
            res.status(404).send(e)
        }
    })
}

export let createBook = async (req: Request, res: Response) => {
    const newBook = await new bookModel(req.body)
    newBook.save((err: any, book: Books) => {
        try{
            res.status(200).send({message: 'Successfully added'})
        } catch(e: any){
            res.status(404).send(e.message)
        }
    })
}
