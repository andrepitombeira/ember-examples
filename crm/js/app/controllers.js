App.CompanyController = Ember.ObjectController.extend(App.Savable, {

    isEditing: false,

    actions: {

        edit: function() {

            this.set('isEditing', true);
        },

        cancel: function() {

            var model = this.get('model');

            if (model.get('isDirty')) {

                model.rollback();
            }

            this.set('isEditing', false);
        }
    }
});

App.CompaniesNewController = Ember.ObjectController.extend(App.Savable, {});

App.PersonController = App.CompanyController;

App.PeopleNewController = App.CompaniesNewController;

App.TaskModalController = Ember.ObjectController.extend(Ember.Evented, {

    actions: {

        save: function() {

            var task = this.get('model');
            var self = this;

            task.save().then(function() {
                self.trigger('hideModal');
            });
        },

        delete: function() {

            var task = this.get('model');
            var self = this;

            var taskable = task.get('taskable');

            task.destroyRecord().then(function() {
                taskable.get('tasks').removeObject(task);
                self.trigger('hideModal');
            });
        },

        cancel: function() {

            var task = this.get('model');
            task.rollback();

            if (task.get('isNew')) {
                var taskable = task.get('taskable');
                taskable.get('tasks').removeObject(task);
            }

            this.trigger('hideModal');
        }
    }
});