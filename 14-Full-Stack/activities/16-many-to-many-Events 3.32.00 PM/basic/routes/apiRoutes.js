var db = require("../models");

module.exports = function (app) {
  // route used for checking user info during login
  app.put("/api/user", (req, res) => {
    // search User table for one item where email & password matches req.body
    db.User.findOne({
      where: req.body
    })
      .then(user => {
        // send user id back to client
        res.json(user.id);
      }).catch(err => {
        // error
        console.log(err);
        // send a false statement for client to handle error
        res.send(false);
      })
  })
  // route used to register a new user
  app.post("/api/user", (req, res) => {
    // create an item in User with values taken from req.body
    db.User.create(req.body)
      .then(user => {
        // send back the user id to client
        res.json(user.id);
      }).catch(err => {
        console.log(err)
        res.send(false);
      })
  })

  // route used to get information from a specific user
  app.get("/api/user/:id", (req, res) => {
    // find a specific user by where id matches req.params.id
    db.User.findOne({
      where: {
        id: req.params.id
      },
      // specify which columns to send back -- omitting password
      attributes: ["id", "email", "name"]
    }).then(user => {
      res.json(user);
    }).catch(err => {
      console.log(err);
      res.send(false)
    })
  })

  // route used to update information for a specific user
  app.put("/api/user/:id", (req, res) => {
    // update a row in User table where id matches req.params.id with new values from req.body
    db.User.update(req.body, {
      where: {
        id: req.params.id
      }
    }).then(() => {
      // send a truthy statement because client doesn't need DB data back
      res.send(true);
    }).catch(err => {
      console.log(err);
      res.send(false);
    })
  })

  // route used to get all events made by user
  app.get("/api/user/:id/events", (req, res) => {
    // search Event table for all events where hostId matches req.params.id
    db.Event.findAll({
      where: {
        hostId: req.params.id
      }
    }).then(events => {
      res.json(events)
    }).catch(err => {
      console.log(err);
      res.send(false);
    })
  })

  // route used to get all events the user is attending
  app.get("/api/user/:id/attending", (req, res) => {
    // search UserEvent table where UserId matches req.params.id
    db.UserEvent.findAll({
      where: {
        UserId: req.params.id
      },
      // join Event table for event data
      include: {
        model: db.Event,
        // join User table inside of event data for Host Name
        include: {
          model: db.User,
          as: "host",
          attributes: ["name"]
        }
      }
    }).then(users => {
      // create a new array
      let data = [];
      // push all event information into data to omit unneeded data
      users.forEach(user => {
        data.push(user.Event)
      })
      res.json(data);
    }).catch(err => {
      console.log(err);
      res.send(false);
    })
  })

  // route used to get all events
  app.get("/api/event", (req, res) => {
    // search Event table for all events
    db.Event.findAll({
      // join User since it contains the host's name
      include: [
        {
          model: db.User,
          as: "host",
          attributes: ["name"]
        }
      ],
    }).then(events => {
      res.json(events);
    }).catch(err => {
      console.log(err);
      res.send(false);
    })
  })

  // route used to create a new event
  app.post("/api/event", (req, res) => {
    // create a new event with columns and values specified in req.body
    db.Event.create(req.body)
      .then(eventData => {
        db.UserEvent.create({
          UserId: req.body.hostId,
          EventId: eventData.id
        }).then(() => {
          res.send(true);
        }).catch(err => {
          console.log(err);
          res.send(false);
        })
      }).catch(err => {
        console.log(err);
        res.send(false);
      })
  })

  // route used to get 
  app.put("/api/event/:id", (req, res) => {
    // update an event's data with new values specified in req.body where event.id matches req.params.id
    db.Event.update(req.body, { where: { id: req.params.id } })
      .then(() => {
        res.send(true);
      }).catch(err => {
        console.log(err);
        res.send(false);
      })
  })

  // route used to delete an event
  app.delete("/api/event/:id", (req, res) => {
    // completely remove an item in the Event table where event.id matches req.params.id
    db.Event.destroy({ where: { id: req.params.id } })
      .then(() => {
        res.send(true)
      }).catch(err => {
        console.log(err);
        res.send(false);
      })
  })

  // route used to get attendees for a specific event
  app.get("/api/event/:id/attendees", (req, res) => {
    // search UserEvent table where EventId matches req.params.id
    db.UserEvent.findAll({
      where: {
        EventId: req.params.id
      },
      // join User table to get the user name
      include: {
        model: db.User,
        attributes: ["name"]
      }
    }).then(attendees => {
      res.json(attendees)
    }).catch(err => {
      console.log(err);
      res.send(false);
    })
  })

  // route used to attend an event
  app.post("/api/attend", (req, res) => {
    // check UserEvent if a row exists that matches req.body
    db.UserEvent.findOne({
      where: req.body
    }).then(data => {
      // if it does, then...
      if (data) {
        // send a false statement to the client
        res.send(false)
      } else {
        // otherwise, create a new row in UserEvent
        db.UserEvent.create(req.body)
          .then(() => {
            res.send(true)
          }).catch(err => {
            console.log(err);
            res.send(false);
          })
      }
    }).catch(err => {
      console.log(err);
      res.send(false);
    })
  })

  // route used to unattend an event
  app.delete("/api/attend", (req, res) => {
    // remove a row in UserEvent where UserId and EventId matches req.body
    db.UserEvent.destroy({
      where: req.body
    }).then(() => {
      res.send(true);
    }).catch(err => {
      console.log(err);
      res.send(false);
    })
  })
}