
import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import hemlet from 'helmet'
import mockData, { errorResponse } from './mockData'

const app = express()

app.use(cors())
app.use(hemlet())

const jsonParser = bodyParser.json()
const urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get('/eth/test/tx/:txHash', jsonParser, async (req: any, res: any) => {
    console.info('REQ DATA: ', req.params)
    res.send(mockData)
  })

app.listen(8045)