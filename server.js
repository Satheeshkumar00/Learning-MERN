const express = require("express")
const port = 505
const app = express()

app.use(express.json())

app.use(express.urlencoded({extended: false}))

app.use('/api/todos', require('./backend/routes/toDoRoutes'))

app.listen(port, () => {
    console.log(`Server is listening in ${port}`)
})