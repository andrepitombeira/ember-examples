Ember.Handlebars.helper('formatDate', function(date) {
    return moment(date).fromNow();
});

Ember.Handlebars.registerBoundHelper('formatDate', function(date) {
    return moment(date).fromNow();
});
