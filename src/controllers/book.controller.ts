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
    res.status(404).send({ message: `Book id ${bookId} not found` })
}

export let createBook = async (req: Request, res: Response) => {
    let book: Books = req.body
    const newBook = await new bookModel(book)
    let result = await newBook.save()
    if (result) {
        res.status(200).send({ message: `Successfully created!` })
    }
    res.status(404).send({ message: `Can not create book` })

}

export let updateBook = async (req: Request, res: Response) => {
    let bookId: string = req.params.id
    let updateBook: Books = req.body
    let result = await bookModel.updateOne({ _id: bookId }, { $set: updateBook })
    if (result) {
        res.status(200).send({ message: 'Successfully updated!' })
    }
    res.status(404).send({ message: `Can not update book` })
}

export let deleteBookById = async (req: Request, res: Response) => {
    let bookId: string = req.params.id
    let result = await bookModel.deleteOne({ _id: bookId })
    if (result) {
        res.status(200).send({ message: `Book id ${bookId} has been deleted` })
    }
    res.status(404).send({ message: `Book id ${bookId} not found!` })
}

