const studentRoutes = require( "./features/student/studentRoutes.js" );
const cohortRoutes = require( "./features/cohort/cohortRoutes.js" );
const mentorRoutes = require( "./features/mentor/mentorRoutes.js" );

module.exports = app => {
  studentRoutes( app );
  cohortRoutes( app );
  mentorRoutes( app );
};
