// const http = require('http');

// const server = http.createServer((req, res,) => {
//     console.log('el usuario realizo una peticion');
//     // console.log(req.method)
//     // console.log(req.url)
//     req.url === '/pija'? res.end('estoy en la pija :)') : res.end('no estoy en la pija :(')
//     // res.write('primer hola mundo en backend! ');
//     res.writeHead(200, {
//         'Content-Type': 'text/plain; charset=utf-8'
//     })
//     // res.end('¡termino mi transferenica!');
// });

// server.listen(8080)

// // console.log('estas')

// -----------------------------------------------------------------------------------------------------------  //


const express = require('express');

//inicializacion
const app = express();

//estructura


app.get('/saludo', (req, res) => {
    res.send('hola desde express!');
    // res.send(<h1>hola como estas</h1>)
})

const users = [
    {
        name: "pablo",
        id: 1,
        sex: "M"
    },
    {
        name: "juan",
        id: 2,
        sex: "M"
    },
    {
        name: "seba",
        id: 3,
        sex: "M"
    },
    {
        name: "camila",
        id: 4,
        sex: "F"
    }
]


app.get('/users', (req, res) => {
    console.log(req.query)
    if(req.query.sex) {
        const userSex = req.query.sex;
        const filteredUsers = users.filter(user => user.sex === userSex)
        return res.send(filteredUsers);
    }
    // const userName = req.query
    res.send(users);
})

app.get('/users/:userId', (req, res) => {
    console.log(req.params.userId)
    const userId = req.params.userId;
    const user = users.find(user => +userId === user.id);
    if(!user) {
        res.status(404). send('user not found!')
    }
    // res.send('El usuario es: ')
    res.send(user);
})




//puesta en marcha
app.listen(3000, () =>  console.log('server is lisening in port 3000'));