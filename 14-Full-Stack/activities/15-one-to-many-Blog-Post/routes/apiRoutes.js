var db = require("../models");
var path = require("path");

module.exports = function (app) {

    app.get("/", function (req, res) {
        console.log("Inside root route");
        res.sendFile(path.join(__dirname + "/../public/home.html"));
    })

    // Post to user table
    app.post("/api/newuser", function (req, res) {
        console.log("Inside new user");

        db.User.create({
            userName: req.body.userName,
            password: req.body.password,
            hasBlog: req.body.hasBlog
        }).then(function (result) {
            console.log("Inserted into user table");
        }).catch(function (err) {
            console.log(err);
        })
    })

    // Post to blog table
    app.post("/api/new/blog", function (req, res) {
        db.Blog.create({
            blogTitle: req.body.blogTitle,
            blogText: req.body.blogText,
            UserId: req.body.userId
        }).then(function (result) {
            console.log("Inserted into Blog table");
            res.json(result);
        })
    })

    // Find user corresponding to username and password
    app.get("/api/login/:username/:password", function (req, res) {

        db.User.findOne({
            where: {
                username: req.params.username,
                password: req.params.password
            }
        }).then(function (dbUser) {
            console.log(dbUser);
            res.json(dbUser);
        })
    })

    // Get blog page
    app.get("/:id", function (req, res) {
        console.log("Inside unique id");
        res.sendFile(path.join(__dirname, "/../public/blog.html"));
    })

    // To Update user table
    app.put("/api/user/update/:id", function (req, res) {
        var id = req.params.id;
        console.log("Inside update function of user table");
        console.log(id);

        db.User.update({
            hasBlog: 1
        }, {
            where: {
                id: id
            }
        }).then(function (result) {
            console.log("Updated user table");
            res.json(result);
        })
    })

    // To View all blogs and bloggers
    app.get("/api/view/blogs", function (req, res) {
        console.log("Inside all blogs function server side");

        db.Blog.findAll({
        }).then(function (result) {
            res.send(result);
        })

    })

    // To get the name of the blogger
    app.get("/api/blogger/name", function (req, res) {
        console.log("Inside get blogger name function");

        db.Blog.findAll({
            include: [{
                model: db.User,
                attributes: ['userName'],
                where: {
                    userId: db.Sequelize.col('User.id')
                }
            }],

        }).then(function (result) {
            console.log(result);
            res.json(result);
        }).catch(function (err) {
            console.log(err);
        })
    })

    // To get the name of user who had commented
    app.get("/api/comment/name/:id/:comments", function (req, res) {

        db.User.findOne({
            where: {
                id: req.params.id
            }
        }).then(function (dbUser) {
            console.log(dbUser);
            var result = {
                dbUser: dbUser,
                comments: req.params.comments
            }
            res.json(result);
        })
    })

    // To get blogs that I have created
    app.get("/api/myblog/:id", function (req, res) {
        console.log("Inside myblog function");

        db.Blog.findAll({
            where: {
                UserId: req.params.id
            }
        }).then(function (myBlog) {
            res.json(myBlog);
        })
    })

    // To post to comments table
    app.post("/api/new/comment", function (req, res) {
        db.Comment.create({
            id: req.body.id,
            comments: req.body.comments,
            userId: req.body.userId,
            BlogId: req.body.blogId
        }).then(function (result) {
            console.log("Inserted into Comments table");
            res.json(result);
        }).catch(function (err) {
            console.log(err);
        })
    })

    // To retrive comments based on blog ID
    app.get("/api/comments/:blogId", function (req, res) {

        db.Comment.findAll({
            where: {
                BlogId: req.params.blogId
            }
        }).then(function (comments) {
            res.json(comments);
        })
    })

    // To delete a blog
    app.put("/api/blog/delete/:id", function (req, res) {
        var id = req.params.id;

        db.Blog.destroy({
            where: {
                id: id
            }
        }).then(function (result) {
            res.json(result);
        })
    })

    // To delete a comment
    app.put("/api/comment/delete/:id", function (req, res) {
        var id = req.params.id;

        db.Comment.destroy({
            where: {
                id: id
            }
        }).then(function (result) {
            res.json(result);
        })
    })

    // To update a blog
    app.put("/api/blog/update/:id", function (req, res) {
        var id = req.params.id;

        db.Blog.update({
            blogText: req.body.contents
        }, {
            where: {
                id: id
            }
        }).then(function () {
            console.log("Updated blog table");
            res.json("Updated");
        })
    })
}