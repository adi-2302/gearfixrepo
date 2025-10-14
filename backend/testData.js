// testData.js
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// ✅ 1. Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/gearfixdata', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ Connected to MongoDB: gearfixdata'))
.catch((err) => console.error('❌ MongoDB connection error:', err));

// ✅ 2. Define User Schema
const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
});

const User = mongoose.model('User', userSchema);

// ✅ 3. Insert Test Users
async function insertTestUsers() {
  try {
    const users = [
      { name: 'Alice Johnson', email: 'alice@example.com', password: 'password123' },
      { name: 'Bob Smith', email: 'bob@example.com', password: 'mysecret' },
      { name: 'Charlie Brown', email: 'charlie@example.com', password: 'gearfix2025' },
    ];

    // Hash passwords before inserting
    const saltRounds = 10;
    for (let user of users) {
      user.password = await bcrypt.hash(user.password, saltRounds);
    }

    await User.insertMany(users);
    console.log('✅ Test users inserted successfully!');
  } catch (err) {
    console.error('❌ Error inserting test users:', err.message);
  } finally {
    mongoose.connection.close();
  }
}

insertTestUsers();
