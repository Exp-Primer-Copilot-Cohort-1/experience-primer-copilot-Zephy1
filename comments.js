// Create a web server
// 1. Create a new Express web server
// 2. Setup two routes
//    - /comments
//      - Send back some json data with a welcome message
//    - /weather
//      - Send back some json data with the weather forecast
// 3. Test your work by visiting both in the browser

const express = require('express')
const path = require('path')
const app = express()
const port = 3000

const publicDirectoryPath = path.join(__dirname, '../public')

app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
  res.send('<h1>Weather</h1>')
})

app.get('/weather', (req, res) => {
  res.send({
    forecast: 'It is snowing',
    location: 'Philadelphia'
  })
})

app.get('/comments', (req, res) => {
  res.send({
    user: 'Jen',
    comment: 'I love this app'
  })
})

app.listen(port, () => {
  console.log(`Server is up on port ${port}.`)
})