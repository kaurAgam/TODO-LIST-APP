const mongoose = require('mongoose');


exports.ToDoDataBase = ()=>
{
    
const conn = async (req, res) => {
    try {
      await mongoose
        .connect(
          "mongodb+srv://user:userpassword@cluster0.tuinafe.mongodb.net/?retryWrites=true&w=majority"
        )
        .then(() => {
          console.log("Connected");
        });
    } catch (error) {
      console.log(error);
    }
  };

  conn();
}


