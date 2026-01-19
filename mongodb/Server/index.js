//Required Library Added
const mongoose = require("mongoose");
//Connect MongoDb
mongoose
  .connect("mongodb://localhost:27017/testdb")
  .then(async () => {
    const Person = mongoose.model(
      "Person",
      { name: String, age: Number },
      "person"
    );
    //   INSERT
    //   await Person.create({
    //     name: "Gokul",
    //     age: 20,
    //   });
    //   await Person.create({
    //     name: "Prasad",
    //     age: 21,
    //   });
    //   await Person.create({
    //     name: "Sathish",
    //     age: 18,
    //   });
    //   await Person.create({
    //     name: "Ashwanth",
    //     age: 19,
    //   });
    //   console.log("Persons Inserted Successfully!!");

    //READ
    // const allpeople = await Person.find();
    // console.log("All People: ", allpeople);

    //UPDATE
    // await Person.updateOne({name:"Sathish"},{age:22});
    // console.log("Sathish Age is Updated");

    //DELETE
    // await Person.deleteOne({name:"Ashwanth"});
    // console.log("Ashwanth Deleted.");
    
    //SORT
    // const youngest = await Person.findOne().sort({age:1});
    // console.log("Ascending (1) :", youngest);
    // const youngest = await Person.findOne().sort({age:-1});
    // console.log("Decending (-1) :", youngest);

    


  })
  .catch((err) => console.error(err));
