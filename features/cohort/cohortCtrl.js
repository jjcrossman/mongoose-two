const Cohort = require( "./Cohort.js" );

module.exports = {
  postCohort( req, res ) {
    new Cohort( req.body ).save( ( err, response ) => {
      if ( err ) {
        return res.status( 500 ).json( err );
      }
      return res.status( 201 ).json( response );
    } );
  }
  , getAllCohorts( req, res ) {
    Cohort.find()
    // populate should only go one level deep. If we populated cohort's students path with all of Student model's path, and that model had a path, projects, that referenced another collection, then the get request to cohorts would return all Student model's path in students array on Cohort, AND would populate projects with all path's from Project model too. Never go more than one level deep. Rethink data structure to avoid "deep populates".
      .populate( "students mentors", "name" ) //populate path, students, which would require a ref in the Cohort Schema. 2nd argument is referring to two paths, name and email, on the Student model, because the Cohort Schema has ref: "Student".
      .exec( ( err, response ) => {
        if ( err ) {
          return res.status( 500 ).json( err );
        }
        return res.status( 200 ).json( response );
      } );
  }
  , addStudentToCohort( req, res ) {
    Cohort.findByIdAndUpdate( req.params.id, { $push: { students: req.body.studentId } }, ( err, response ) => {
      if ( err ) {
        return res.status( 500 ).json( err );
      }
      return res.status( 200 ).json( response );
    } );
  }
  , addMentorToCohort( req, res ) {
    Cohort.findByIdAndUpdate( req.params.id, { $push: { mentors: req.body.mentorId } }, ( err, response ) => {
      if ( err ) {
        return res.status( 500 ).json( err );
      }
      return res.status( 200 ).json( response );
    } );
  }
};
