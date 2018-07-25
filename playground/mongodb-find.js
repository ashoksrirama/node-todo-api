// ES6 destructuring
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err) {
        return console.log('Unable to connect to Mongodb Server');
    }
    console.log('Connected to Mongodb Server');
    var db = client.db('TodoApp');

    db.collection('Todos').find({
        _id: new ObjectID('5b57d44b08f46c051e20ca3c')
    }).toArray().then((docs) => {
        console.log('Todos');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch Todos:', err);
    });

    db.collection('Todos').find().count().then((count) => {
        console.log(`Todos count: ${count}`);
        // console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch Todos:', err);
    });

    db.collection('Users').find({
        age: 33
    }).toArray().then((docs) => {
        console.log('Users');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch Users:', err);
    });

    client.close();
});

