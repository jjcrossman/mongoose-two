const Student = require( "./Student.js" );

module.exports = {
  getAllStudents ( req, res ) {
      Student.find( ( err, response ) => {
        if ( err ) {
          return res.status( 500 ).json( err );
        }
        return res.status( 200 ).json( response );
      } );
  }
  , postStudent ( req, res ) {
    new Student( req.body ).save( ( err, response ) => {
      if ( err ) {
        return res.status( 500 ).json( err );
      }
      return res.status( 201 ).json( response );
    } );
  }
  , addProject ( req, res ) {
      Student.findByIdAndUpdate( req.params.id, { $push: { projects: req.body } }, ( err, response ) => {
        if ( err ) {
          return res.status( 500 ).json( err );
        }
        return res.status( 200 ).json( response );
      } );
  }
  , getProjectById( req, res ) {
    Student.findById( req.params.id, ( err, response ) => {
      if ( err ) {
        return res.status( 500 ).json( err );
      }
      const project = response.projects.id( req.params.projectId );
      return res.status( 200 ).json( project );
   } );
  }
};
