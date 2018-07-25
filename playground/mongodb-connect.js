// const MongoClient = require('mongodb').MongoClient;
// ES6 destructuring
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj.getTimestamp());

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err) {
        return console.log('Unable to connect to Mongodb Server');
    }
    console.log('Connected to Mongodb Server');
    var db = client.db('TodoApp');

    // db.collection('Todo').insertOne({
    //     text: 'This is my first insert',
    //     completed: false
    // }, (err, result) => {
    //     if(err) {
    //         return console.log('Unable to insert Todo', err);
    //     }
    //     console.log('Successfully inserted the document: ', JSON.stringify(result.ops, undefined, 2));
    // });

    // db.collection('Users').insertOne({
    //     name: 'Ashok',
    //     age: 33,
    //     location: 'Washington Crossig'
    // }, (err, result) => {
    //     if(err) {
    //         return console.log('Unable to insert User', err);
    //     }
    //     console.log('Successfully inserted User: ', JSON.stringify(result.ops, undefined, 2));
    //     console.log(result.ops[0]._id.getTimestamp());
    // });
    client.close();
});

