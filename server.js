const express = require("express")
const {errHandler} = require('./backend/middleware/errorMiddleware')
const port = 505
const app = express()

app.use(express.json())

app.use(express.urlencoded({extended: false}))

app.use('/api/todos', require('./backend/routes/toDoRoutes'))

app.use(errHandler)

app.listen(port, () => {
    console.log(`Server is listening in ${port}`)
})