const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/Mongoose-server")
  .then(async () => {
    const Student = mongoose.model(
      "Student",
      {
        name: String,
        age: Number,
        city: String,
        course: String,
        marks: Number,
      },
      "student"
    );

    //CREATE 10 STUDENTS
    // await Student.create({
    //     name : "Karaneesh",
    //     age : 19,
    //     city : "Sathy",
    //     course : "CT",
    //     marks : 100,
    // });
    // await Student.create({
    //     name : "Prasad",
    //     age : 20,
    //     city : "Tripure",
    //     course : "ECE",
    //     marks : 80,
    // });
    // await Student.create({
    //     name : "Vikash",
    //     age : 19,
    //     city : "Tripure",
    //     course : "ME",
    //     marks : 90,
    // });
    // await Student.create({
    //     name : "VIgnesh",
    //     age : 18,
    //     city : "Tripure",
    //     course : "ME",
    //     marks : 70,
    // });
    // await Student.create({
    //     name : "Ashwanth",
    //     age : 25,
    //     city : "Tripure",
    //     course : "BT",
    //     marks : 60,
    // });
    // await Student.create({
    //     name : "Satish",
    //     age : 21,
    //     city : "Gobi",
    //     course : "ECE",
    //     marks : 90,
    // });
    // await Student.create({
    //     name : "Monish",
    //     age : 40,
    //     city : "Tripure",
    //     course : "EEE",
    //     marks : 88,
    // });
    // await Student.create({
    //     name : "Prasanth",
    //     age : 20,
    //     city : "Gobi",
    //     course : "ECE",
    //     marks : 90,
    // });
    // await Student.create({
    //     name : "Gokul",
    //     age : 19,
    //     city : "Tripure",
    //     course : "EIE",
    //     marks : 89,
    // });
    // await Student.create({
    //     name : "Ragul",
    //     age : 19,
    //     city : "Sathy",
    //     course : "ECE",
    //     marks : 78,
    // });
    // console.log("Inserted 10 students");

    //READ
    // const allStudent = await Student.find();
    // console.log("All Students : ",allStudent);

    //age greater than equal to 20 { $gt $lt $gte $lte}
    // const allStudent = await Student.find({age : { $gte : 20}});
    // console.log("All Students : ",allStudent);

    //Marks > 80
    // const allStudent = await Student.find({marks : { $gt : 80}});
    // console.log("All Students : ",allStudent);

    //findOne whose name is Prasad
    // const allStudent = await Student.findOne({name : "Prasad"});
    // console.log("All Students : ",allStudent);

    //find who are in Gobi
    // const allStudent = await Student.find({city : "Gobi"});
    // console.log("All Students : ",allStudent);

    //find who are in tripure OR mark > 70
    // const allStudent = await Student.find({
    //   $or: [
    //     { city: "Tripure" },
    //     {
    //       mark: {
    //         $gte: 70,
    //       },
    //     },
    //   ],
    // });
    // console.log("All Students : ", allStudent);

    //SORT
    // const allStudent = await Student.findOne().sort({age:1});
    // console.log("Ascending (1) :", allStudent);
    // const allStudent = await Student.findOne().sort({age:-1});
    // console.log("Decending (-1) :", allStudent);



  })
  .catch((err) => console.error(err));
