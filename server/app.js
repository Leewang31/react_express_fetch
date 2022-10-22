// D:\Code\egoing\express_test\server> node app.js
const express = require('express')
const app = express()
const morgan = require('morgan');
const cors = require('cors')
app.use(morgan('tiny'));

app.use(cors())

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({extended: true})) // for parsing application/x-www-form-urlencoded
let id = 2
const todoList = [{
    id: 1,
    text: "할일 1",
    done: false,
}]
app.get('/', function (req, res) {
    res.send('Hello World')
})
app.get('/api/todo', (req, res) => {
    res.json(todoList)
})
app.post('/api/todo', (req, res) => {
    console.log('req.body',req.body); //데이터 전송 확인
    const {text, done} = req.body;
    todoList.push({
            id: id++,
            text,
            done,
        }
    )
    return res.send('success')
})


app.listen(4000, () => {
    console.log("server start!")
})