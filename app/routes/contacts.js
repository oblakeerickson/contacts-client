var ContactsRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('contact');
  }
});

export default ContactsRoute;
