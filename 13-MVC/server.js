// =======dependencies========
let express = require("express");
let path = require("path");
let fs = require("fs")
// ========set up the server========
let app = express();
let PORT = process.env.PORT || 8080;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"))
// =======declare variables=======
var notesData;
var newNote;

// index directory
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "public/index.html"));
});
// go to notes directory
app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "public/notes.html"));
})
//  get all notes
app.get("/api/notes", function (req, res) {
    fs.readFile(path.join(__dirname, "./db/db.json"), function (err, data) {
        if (err) throw err;
        notesData = JSON.parse(data)
        res.json(notesData)
    })
});
// write notes to json file
// read fs.readFile json first, fs.writefile next with JS file logic present to post new note after on-click event
app.post("/api/notes", function (req, res) {
    newNote = req.body
    // console.log(newNote) => should be the new note that was posted (works!)
    // need to add an id - edit, logic added to index.js to add a data="id" element to the rendered notes when added through DOM
    fs.readFile(path.join(__dirname, "./db/db.json"), function (err, data) {
        if (err) throw err;
        notesData = JSON.parse(data)
        notesData.push(newNote)
        // must be a string, requires a callback so include the err function.
        fs.writeFile(path.join(__dirname, "./db/db.json"), JSON.stringify(notesData),function (err, data) {
            if (err) throw err;
            res.send()
        });
        
    });
    
});
// delete notes from json file
// readFile and writeFile required similar to post, but this time the delete button logic in JS file will allow deletion with on-click event
app.delete("/api/notes/:id", function (req, res) {
    // console.log of res object => follow scope to grab id data
    // console.log(req.params.id)
    fs.readFile(path.join(__dirname, "./db/db.json"), function (err, data) {
        if (err) throw err;
        notesData = JSON.parse(data)
        // required to remove the specific id from the object array, and allow the values to shift over one place upon deletion
        notesData.splice(req.params.id,1)
        fs.writeFile(path.join(__dirname, "./db/db.json"), JSON.stringify(notesData),function (err, data) {
            if (err) throw err;
            res.send();
        })
    })
})

app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "public/index.html"));
});

// ======= server listener=========
app.listen(PORT, function () {
    console.log("getting started")
})