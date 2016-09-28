const cohortCtrl = require( "./cohortCtrl.js" );

module.exports = app => {
  app.route( "/api/cohorts" )
    .get( cohortCtrl.getAllCohorts )
    .post( cohortCtrl.postCohort );
  app.route( "/api/cohorts/:id" )
    .put( cohortCtrl.addStudentToCohort );
  app.route( "/api/cohorts/:id/mentors" )
    .put( cohortCtrl.addMentorToCohort );
};
