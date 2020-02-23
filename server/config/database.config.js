const mongoose = require('mongoose'),
/////////////////////////////////////////////////
    database = "pet-shelter-good"
    ///////////////////////////////////

mongoose.connect(`mongodb://localhost/${database}`, {useNewUrlParser:true, useUnifiedTopology:true})
    .then(()=>console.log("You are now in the server"))
    .catch(err=>console.log(`Something is wrong... Error: ${err}`));