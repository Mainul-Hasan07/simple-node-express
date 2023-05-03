const express = require('express');
const cors = require('cors');
const app = express()

app.use(cors());
app.use(express.json())

const port = 5000;

app.get('/',(req,res)=>{
    res.send('Hello Friends,I am from express,hey,learn about server site,here learn more')
})

const users = [
    {id:0,name: 'Shabana', email: 'shabana@gmail.com',phone: '01234'},
    {id:1,name: 'kuddus', email: 'kuddus@gmail.com',phone: '012323'},
    {id:2,name: 'kolpona', email: 'kolpona@gmail.com',phone: '01764'},
    {id:3,name: 'sushmita', email: 'sushmita@gmail.com',phone: '0138'},
    {id:4,name: 'shabnoor', email: 'shabnoor@gmail.com',phone: '3837'},
]

app.get('/users',(req,res)=>{
    const search = req.query.search;
    if(search){
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search))
        res.send(searchResult)
    }
    else{
        res.send(users)
    }
})

// App Method
app.post('/users',(req,res)=>{
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting post',req.body)
    res.json(newUser);
})

app.get('/users/:id',(req,res)=>{
    const id = req.params.id;
    const user = users[id];
    res.send(user);
})

app.get('/fruits',(req,res)=>{
    res.send(['mango','oranges','banana','apple'])
})

app.get('/fruits/mangoes/fazli',(req,res)=>{
    res.send('yummy tok wala mangoes')
})

app.listen(port,()=>{
    console.log('listening port',port)
});