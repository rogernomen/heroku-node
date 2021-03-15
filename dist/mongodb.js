"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mongoDb = void 0;
const mongodb_1 = require("mongodb");
// Replace the uri string with your MongoDB deployment's connection string.
const uri = "mongodb+srv://test-user-1:rdnHe6rybyBAi2rr@cluster0.os8zj.mongodb.net/test-db?retryWrites=true&w=majority";
const client = new mongodb_1.MongoClient(uri);
const mongoDb = async function run() {
    try {
        await client.connect();
        const database = client.db('test-db');
        const users = database.collection('users');
        // Query for a movie that has the title 'Back to the Future'
        const query = { "name": 'Roger' };
        const user = await users.findOne(query);
        console.log('users', user);
    }
    finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
};
exports.mongoDb = mongoDb;
//# sourceMappingURL=mongodb.js.map