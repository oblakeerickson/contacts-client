var ContactsShowRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('contact', params.id);
  }
});

export default ContactsShowRoute;
