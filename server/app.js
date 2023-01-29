import express from 'express'
import routeBook from './src/routes/book.api.js'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors())

app.use('/',routeBook)

app.listen(3000)