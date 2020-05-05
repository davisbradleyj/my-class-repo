use class_db
db
db.students.insert({"name": "Juliette","rownumber": "1", "os": "Win", "hobbies":["eating","walking","singing"]})
db.students.insert({"name": "Brad","rownumber": "4", "os": "Mac", "hobbies":["cooking","playing golf","looking for a job"]})
db.students.insert({"name": "Will","rownumber": "1", "os": "Mac", "hobbies":["basketball","coding","real estate investing"]})
db.students.find({"row":"1"})
db.students.find({})
