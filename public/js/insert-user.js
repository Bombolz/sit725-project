let express = require("express");
let app = express();

const bp = require('body-parser')
app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

const bodyParser = require('body-parser');

app.use(express.json()); //new
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.post('/', (req, res) => {
  console.log("New user posted")
  console.log('body', req.body)
  let user = req.body;
  insertUser(user, res)
})

const userSchema = {
  first_name: String,
  last_name: String,
  mobile: String,
  email: String
}

const User = mongoose.model("User", userSchema);

app.get('/api/users',(req,res)=>{
  console.log('Users requested')
  // get projects from database
  getUsers(res)
})

app.post('/api/users', function(req, res) {
  console.log("New user posted")
  console.log('body', req.body)
  let user = req.body;
  insertUser(newUser, res)
})


//insert user to db
const insertUser = (user, res) => {
  usersCollection.insertOne(user, (err, result) => {
    console.log('User inserted', result)
    //res.send({ result: "form submitted successfully" + user })
    res.send({user})
  })
}

//get users
const getUsers = (res) => {
  usersCollection.find().toArray(function (err, result) {
    if (err) throw err;
    res.send(result)
  })
}

openConnection()

