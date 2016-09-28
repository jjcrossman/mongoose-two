const Mentor = require( "./Mentor.js" );

module.exports = {
  postMentor( req, res ) {
    new Mentor( req.body ).save( ( err, response ) => {
      if ( err ) {
        return res.status( 500 ).json( err );
      }
      return res.status( 201 ).json( response );
    } );
  }
  , getMentors( req, res ) {
    Mentor.find( {}, ( err, response ) => {
      if ( err ) {
        return res.status( 500 ).json( err );
      }
      return res.status( 200 ).json( response );
    } );
  }
}
