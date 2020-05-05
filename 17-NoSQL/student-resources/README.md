[Return to Home](../../../README.md)

<hr>

<img src="../../00-admin-resources/assets/images/mongodb.jpg" height="60">

# Student Resources

## Table of Contents

### Terminology & Links

01. [MongoDB](#MongoDB)
02. [Sharding](#sharding)

### Installation Resources
01. [Installing](#installing-mongodb-on-your-machine)


### IndexDB
01. [IndexDB Resources](#indexdb-resources)

### Audio Resources
01. [Podcasts](./podcasts.md)



<hr>

## MongoDB

[Back to top](#student-resources)

* [json-and-bson: binary JSON](https://www.mongodb.com/json-and-bson)
* [what-is-mongodb](https://www.mongodb.com/what-is-mongodb)
* [What is MongoDB? | MongoDB | Video](https://youtu.be/CvIr-2lMLsk)
* [MongoDB In 30 Minutes: t=6m55s](https://youtu.be/pWbMrx5rVBE?t=6m55s)
* [default-mongodb-port](https://docs.mongodb.com/manual/reference/default-mongodb-port/)
* [MongoDBm Lab Heroku Deployment Process](resources/pdf)
* [Default MongoDB Port](https://docs.mongodb.com/manual/reference/default-mongodb-port/)
* [mongojs](https://www.npmjs.com/package/mongojs)

Mongo CRUD
* [MongoDB CRUD Operations](https://docs.mongodb.com/manual/crud/)

Create/Insert
* [insert-documents](https://docs.mongodb.com/manual/tutorial/insert-documents/)
* [insert-methods](https://docs.mongodb.com/manual/reference/insert-methods/)

Read/Query
* [query-documents[(https://docs.mongodb.com/manual/tutorial/query-documents/)

Update
* [update-documents](https://docs.mongodb.com/manual/tutorial/update-documents/)
* [update-methods](https://docs.mongodb.com/manual/reference/update-methods/)

Delete
* [remove-documents](https://docs.mongodb.com/manual/tutorial/remove-documents/)
* [delete-methods](https://docs.mongodb.com/manual/reference/delete-methods/)


* [Difference between scaling horizontally and vertically for databases](https://stackoverflow.com/questions/11707879/difference-between-scaling-horizontally-and-vertically-for-databases)

* [What are the advantages of using a schema-free database like MongoDB compared to a relational database?](https://stackoverflow.com/questions/2117372/what-are-the-advantages-of-using-a-schema-free-database-like-mongodb-compared-to)

* [Why I think Mongo is to Databases what Rails was to Frameworks](http://www.railstips.org/blog/archives/2009/12/18/why-i-think-mongo-is-to-databases-what-rails-was-to-frameworks/)

* [Why Schemaless?](https://www.mongodb.com/blog/post/why-schemaless)

* [Robomongo](https://robomongo.org/download)

* (Cheerio: Fast, flexible, and lean implementation of core jQuery designed specifically for the server.)[https://cheerio.js.org/]

* [Cheerio: Github](https://github.com/cheeriojs/cheerio)

* [".children([selector])"](https://github.com/cheeriojs/cheerio#childrenselector)

* [.sort(sort)](https://docs.mongodb.com/manual/reference/method/cursor.sort/)
>Result Ordering

>Unless you specify the sort() method or use the $near operator, MongoDB does not guarantee the order of query results.

>Ascending/Descending Sort

>Specify in the sort parameter the field or fields to sort by and a value of 1 or -1 to specify an ascending or descending sort respectively.

* [Mongo Set Up](https://www.npmjs.com/package/mongojs)

```Javascript
var mongojs = require('mongojs')
var db = mongojs(connectionString, [collections])
```

The connection string should follow the format described in the mongo connection string docs. Some examples of this could be:

* [morgan](HTTP request logger middleware for node.js)
>Named after [Dexter](http://en.wikipedia.org/wiki/Dexter_Morgan), a show you should not watch until completion.

## [Sharding](https://en.wikipedia.org/wiki/Shard_(database_architecture)) - we do not Shard in Class ;)

[Back to top](#student-resources)

Is a type of database partitioning that separates very large databases the into smaller, faster, more easily managed parts called data shards. The word shard means a small part of a whole.

Horizontal scaling means that you scale by adding more machines into your pool of resources whereas Vertical scaling means that you scale by adding more power (CPU, RAM) to an existing machine.

-----------------------------------------

# Installing MongoDB on your Machine

[Back to top](#student-resources)

### Contents

1. [Installing MongoDB on Windows](#1-installing-mongodb-on-windows)
2. [Installing MongoDB on MacOS](#3-installing-mongodb-on-macos)

-----------------------------------------

## Installing MongoDB On Windows
### Step One: Installing MongoDB on Windows

[back to installing](#installing-mongodb-on-your-machine)

1. Go to the MongoDB download page: <a href="https://www.mongodb.com/download-center#community" target="_blank">MongoDB Download Center</a>

2. Scroll down, go to the green box with the Community Server Tab highlighted.

3. Go to the dropdown menu labeled "Version." Select "Windows 64-bit x64," then click the "DOWNLOAD (msi)" button.

4. The next page will thank you for downloading MongoDB then show a newsletter link. You can ignore this. In a few seconds, your browser will notify you that the file is downloading.

5. Open up Windows Explorer and locate the installation file (it should be in the default directory where your browser stores downloads). Open the file and follow the instructions.

* When the installer prompts you to "Choose Setup Type," click the Complete button, then carry on.

* **DO NOT** Install `Compass` along with your MongoDB install.

* A window might pop up mid-installation, asking you whether you’re sure you want to download a particular component of MongoDB. Click yes, otherwise the install will fail.

-----------------------------------------

## Step Two: Configuring MongoDB on Windows

[back to installing](#installing-mongodb-on-your-machine)

1. **IMPORTANT**: You need to create a data directory for your MongoDB installation, or it won't run. Open Git Bash, then cd your way to the root directory:

2. `cd c:`

3. Run the following command:

4. `mkdir -p data/db`

5. This is the default location for MongoDB’s databases. You need a directory for your databases, or else you MongoDB will refuse to run.

6. You’ll also want to add MongoDB’s path to the PATH environment variable, so that you can run it easily from the bash command line.

7. First, locate the directory where you installed MongoDB. This is likely `C:\\Program Files\\MongoDB\\Server\\<version_number>\\bin`. Copy this directory to your clipboard.

8. Then, open up the System menu or Control Card on your machine, usually accessible via the Start menu or Search Bar in Windows operating systems.

9. Go to Advanced Settings.

* If you are on Windows 10 and opened the Control Panel, click **System and Security**; **System**; and **Advanced System Settings**.

10. When a new window opens up, click the **Environment Variables** button located toward the bottom of the window.

11. An Environment Variables window should open up. Look at the bottom half of this window, a scrollable table called "System Variables." Look at the Variable column and search for the variable called Path. Click on it, then click the "Edit…" button below.

12. The next window will look different depending on your version of Windows. You’ll either be able to press the "New" button and paste your MongoDB directory into the input box that shows up, or you’ll have to paste the directory at the end of a long string of other directories. So it goes.

13. If you would prefer video instructions for this part, watch this:
    [![Youtube Link](http://img.youtube.com/vi/sBdaRlgb4N8/0.jpg)](https://www.youtube.com/watch?v=sBdaRlgb4N8&feature=youtu.be&t=120)

14. Test if it worked: Close your current Git Bash window, then reopen it and run this command: `mongod`

15. **NOTE**: No "b" at the end, simply `mongod`

16. If mongod is still running, great job! Now go ahead and open a new instace of Git Bash, and enter the command: `mongo`. This will initialize the Mongo Shell and allow you to begin entering commands via the Mongo Shell. Congratulations, you’ve installed MongoDB. Your instructor will take it from here.

17. If mongod didn’t run, and instead your bash threw a "command not found" error, make sure you added MongoDB’s bin directory to your PATH variable (see step B.3). Then, close out git bash and try running mongod again.

18. If mongod starts but closes after a series of prompts, make sure you created the data/db directory in your root. MongoDB cannot run without this directory (see steps 2.1-2.2).

19. If you’re still encountering issues starting mongod, please ask for assistance from one of the TAs or the instructor.

<hr>


## Installing MongoDB On MacOS

### Step One: Installing MongoDB on MacOS

[back to installing](#installing-mongodb-on-your-machine)

1. Run the following command in terminal:

2. `brew install mongodb`

-----------------------------------------

### Step Two: Configuring MongoDB on MacOS

[back to installing](#installing-mongodb-on-your-machine)

1. **IMPORTANT**: You need to create a data directory for your MongoDB installation, or it will not work. 

2. Use the following exact commands (see note below if you want to know what these do):

   1. `sudo mkdir -p /data/db`

   2. `sudo chown -R $USER /data/db`

   3. `sudo chmod go+w /data/db`

3. With the data/db directory made, you're ready to run MongoDB. Enter this command in your terminal window: `mongod`

4. **NOTE**: No "b" at the end, simply `mongod`

5. If mongod didn’t exit from your window, great job! You’ve installed MongoDB. Your instructor will take it from here.

6. If mongod starts but closes after a series of prompts, make sure you created the data/db directory in your root directory, MongoDB cannot run without this directory (see steps 4.1-4.2).

7. If you’re still encountering issues starting mongod, please ask for assistance from one of the TAs or the instructor.

8. If you do not want to use homebrew, you can alternatively follow these instructions: <https://docs.mongodb.com/v3.0/tutorial/install-mongodb-on-os-x/>. However, installing MongoDB without homebrew can be a bit of a headache. Installing homebrew on your mac will make your life as a web developer a ton easier.

_The commands in #2 create a directory with administrative privileges, make your account the owner of that directory (instead of the "root" account owning it), and add write permissions to that directory so the apps you write are able to update your database_

-----------------------------------------


## IndexDB Resources


### Using IndexedDB

[Using IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB)

### IDBFactory.open()

[IDBFactory.open()](https://developer.mozilla.org/en-US/docs/Web/API/IDBFactory/open)

>The open() method of the IDBFactory interface requests opening a connection to a database.

>The method returns an IDBOpenDBRequest object immediately, and performs the open operation asynchronously. If the operation is successful, a success event is fired on the request object that is returned from this method, with its result attribute set to the new IDBDatabase object for the connection.

>If an error occurs while the database connection is being opened, then an error event is fired on the request object returned from this method.

[IDBCursor](https://developer.mozilla.org/en-US/docs/Web/API/IDBCursor#Properties)
[IDBCursor Properties](https://developer.mozilla.org/en-US/docs/Web/API/IDBCursor#Methods)
[IDBCursor Methods](https://developer.mozilla.org/en-US/docs/Web/API/IDBCursor#Methods)


### upgradeneeded event

[upgradeneeded event](https://developer.mozilla.org/en-US/docs/Web/API/IDBOpenDBRequest/upgradeneeded_event)

>The upgradeneeded event is fired when an attempt was made to open a database with a version number higher than its current version.


### IDBRequest.onsuccess

[IDBRequest.onsuccess](https://developer.mozilla.org/en-US/docs/Web/API/IDBRequest/onsuccess)

>The onsuccess event handler of the IDBRequest interface handles the success event, fired when the result of a request is successfully returned.

>The event handler takes one parameter, a success Event with type="success".

### .createObjectStore()

[.createObjectStore()](https://developer.mozilla.org/en-US/docs/Web/API/IDBDatabase/createObjectStore)

>The createObjectStore() method of the IDBDatabase interface creates and returns a new object store or index.

>The method takes the name of the store as well as a parameter object that lets you define important optional properties. You can use the property to uniquely identify individual objects in the store. As the property is an identifier, it should be unique to every object, and every object should have that property.

>This method can be called only within a versionchange transaction.


### .createIndex()

[.createIndex()](https://developer.mozilla.org/en-US/docs/Web/API/IDBObjectStore/createIndex)

>The createIndex() method of the IDBObjectStore interface creates and returns a new IDBIndex object in the connected database. It creates a new field/column defining a new data point for each database record to contain.

>Bear in mind that IndexedDB indexes can contain any JavaScript data type; IndexedDB uses the structured clone algorithm to serialize stored objects, which allows for storage of simple and complex objects.

>Note that this method must be called only from a VersionChange transaction mode callback.


### .transaction()

[.transaction()](https://developer.mozilla.org/en-US/docs/Web/API/IDBDatabase/transaction)

>The transaction method of the IDBDatabase interface immediately returns a transaction object (IDBTransaction) containing the IDBTransaction.objectStore method, which you can use to access your object store.

### .add()

[.add()](https://developer.mozilla.org/en-US/docs/Web/API/IDBObjectStore/add)

>The add() method of the IDBObjectStore interface returns an IDBRequest object, and, in a separate thread, creates a structured clone of the value, and stores the cloned value in the object store. This is for adding new records to an object store.

>To determine if the add operation has completed successfully, listen for the transaction’s complete event in addition to the IDBObjectStore.add request’s success event, because the transaction may still fail after the success event fires. In other words, the success event is only triggered when the transaction has been successfully queued.

>The add method is an insert only method. If a record already exists in the object store with the key parameter as its key, then an error ConstrainError event is fired on the returned request object. For updating existing records, you should use the IDBObjectStore.put method instead.

### .openCursor()

[.openCursor()](https://developer.mozilla.org/en-US/docs/Web/API/IDBObjectStore/openCursor)

>The openCursor() method of the IDBObjectStore interface returns an IDBRequest object, and, in a separate thread, returns a new IDBCursorWithValue object. Used for iterating through an object store with a cursor.

>To determine if the add operation has completed successfully, listen for the results’s success event.

### .getAll()

[.getAll()](https://developer.mozilla.org/en-US/docs/Web/API/IDBObjectStore/getAll)

> The getAll() method of the IDBObjectStore interface returns an IDBRequest object containing all objects in the object store matching the specified parameter or all objects in the store if no parameters are given.

> If a value is successfully found, then a structured clone of it is created and set as the result of the request object.

> This method produces the same result for:

* a record that doesn't exist in the database

* a record that has an undefined value

>To tell these situations apart, you either call 

* the openCursor() method with the same key. That method provides a cursor if the record exists, and no cursor if it does not.

* the count() method with the same key, which will return 1 if the row exists and 0 if it doesn't.