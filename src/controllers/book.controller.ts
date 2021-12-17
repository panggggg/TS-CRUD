import bookModel, { Books } from "../models/book.model"
import { Request, Response } from 'express'

export let getAllBooks = async (req: Request, res: Response) => {
    let result = await bookModel.find({})
    if (result) {
        res.status(200).send(result)
    }
    res.status(404).send({ message: 'Not found' })
}

export let getBookById = async (req: Request, res: Response) => {
    let bookId: string = req.params.id
    let result = await bookModel.findById({ _id: bookId })
    if (result) {
        res.status(200).send(result)
    }
    res.status(404).send({ message: 'Not found' })
}

export let createBook = async (req: Request, res: Response) => {
    let book: Books = req.body
    const newBook = await new bookModel(book)
    await newBook.save()
    res.status(200).send({ message: 'Successfully added' })

}

export let updateBook = async (req: Request, res: Response) => {
    let bookId: string = req.params.id
    let updateBook: Books = req.body
    await bookModel.updateOne({ _id: bookId }, { $set: updateBook })
    res.status(200).send({ message: 'Successfully updated!' })
}

export let deleteBookById = async (req: Request, res: Response) => {
    let bookId: string = req.params.id
    await bookModel.deleteOne({ _id: bookId })
    res.status(200).send({ message: `Book id ${bookId} has been deleted` })
}

