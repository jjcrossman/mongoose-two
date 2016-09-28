const mongoose = require( "mongoose" );

const Mentor = new mongoose.Schema( {
  name: {
    type: String
    , required: true
    , trim: true
  }
  , irritability: {
    type: Number
    , required: true
    , min: 1
    , max: 100
  }
} );

module.exports = mongoose.model( "Mentor", Mentor );
