const studentCtrl = require( "./studentCtrl.js" );

module.exports = app => {
  app.route( "/api/students" )
    .get( studentCtrl.getAllStudents )
    .post( studentCtrl.postStudent );

  app.route( "/api/students/:id" )
    .put( studentCtrl.addProject );
    
  app.route( "/api/students/:id/projects/:projectId" )
    .get( studentCtrl.getProjectById );
};
