$(document).ready(function () {
    // To store the ID of user who is currently logged in
    var userId = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);
    var userName;
    var blogContents;

    $("#signup-btn").on("click", function (event) {
        event.preventDefault();
        // To get value from user
        userName = $("#username").val().trim();
        var password = $("#password").val().trim();

        // New obj creation
        var newUser = {
            userName: userName,
            password: password,
            hasBlog: false
        }

        // Post values to User table
        $.ajax("/api/newuser", {
            type: "POST",
            data: newUser
        }).then(function () {
            console.log("Inserted to table");
            alert("Congrats! You have created an account with us!");
        })
    })

    $("#login-btn").on("click", function (event) {
        event.preventDefault();
        console.log("Inside login button");

        var username = $("#loginUserName").val().trim();
        var password = $("#loginpassword").val().trim();

        getUser(username, password);
    })

    function getUser(username, password) {
        $.get("/api/login/" + username + "/" + password, function (data) {
            console.log(data);
            if(data === null)
            alert("Please create an account");
            uniqueUserId = data.id;
            console.log(uniqueUserId);
            window.location = "/" + uniqueUserId;
        })
    }

    $("#submit-btn").on("click", function (event) {
        event.preventDefault();
        console.log("Inside submit button");
        var blogText = $("textarea#blogText").val().trim();
        var blogTitle = $("textarea#blogTitle").val().trim();

        var newBlog = {
            userId: userId,
            blogText: blogText,
            blogTitle: blogTitle
        }

        // Post to blog table
        $.ajax("/api/new/blog", {
            type: "POST",
            data: newBlog
        }).then(function (result) {
            console.log("Inserted into Blog Table");

            // Update user table
            $.ajax("/api/user/update/" + userId, {
                type: "PUT"
            }).then(function () {
                console.log("Updated value to user table")
            })
        })
        location.reload();
    })

    // View all blogs event
    $("#view-btn").on("click", function (event) {
        event.preventDefault();
        console.log("Inside view button");

        $.ajax("/api/view/blogs", {
            type: "GET"
        }).then(function (result) {
            getBloggerName();
        })
    })

    // Function to get all names of blogger
    function getBloggerName() {

        $.ajax("/api/blogger/name", {
            type: "GET"
        }).then(function (result) {
            console.log(result);
            generateList(result, false);
        })
    }

    // Function to show all blogs to DOM
    function generateList(arr, currentUser) {

        $("#allBlogs").empty();
        for (var i = 0; i < arr.length; i++) {
            blogContents = $("<div>");
            blogContents.addClass("jumbotron");
            var blogTitle = $("<h1>");
            blogTitle.addClass("display-4");
            if (currentUser)
                blogTitle.text(`${arr[i].blogTitle}`);
            else
                blogTitle.text(`${arr[i].blogTitle} by ${arr[i].User.userName}`);
            var hrTag = $("<hr>");
            hrTag.addClass("my-4");
            var pTag = $("<p>");
            pTag.text(arr[i].blogText);
            var comments = $("<textarea>");
            comments.attr("id", "comments");
            comments.attr("data-id", arr[i].id);
            var commentSection = $("<div>");
            commentSection.attr("data-id", arr[i].id);
            var addCommentBtn = $("<button>");
            addCommentBtn.attr("type", "submit");
            addCommentBtn.addClass("btn btn-dark");
            addCommentBtn.attr("id", "comment-btn");
            addCommentBtn.attr("data-id", arr[i].id);
            addCommentBtn.text("Add Comment");
            var viewCommentsBtn = $("<button>");
            viewCommentsBtn.attr("type", "submit");
            viewCommentsBtn.addClass("btn btn-dark");
            viewCommentsBtn.attr("id", "viewComment-btn");
            viewCommentsBtn.attr("data-id", arr[i].id);
            viewCommentsBtn.text("View all comments");
            var deleteBtn = $("<button>");
            deleteBtn.attr("type", "submit");
            deleteBtn.addClass("btn btn-danger");
            deleteBtn.attr("id", "delete-btn");
            deleteBtn.attr("data-id", arr[i].id);
            deleteBtn.text("Delete");
            // var editBtn = $("<button>");
            // editBtn.attr("type", "submit");
            // editBtn.addClass("btn btn-primary");
            // editBtn.attr("id", "edit-btn");
            // editBtn.attr("data-id", arr[i].id);
            // editBtn.text("Edit");
            var editSection = $("<textarea>");
            editSection.attr("id", "editSection");
            editSection.attr("data-edit", arr[i].id);
            // editSection.addClass("d-none");
            var submitEditBtn = $("<button>");
            submitEditBtn.attr("type", "submit");
            submitEditBtn.attr("data-id", arr[i].id);
            submitEditBtn.attr("id", "submit-edit-btn");
            submitEditBtn.addClass("btn btn-warning");
            submitEditBtn.text("Edit");
            blogContents.append(blogTitle);
            blogContents.append(hrTag);
            blogContents.append(pTag);
            blogContents.append(comments);
            blogContents.append(commentSection);
            blogContents.append(addCommentBtn);
            blogContents.append(viewCommentsBtn);
            if (currentUser) {
                blogContents.append(deleteBtn);
                blogContents.append(editSection);
                blogContents.append(submitEditBtn);
            }
            $("#allBlogs").append(blogContents);
        }
    }

    // To view blogs I have created
    $("#viewMy-btn").on("click", function (event) {
        event.preventDefault();
        console.log("Inside view my blogs button");

        $.ajax("/api/myblog/" + userId, {
            type: "GET"
        }).then(function (result) {
            console.log(result);
            generateList(result, true);
        })

    })

    // To post a comment
    $(document).on("click", "#comment-btn", function (event) {
        event.preventDefault();
        var commentId = $(this).data("id");
        console.log(`Comment ID ${commentId}`);
        var comments = $("textarea[data-id=" + commentId + "]").val();
        var newComment = {
            comments: comments,
            userId: userId,
            blogId: commentId
        }

        // Post to comments table
        $.ajax("/api/new/comment", {
            type: "POST",
            data: newComment
        }).then(function () {
            console.log("Posted to comment table");
        })
        // To clear the value out
        $("textarea[data-id=" + commentId + "]").val("");
    })

    //  To view all comments
    $(document).on("click", "#viewComment-btn", function (event) {
        event.preventDefault();

        var commentId = $(this).data("id");
        console.log(`Comment ID : ${commentId}`);
        getComments(commentId);
    })

    // Function to get comments for a particular blog
    function getComments(blogId) {
        $.ajax("/api/comments/" + blogId, {
            type: "GET"
        }).then(function (results) {
            displayComments(results, blogId);
        })
    }

    // Function to display comments
    function displayComments(arr, id) {
        console.log(arr);
        $("div[data-id=" + id + "]").empty();
        console.log(arr);
        var ulTag = $("<ul>");
        ulTag.addClass("list-group");
        for (var i = 0; i < arr.length; i++) {
            var comments = arr[i].comments;
            var commentId = arr[i].id;

            $.ajax("/api/comment/name/" + arr[i].userId + "/" + comments, {
                type: "GET"
            }).then(function (result) {
                console.log(result);
                username = result.dbUser.userName;
                usersId = result.dbUser.id;
                var liTag = $("<li>");
                liTag.addClass("list-group-item");
                var p1Tag = $("<p>");
                p1Tag.text(`${result.comments}`);
                var p2Tag = $("<p>");
                p2Tag.text(`Commented By: ${username}`);
                liTag.append(p1Tag);
                liTag.append(p2Tag);
                var deleteBtn = $("<button>");
                deleteBtn.attr("type", "submit");
                deleteBtn.addClass("btn btn-danger");
                deleteBtn.attr("id", "delete-comment-btn");
                deleteBtn.attr("data-id", commentId);
                deleteBtn.text("Delete");
                liTag.append(deleteBtn);
                ulTag.append(liTag);
                $("div[data-id=" + id + "]").append(ulTag);

                // To delete a comment
                $(document).on("click", "#delete-comment-btn", function (event) {
                    event.preventDefault();
                    var id = $(this).data("id");

                    console.log(usersId);
                    console.log(userId);
                    if (userId == usersId) {
                        // Delete route
                        $.ajax("/api/comment/delete/" + id, {
                            type: "PUT"
                        }).then(function () {
                            console.log("Deleted");
                        })
                    }
                    else {
                        alert(`You can't perform a delete action`);
                    }
                    location.reload();
                })
            })
        }
    }

    // To delete a blog
    $(document).on("click", "#delete-btn", function (event) {
        event.preventDefault();
        var id = $(this).data("id");
        console.log(id);

        $.ajax("/api/blog/delete/" + id, {
            type: "PUT"
        }).then(function () {
            console.log("Deleted");
        })

        location.reload();
    })

    // To update blog table with new edited post
    $(document).on("click", "#submit-edit-btn", function (event) {
        event.preventDefault();
        var editId = $(this).data("id");
        console.log(editId);
        var contents = $("textarea[data-edit=" + editId + "]").val();
        console.log(`Contents ${$("textarea[data-edit=" + editId + "]").val()}`);

        var newData = {
            contents: contents
        }

        $.ajax("/api/blog/update/" + editId, {
            type: "PUT",
            data: newData
        }).then(function () {
            console.log("Updated your blog");
        })
        location.reload();
    })

    // Function tp get the name of users who commented
    // function getUsername(id) {
    //     var username;

    //     $.ajax("/api/comment/name/" + id, {
    //         type: "GET"
    //     }).then(function (result) {
    //         username = result.userName;
    //     })
    //     console.log(username);
    //     return username;
    // }
})