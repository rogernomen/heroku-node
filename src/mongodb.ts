import { MongoClient } from "mongodb";

const uri =
  "mongodb+srv://test-user-1:rdnHe6rybyBAi2rr@cluster0.os8zj.mongodb.net/test-db?retryWrites=true&w=majority";

const client = new MongoClient(uri);
const mongoDb = async function run() {
  try {
    await client.connect();
    const database = client.db('test-db');
    const users = database.collection('users');
    
    const query = { "name": 'Roger' };
    const user = await users.findOne(query);
    console.log('users', user);
  } finally {
    await client.close();
  }
}

export { mongoDb };