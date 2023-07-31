const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://news_portal_user:VN5flfrOXtsZWmsK@cluster0.zczskc6.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        console.log("databe connection stablished");

    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
export default run;

// pasword: VN5flfrOXtsZWmsK;
// user: news_portal_user;
