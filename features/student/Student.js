const mongoose = require( "mongoose" );

//Project is not a "deep populate" as discussed on line 14 of cohortCtrl.js
const Project = new mongoose.Schema( {
  name: { type: String, require: true, trim: true }
  , url: { type: String, require: true, trim: true }
  , kind: { type: String, enum: [ "personal", "no-server" ] }
  , frustrationLevel: { type: Number, min: 1, max: 10, default: 8 }
} );

const Student = new mongoose.Schema( {
  name: {
    type: String
    , required: true
    , trim: true
  }
  , email: {
    type: String
    , required: true
    , trim: true
  }
  , age: {
    type: Number
    , required: true
    , min: 18
  }
  , tuitionPaid: {
    type: Boolean
    , default: false
  }
  , projects: [ Project ] // , projects: [ { type: Project } ], would work the same
} );



module.exports = mongoose.model( "Student", Student );
