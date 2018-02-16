const
  express = require('express'),
  app = express(),
  PORT = process.env.PORT || 3001

var questions = 
  {
    question: "what to bring for potluck",
    answers:["coconuts", "avocado", "luck", "pots"]
}

app.use(express.static(`${__dirname}/client/build`))

app.get('/api', (req, res) => {
  res.json({message: "api root"})
})

app.get('/api/questions', (req, res) => {
  res.json(questions)
})

app.get('*', (req, res) => {
  res.sendFile(`${__dirname}/client/build/index.html`)
})

app.listen(PORT, (err) => {
  console.log(err || `Server started on port: ${PORT}`)
})