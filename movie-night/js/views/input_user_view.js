MovieNight.InputUserView = Ember.TextField.extend({
    didInsertElement: function() {
        this.$().focus();
    }
});

Ember.Handlebars.helper('input-user', MovieNight.InputUserView);
