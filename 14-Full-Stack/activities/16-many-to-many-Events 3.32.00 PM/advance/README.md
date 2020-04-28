# Events
An application that allows the user to create events and/or attend events made by other users.

# Features
- Many-to-Many table relationships
- Simple Login Restriction/Persistence handled with LocalStorage

# Models
- User
- Event
- UserEvent

# Table Relationships
- Users have many Events (In the sense that a user can create many events)
- Events can have many UserEvents (In the sense that many users can attend an event)
- UserEvents can have many Events and Users (because this is being used to form a relationship between any User and Event)