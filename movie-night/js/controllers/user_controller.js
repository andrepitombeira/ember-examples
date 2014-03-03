MovieNight.UserController = Ember.ObjectController.extend({
    isEditing: false,

    actions: {
        edit: function() {
            this.set('isEditing', true);
        },
        doneEditing: function() {
            this.set('isEditing', false);
        },
        remove: function() {
            var user = this.get('model');
            user.deleteRecord();
            user.save();
        }
    }
});
