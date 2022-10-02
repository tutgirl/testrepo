const { MongoClient } = require('mongodb')
let dbConnection
module.exports = {
     connectToDb: (cb) => {
        // mongoose.connect('mongodb+srv://tutnetwork:Thunder@cluster0.39qnub8.mongodb.net/bookstore?retryWrites=true&w=majority')
        // MongoClient.connect('mongodb://localhost:27017/bookstore')
        MongoClient.connect('mongodb+srv://tutnetwork:Thunder@cluster0.39qnub8.mongodb.net/bookstore?retryWrites=true&w=majority')
        .then((client) => {
            dbConnection =  client.db()
            return cb()
        })
        .catch(err => {
            console.log(err)
            return cb(err)
        })
     },
     getDb: () => dbConnection

}