export default (app, passport) => {
  app.post('/api/login', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/enter',
  }));
};
