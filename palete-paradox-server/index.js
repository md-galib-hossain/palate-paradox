const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT;
// middleware
app.use(cors());
app.use(express.json());

// database configuration

const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.fkxltzv.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    // Getting database collections
    const menuCollection = client.db("paradoxdb").collection("menu");
    const reviewCollection = client.db("paradoxdb").collection("reviews");
    const cartCollection = client.db("paradoxdb").collection("carts");

    // getting menu items
    app.get("/menu", async (req, res) => {
      const result = await menuCollection.find().toArray();
      res.send(result);
    });
    // getting review items
    app.get("/reviews", async (req, res) => {
      const result = await reviewCollection.find().toArray();
      res.send(result);
    });
    // Cart collection
app.post('/carts', async (req,res)=>{
  const item = req.body
  console.log(item);
  const result = await cartCollection.insertOne(item)
  res.send(result)
})
// getting cart items based on email
app.get('/carts', async(req,res) =>{
const email = req.query.email;
if(!email){
  res.send([])
}
const query = { email : email}
const result = await cartCollection.find(query).toArray();
res.send(result);
})

// delete cart item
app.delete('/carts/:id', async(req,res) =>{
  const id = req.params.id
const query = { _id: new ObjectId(id)}
const result = await cartCollection.delete(query)
res.send(result)

});
  

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("heyyyy");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
