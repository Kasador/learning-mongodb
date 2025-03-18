# 🗂 NodeJS/Express + MongoDB
[![My Skills](https://skillicons.dev/icons?i=js,nodejs,express,mongodb,postman,npm)](https://skillicons.dev)

### Repo made to learn **_NodeJS w/ MongoDB._** This will also include making restful APIs and dealing with requests and responses.

# ❗ℹ️ Important Information
- 📝 **_Reference_**: **[https://mongoosejs.com/docs/api/model.html](https://mongoosejs.com/docs/api/model.html)**
### Mongoose/MongoDB Models

- `Model()` - Creates a new instance of the model.
- `Model.$where()` - Applies a JavaScript function as a query selector.
- `Model.aggregate()` - Performs aggregation operations on the collection.
- `Model.applyDefaults()` - Applies default values to a document.
- `Model.applyTimestamps()` - Applies timestamps (`createdAt` and `updatedAt`) to a document.
- `Model.applyVirtuals()` - Applies virtual fields to a document.
- `Model.bulkSave()` - Saves multiple documents in bulk efficiently.
- `Model.bulkWrite()` - Performs multiple write operations in bulk.
- `Model.castObject()` - Casts an object to match the schema type definitions.
- `Model.cleanIndexes()` - Removes unused indexes from the database.
- `Model.countDocuments()` - Counts the number of documents matching a query.
- `Model.create()` - Creates a new document and saves it to the database.
- `Model.createCollection()` - Creates a new collection explicitly.
- `Model.createIndexes()` - Ensures all indexes defined in the schema are created.
- `Model.createSearchIndex()` - Creates a search index for full-text search.
- `Model.db` - Provides access to the database instance.
- `Model.deleteMany()` - Deletes multiple documents matching a query.
- `Model.deleteOne()` - Deletes a single document matching a query.
- `Model.diffIndexes()` - Compares schema indexes with MongoDB indexes.
- `Model.discriminator()` - Creates a subclass of a model using an existing schema.
- `Model.distinct()` - Finds distinct values for a specified field.
- `Model.dropSearchIndex()` - Drops the full-text search index from the collection.
- `Model.ensureIndexes()` - Ensures all defined indexes exist in the collection.
- `Model.estimatedDocumentCount()` - Returns an estimated count of documents.
- `Model.events` - Emits and listens to Mongoose events.
- `Model.exists()` - Checks if a document matching a query exists.
- `Model.find()` - Finds multiple documents that match a query.
- `Model.findById()` - Finds a single document by its `_id` field.
- `Model.findByIdAndDelete()` - Finds a document by `_id` and deletes it.
- `Model.findByIdAndUpdate()` - Finds a document by `_id` and updates it.
- `Model.findOne()` - Finds a single document that matches a query.
- `Model.findOneAndDelete()` - Finds and deletes a document that matches a query.
- `Model.findOneAndReplace()` - Finds and replaces a document that matches a query.
- `Model.findOneAndUpdate()` - Finds and updates a document that matches a query.
- `Model.hydrate()` - Converts a plain JavaScript object into a Mongoose document.
- `Model.init()` - Initializes a model by ensuring indexes.
- `Model.insertMany()` - Inserts multiple documents into the collection.
- `Model.insertOne()` - Inserts a single document into the collection.
- `Model.inspect()` - Provides debugging information about the model.
- `Model.listIndexes()` - Lists all indexes in the collection.
- `Model.listSearchIndexes()` - Lists search indexes in the collection.
- `Model.namespace()` - Returns the namespace of the collection.
- `Model.populate()` - Populates referenced fields with actual documents.
- `Model.prototype.$model()` - Returns a model instance from a document.
- `Model.prototype.$where` - Returns the JavaScript function used for `$where` queries.
- `Model.prototype.base` - Provides access to the base Mongoose instance.
- `Model.prototype.baseModelName` - Returns the name of the base model.
- `Model.prototype.collection` - Returns the MongoDB collection associated with the model.
- `Model.prototype.db` - Provides access to the database instance.
- `Model.prototype.deleteOne()` - Deletes a document from the instance.
- `Model.prototype.discriminators` - Returns the discriminators associated with the model.
- `Model.prototype.increment()` - Increments a numeric field in the document.
- `Model.prototype.model()` - Returns the model constructor from a document.
- `Model.prototype.modelName` - Returns the name of the model.
- `Model.prototype.save()` - Saves changes made to a document.
- `Model.recompileSchema()` - Recompiles the model schema.
- `Model.replaceOne()` - Replaces an existing document in the collection.
- `Model.schema` - Provides access to the model schema.
- `Model.startSession()` - Starts a new MongoDB transaction session.
- `Model.syncIndexes()` - Synchronizes indexes with the database.
- `Model.translateAliases()` - Converts alias field names to actual field names.
- `Model.updateMany()` - Updates multiple documents that match a query.
- `Model.updateOne()` - Updates a single document that matches a query.
- `Model.updateSearchIndex()` - Updates the search index for the collection.
- `Model.useConnection()` - Attaches the model to a different connection.
- `Model.validate()` - Validates a document against the schema.
- `Model.watch()` - Watches changes in the collection using MongoDB change streams.
- `Model.where()` - Creates a query builder instance with a condition.

### Most Used Models

- `Model.create()` - Creates a new document and saves it to the database.
- `Model.find()` - Finds multiple documents that match a query.
- `Model.findById(id)` - Finds a single document by its `_id` field.
- `Model.findOne(query)` - Finds the first document that matches a query.
- `Model.findByIdAndUpdate(id, update, options)` - Finds a document by `_id` and updates it.
- `Model.findByIdAndDelete(id)` - Finds a document by `_id` and deletes it.
- `Model.findOneAndUpdate(query, update, options)` - Finds and updates a document that matches a query.
- `Model.findOneAndDelete(query)` - Finds and deletes a document that matches a query.
- `Model.deleteMany(query)` - Deletes multiple documents matching a query.
- `Model.deleteOne(query)` - Deletes a single document matching a query.
- `Model.updateOne(query, update, options)` - Updates a single document that matches a query.
- `Model.updateMany(query, update, options)` - Updates multiple documents that match a query.
- `Model.countDocuments(query)` - Counts the number of documents matching a query.
- `Model.exists(query)` - Checks if at least one document matching a query exists.
- `Model.insertMany(array)` - Inserts multiple documents into the collection efficiently.
- `Model.populate(path)` - Populates referenced fields with actual documents.
- `Model.watch()` - Watches for changes in the collection using MongoDB change streams.
- `Model.aggregate(pipeline)` - Performs complex aggregation operations.
- `Model.startSession()` - Starts a MongoDB transaction session for handling multiple operations atomically.
- `Model.validate(document)` - Validates a document against the schema before saving.
- `Model.syncIndexes()` - Synchronizes indexes with the database.
- `Model.hydrate(obj)` - Converts a plain JavaScript object into a Mongoose document.
- `Model.distinct(field)` - Finds distinct values for a specified field.

# npm Packages Needed/Installed

- `npm i express`
- `npm i morgan`
- `npm i dotenv`
- `npm i -D nodemon`
- `npm i mongoose`

# 🛠️ 🐛 Progress/Bugs

### ⚙️ Creating a database and connecting it:

### ╰┈➤

```js
const mongoose = require('mongoose'); // npm package for easy connection to MongoDB

const connectDB = async () => { // async func to connect to db, needs time
    try { // try to connect to db 
        const conn = await mongoose.connect(process.env.MONGODB_URI); // using env variables for db URI
        // useUnifiedTopology: true, is no longer needed; is a deprecated option
        console.log(`Connected to MongoDB successfully: ${conn.connection.host}.`);
    } catch (error) { // if connection failed; error out message
        console.error(error)
    } 
}

module.exports = connectDB;
```

```js
require('dotenv').config(); // import once, for use of env variables thru-out application/api
const app = require('./app'); // main app >>> All dev inside this folder
const connectDB = require('./app/db/config'); // require the config file 

connectDB(); // connect to database

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => { // event handler (listen) - console message
    console.log(`Server is running on port: ${PORT}`);
});
```

