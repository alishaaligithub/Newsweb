use("CrudDb")

console.log(db)
db.createCollection("courses")
db.courses.insertOne({
    name:"my name is Alisha",
    price:0,
    assignments:1,
    description:"This is a course"
})

db.courses.insertMany(
    [
        {
          "name": "Introduction to Python",
          "price": 5000,
          "assignments": 8,
          "description": "Learn the basics of Python programming."
        },
        {
          "name": "Advanced Java Programming",
          "price": 10000,
          "assignments": 12,
          "description": "Master advanced concepts in Java programming."
        },
        {
          "name": "Web Development Bootcamp",
          "price": 15000,
          "assignments": 15,
          "description": "A comprehensive guide to building websites using HTML, CSS, and JavaScript."
        },
        {
          "name": "Machine Learning with Python",
          "price": 20000,
          "assignments": 10,
          "description": "Dive deep into machine learning algorithms using Python."
        },
        {
          "name": "Introduction to Databases",
          "price": 7000,
          "assignments": 5,
          "description": "Learn how to design and query databases using SQL."
        },
        {
          "name": "Cloud Computing Fundamentals",
          "price": 12000,
          "assignments": 7,
          "description": "Understand the basics of cloud infrastructure and services."
        },
        {
          "name": "Mobile App Development",
          "price": 18000,
          "assignments": 14,
          "description": "Learn to build mobile apps for Android and iOS platforms."
        },
        {
          "name": "Cybersecurity Essentials",
          "price": 9000,
          "assignments": 6,
          "description": "Understand the principles and practices of cybersecurity."
        }
      ]    
)

let a = db.courses.find({price:0})
console.log(a.toArray())

