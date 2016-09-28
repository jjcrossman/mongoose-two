const mongoose = require( "mongoose" );

const Mentor = new mongoose.Schema( {

} );

const Cohort = new mongoose.Schema( {
  name: {
    type: String
    , required: true
    , trim: true
    , unique: true
  }
  , lengthInWeeks: {
    type: Number
    , default: 13
    , min: 1
  }
  , course: {
    type: String
    , enum: [ "WebDev", "iOS", "UI/UX" ]
  }
  , students: [
    { type: mongoose.Schema.Types.ObjectId, ref: "Student" } //referenced by model
  ]
  , mentors: [ { type: mongoose.Schema.Types.ObjectId, ref: "Mentor" } ]
  // students and mentors is parallel population, and isn't a "deep populate" and is okay to use.
} );

module.exports = mongoose.model( "Cohort", Cohort );

// 57ebe689cd3d2804970316d7 - cohort id
// 57ebe0de022d8f03e5332984 - theo
// 57ebe12675513103ed122404 - marcandy
// 57ebe18475513103ed122405 - Dontavious
