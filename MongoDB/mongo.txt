db.customer.insertOne({ name: "abc", mobile: 123 });
db.customer.insertMany([
  { name: "abc", mobile: 213 },
  { name: "xyz", mobile: 124 },
  { name: "314", mobile: 31424 },
]);

// show dbs;

db.customer.find({});
db.customer.find({ name: "aaa" });

db.customer.updateOne({ name: "abc" }, { $set: { mobile: 134 } });

db.customer.deleteOne({ name: "bbb" });

db.customer.deleteMany({ mobile: 123 });

db.customer.deleteMany({});

db.books.insertMany([
  { name: "DBMS", price: 600 },
  { name: "Algorithms", price: 5000 },
  { name: "OS", price: 1000 },
]);

db.customer.updateOne(
  {
    _id: ObjectId("64edea1d29577f85c8828dd5"),
  },
  {
    $set: {
      favBooks: [
        ObjectId("64edefce22577f85c8828dd2"),
        ObjectId("64edefce22577f85c8828dd3"),
        ObjectId("64edefce22577f85c8828dd1"),
      ],
    },
  }
);

db.customer.aggregate([
  {
    $lookup: {
      from: "books",
      localField: "favBooks",
      foreignField: "_id",
      as: "favBooksDetails",
    },
  },
]);

db.createCollection("products", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["title", "pname", "owner", "comments"],
      properties: {
        title: {
          bsonType: "string",
          description: "Title must be string",
        },
        pname: {
          bsonType: "string",
          description: "pname must be string",
        },
        owner: {
          bsonType: "objectId",
          description: "id of customer",
        },
        comments: {
          bsonType: "string",
          description: "comments must be string",
        },
      },
    },
  },
});

db.products.insertOne({
  title: "my Product",
  pname: "Product1001",
  owner: ObjectId("64edea0d29577f85c8828dd5"),
  comments: "Owner abc",
});

db.books.find();

db.books.find({ price: { $in: [201, 1000] } });

db.books.find({ price: { $nin: [201, 1000] } });
