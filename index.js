const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())

const port = process.env.PORT || 3000

const stockData = [
  {
    symbol: "APPL",
    lastTradePriceOnly: 1000,
    change: 100,
    changeInPercent: 0.01,
  },
  {
    symbol: "GOOG",
    lastTradePriceOnly: 800,
    change: -10,
    changeInPercent: -0.025,
  },
  {
    symbol: "FB",
    lastTradePriceOnly: 500,
    change: 5,
    changeInPercent: 0.01,
  },
  {
    symbol: "AMZN",
    lastTradePriceOnly: 700,
    change: 70,
    changeInPercent: 0.1,
  },
  {
    symbol: "TWTR",
    lastTradePriceOnly: 100,
    change: -10,
    changeInPercent: -0.1,
  },
]

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/stocks/snapshot', (req, res) => {
  const symbols = req.query.symbols || ''
  res.send(stockData.filter(arr => symbols.toUpperCase().indexOf(arr.symbol) > -1))
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
