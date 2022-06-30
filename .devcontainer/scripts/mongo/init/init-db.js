// Create DB and collection
db = new Mongo().getDB("student-life");
db.createCollection("rentalplaces", { capped: false });
