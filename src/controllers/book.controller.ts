import bookModel, { Books } from "../models/book.model"
import { Request, Response } from 'express'

export let getAllBooks = async (req: Request, res: Response) => {
    await bookModel.find({}, (err: any, book: Books) => {
        if (err) {
            res.send(err)
        }
        res.send(book)
    })
}

export let getBookById = async (req: Request, res: Response) => {
    let bookId: string = req.params.id
    await bookModel.findById({ _id: bookId }, (err: any, book: Books) => {
        if (err) {
            res.send(err)
        }
        res.send(book)
    })
}

export let createBook = async (req: Request, res: Response) => {
    const newBook = await new bookModel(req.body)
    newBook.save((err: any, book: Books) => {
        try {
            res.status(200).send({ message: 'Successfully added' })
        } catch (e: any) {
            res.status(404).send(e.message)
        }
    })
}

export let updateBookById = async (req: Request, res: Response) => {
    let bookId: string = req.params.id
    await bookModel.findByIdAndUpdate({ _id: bookId }, (err: any, book: Books) => {
        if (err) {
            res.status(404).send(err)
        }
        res.status(200).send(`Book id ${bookId} has been updated!`)
    })
}

export let deleteBookById = async (req: Request, res: Response) => {
    let bookId: string = req.params.id
    await bookModel.findByIdAndDelete({ _id: bookId }, (err: any, book: Books) => {
        if (err) {
            res.status(404).send(err)
        }
        res.status(200).send(`Book id ${bookId} has been deleted!`)
    })
}

