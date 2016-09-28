// REQUIRES
const app = require( "express" )();
const { json } = require( "body-parser" );
const mongoose = require( "mongoose" );
const port = 4000;
const mongoUri = "mongodb://localhost:27017/students";

//USES
app.use( json() );

//MASTER ROUTES
require( "./masterRoutes.js" )( app );

// MONGOOSE CONNECTION
mongoose.connect( mongoUri );
mongoose.connection.once( "open", () => console.log( `Mongoose is listening at ${ mongoUri }` ) );

// LISTEN
app.listen( port, () => console.log( `Mongoose-Two is listening on port ${ port }` ) );
