const fs = require('fs')
const name = require('./utils.js')
const chalk = require('chalk')
const yargs = require('yargs')
const express = require('express')
const app = express()

// var msg = "hello node";
// console.log(msg )
// console.log(name)

// console.log(chalk.red.bgBlack.bold('hello world'))
// console.log(chalk.green.underline("hello motto"))
// console.log(chalk.green.hidden("hello motto"))
// console.log(chalk.red.dim("hello motto"))

// yargs.version('1.2.0')
// console.log(process)

//creating a note
// yargs.command({
//     'command': 'add',
//     'describe': 'Add a new Note',
//     'builder': {
//         'title': {
//             'describe': 'Note title',
//             'demandOption': true,
//             'type': 'string'
//         },
//         'body': {
//             'describe': 'Note Body',
//             'demandOption': true,
//             'type': 'string'
//         }

//     },
//     handler: function () {
//         console.log("Title: "+argv.title)
//         console.log("Body: "+argv.body)
//     }

// })
// yargs.command({
//     'command': 'remove',
//     'describe': 'Remove a new Note',
//     handler: function () {
//         console.log("note removed successfuly ")
//     }

// })

//callback function
// const geocode = (address, callback) => {
//     setTimeout(() => {
//         const data = {
//             latitude: 0,
//             longitude: 0
//         }
//         console.log("42", data, callback)

//         callback(data)
//         console.log("44", data)
//     }, 2000)
// }
// geocode('Philadelphia', (data) => {
//     console.log("48", data)
// })
// yargs.parse()
// console.log(yargs.argv)
// object destruction
// const product = {
//     label: 'Red notebook',
//     price: 3,
//     stock: 201,
//     salePrice: undefined,
//     rating: 4.2
// }
// const transaction = (type, { label, stock }) => {
//     console.log(type, label, stock)
// }
// transaction('order', product)
// fs.writeFileSync("notes.txt","Hello Node...........")
// fs.appendFileSync("notes.txt","I Live in gurgaon ")
//running server on port
// app.get('', (req, res) => {
//     res.send('Hello express!')
// })
// app.listen(3000, () => {
//     console.log('Server is up on port 3000.')
// })


//mongo db
const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient
const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'
MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client)
=> {
if (error) {
return console.log('Unable to connect to database!')
}
const db = client.db(databaseName)
// Start to interact with the database
})