const mentorCtrl = require( "./mentorCtrl.js" );

module.exports = app => {
  app.route( "/api/mentors" )
    .get( mentorCtrl.getMentors )
    .post( mentorCtrl.postMentor );
};
