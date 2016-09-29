var mongoose = require("mongoose");

var activitySchema = mongoose.Schema({
  /* Exercise 1: Declare schema here */
  type: String,
});

/* Exercise 4: Implement getDescription() as an Activity method */


/* Exercise 5: Write a validator for intensity */


// Validator for duration
activitySchema.path('duration').validate(function(value) {
  return value > 0 && value < 1000;
});

// When we 'require' this model in another file (e.g. routes),
// we specify what we are importing form this file via module.exports.
// Here, we are 'exporting' the mongoose model object created from
// the specified schema.
module.exports = mongoose.model("Activity", activitySchema);

