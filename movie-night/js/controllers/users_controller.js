MovieNight.UsersController = Ember.ArrayController.extend({
    itemController: 'user',
    isCreating: false,

    actions: {
        newUser: function() {
            if (this.get('isCreating') === false) {
                this.set('isCreating', true);
            } else {
                this.set('isCreating', false);
            }
        },
        createUser: function() {
            var name = this.get('newName');
            var email = this.get('newEmail');

            var user = this.store.createRecord('user', {
                name: name,
                email: email
            });

            this.set('newName', '');
            this.set('newEmail', '');

            user.save();

            this.set('isCreating', false);
        },
        cancel: function() {
            this.set('newName', '');
            this.set('newEmail', '');
            this.set('isCreating', false);
        }
    }
});

