import bookModel, { Books } from "../models/book.model"
import { Request, Response } from 'express'

export let getAllBooks = async (req: Request, res: Response) => {
    // await bookModel.find({}, (err: any, result: Books) => {
    //     if(err){
    //         res.send(err)
    //     }
    //     res.status(200).send(result)
    // })
    let result = await bookModel.find({})
    if (result) {
        return res.status(200).send(result)
    }
    return res.status(404).send({ message: 'Not found' })
}

export let getBookById = async (req: Request, res: Response) => {
    let bookId: string = req.params.id
    let result = await bookModel.findById({ _id: bookId })
    if (result) {
        return res.status(200).send(result)
    }
    return res.status(404).send({ message: `Book id ${bookId} not found` })
}

export let createBook = async (req: Request, res: Response) => {
    let book: Books = req.body
    const newBook = await new bookModel(book)
    // await newBook.save((err: any) => {
    //     if(err){
    //         res.send(err)
    //     }
    //     res.send(book)
    // })
    let result = await newBook.save()
    if (result) {
        return res.status(200).send({ message: `Successfully created!` })
    }
    return res.status(404).send({ message: `Can not create book` })

}

export let updateBook = async (req: Request, res: Response) => {
    let bookId: string = req.params.id
    let updateBook: Books = req.body
    let result = await bookModel.updateOne({ _id: bookId }, { $set: updateBook })
    if (result) {
        return res.status(200).send({ message: 'Successfully updated!' })
    }
    return res.status(404).send({ message: `Can not update book` })
}

export let deleteBookById = async (req: Request, res: Response) => {
    let bookId: string = req.params.id
    let result = await bookModel.deleteOne({ _id: bookId })
    if (result) {
        return res.status(200).send({ message: `Book id ${bookId} has been deleted` })
    }
    return res.status(404).send({ message: `Book id ${bookId} not found!` })
}

