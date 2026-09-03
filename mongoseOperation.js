// const mongoose=require("mongoose")
// const main=async()=>{
//     await mongoose.connect("mongodb://localhost:27017/student")
//     const ProductSchema=new mongoose.Schema({
//         name:String,
//         email:String,
//         age:Number
//     })


//     const ProductModel=mongoose.model('user',ProductSchema);
//     let data=new ProductModel(
//         {name:"Kumar",email:"kunaklgmail.com",age:32}
//     )
//     let result=await data.save();
//     console.log(result);

// }
// main()




// const mongoose = require("mongoose");

// const main = async () => {
//     try {
//         // school = database
//         await mongoose.connect("mongodb://127.0.0.1:27017/school");

//         console.log("MongoDB Connected");

//         const StudentSchema = new mongoose.Schema({
//             name: String,
//             email: String,
//             age: Number
//         });

//         // student = collection
//         const Student = mongoose.model(
//             "Student",
//             StudentSchema,
//             "student"
//         );

//         const student = new Student({
//             name: "Kumar",
//             email: "kuna@gmail.com",
//             age: 32
//         });

//         const result = await student.save();

//         console.log("Data Inserted Successfully:");
//         console.log(result);

//     } catch (error) {
//         console.log("MongoDB Error:");
//         console.log(error);
//     }
// };

// main();




const mongoose = require("mongoose");

const main = async () => {
    try {
        // Database: school
        await mongoose.connect("mongodb://127.0.0.1:27017/school");

        console.log("MongoDB Connected");

        const StudentSchema = new mongoose.Schema({
            name: String,
            email: String,
            age: Number
        });

        // Collection: student
        const Student = mongoose.model(
            "Student",
            StudentSchema,
            "student"
        );

        // =========================
        // 1. INSERT
        // =========================

        // const newStudent = await Student.create({
        //     name: "Kumar11",
        //     email: "kumar@gmail.com",
        //     age: 321
        // });

        // console.log("Inserted:", newStudent);


        // =========================
        // 2. FETCH / READ
        // =========================

        // const students = await Student.find();

        // console.log("All Students:");
        // console.log(students);


        // =========================
        // 3. UPDATE
        // =========================

        const updatedStudent = await Student.updateOne(
            { name: "Kumar11" },
          { $set: { age: 1321} },
    
        );

        console.log("Updated:");
        // console.log(updatedStudent);


        // 4. DELETE

        // const deletedStudent = await Student.findOneAndDelete({
        //     name: "Kumar"
        // });

        // console.log("Deleted:");
        // console.log(deletedStudent);

    } catch (error) {
        console.log("Error:", error);
    }
};

main();
