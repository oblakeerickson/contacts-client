var Router = Em.Router.extend({
  location: 'history'
});

Router.map(function() {
  this.resource('contacts', function() {
    this.route('show', { path: '/:id' });
  });
});

export default Router;
