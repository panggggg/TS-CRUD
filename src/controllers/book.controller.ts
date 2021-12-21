import bookModel, { Books } from "../models/book.model"
import { Request, Response } from 'express'

export const getAllBooks = async (req: Request, res: Response) => {
    const result = await bookModel.find({})
    if (result) {
        return res.status(200).send(result)
    }
    return res.status(404).send({ message: 'Not found' })
}

export const getBookById = async (req: Request, res: Response) => {
    const bookId: string = req.params.id
    const result = await bookModel.findById({ _id: bookId })
    if (result) {
        return res.status(200).send(result)
    }
    return res.status(404).send({ message: `Book id ${bookId} not found` })
}

export const createBook = async (req: Request, res: Response) => {
    const book: Books = req.body
    const newBook = await new bookModel(book)
    const result = await newBook.save()
    if (result) {
        return res.status(200).send({ message: `Successfully created!` })
    }
    return res.status(404).send({ message: `Cannot create book` })

}

export const updateBook = async (req: Request, res: Response) => {
    const bookId: string = req.params.id
    const updateBook: Books = req.body
    const result = await bookModel.updateOne({ _id: bookId }, { $set: updateBook })
    if (result) {
        return res.status(200).send({ message: 'Successfully updated!' })
    }
    return res.status(404).send({ message: `Cannot update book` })
}

export const deleteBookById = async (req: Request, res: Response) => {
    const bookId: string = req.params.id
    const result = await bookModel.deleteOne({ _id: bookId })
    if (result) {
        return res.status(200).send({ message: `Book id ${bookId} has been deleted` })
    }
    return res.status(404).send({ message: `Book id ${bookId} not found!` })
}

