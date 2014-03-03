App.Router.map(function() {

    // /companies
    this.resource('companies', function() {

        // /companies/2
        this.resource('company', {path: ':id'});

        // /companies/new
        this.route('new');
    });

    // /people
    this.resource('people', function() {

        // /people/2
        this.resource('person', {path: ':id'});

        // /people/new
        this.route('new');
    });
});

App.CompaniesRoute = Ember.Route.extend({

    model: function() {

        return this.store.find('company');
    }
});

App.CompanyRoute = Ember.Route.extend({

    model: function(params) {

        return this.store.find('company', params.id);
    },

    beforeModel: function() {

        var controller = this.get('controller');

        if (controller) {

            controller.set('isEditing', false);

            var oldModel = controller.get('model');

            if (oldModel && oldModel.get('isDirty')) {

                oldModel.rollback();
            }
        }
    },

    actions: {

        newTask: function() {

            var task = this.store.createRecord('task');

            var company = this.get('controller').get('model');

            company.get('tasks').pushObject(task);

            this.controllerFor('taskModal').set('model', task);

            return this.render('taskModal', {
                into: 'company',
                outlet: 'taskModal'
            });
        },

        editTask: function(task) {

            this.controllerFor('taskModal').set('model', task);

            return this.render('taskModal', {
                into: 'company',
                outlet: 'taskModal'
            });
        },

        removeModal: function() {

            return this.disconnectOutlet({
                outlet: 'taskModal',
                parentView: 'company'
            });
        }
    }
});

App.CompaniesNewRoute = Ember.Route.extend({

    model: function() {
        return this.store.createRecord('company');
    },

    renderTemplate: function() {

        this.render('company/_edit');
    },

    beforeModel: function() {

        var controller = this.get('controller');

        if (controller) {
            controller.send('dismissAllMessages');
        }
    },

    deactivate: function() {

        var model = this.get('controller').get('model');

        model.rollback();

        if (model.get('isNew')) {
            model.deleteRecord();
        }
    }
});

/* People */

App.PeopleRoute = Ember.Route.extend({

    model: function() {

        return this.store.find('person');
    }
});

App.PersonRoute = Ember.Route.extend({

    model: function(params) {

        return this.store.find('person', params.id);
    },

    beforeModel: function() {

        var controller = this.get('controller');

        if (controller) {

            controller.set('isEditing', false);

            var oldModel = controller.get('model');

            if (oldModel && oldModel.get('isDirty')) {

                oldModel.rollback();
            }
        }
    },

    actions: {

        newTask: function() {

            var task = this.store.createRecord('task');

            var person = this.get('controller').get('model');

            person.get('tasks').pushObject(task);

            this.controllerFor('taskModal').set('model', task);

            return this.render('taskModal', {
                into: 'person',
                outlet: 'taskModal'
            });
        },

        editTask: function(task) {

            this.controllerFor('taskModal').set('model', task);

            return this.render('taskModal', {
                into: 'person',
                outlet: 'taskModal'
            });
        },

        removeModal: function() {

            return this.disconnectOutlet({
                outlet: 'taskModal',
                parentView: 'person'
            });
        }
    }
});

App.PeopleNewRoute = Ember.Route.extend({

    model: function() {
        return this.store.createRecord('person');
    },

    renderTemplate: function() {

        this.render('person/_edit');
    },

    beforeModel: function() {

        var controller = this.get('controller');

        if (controller) {
            controller.send('dismissAllMessages');
        }
    },

    deactivate: function() {

        var model = this.get('controller').get('model');

        model.rollback();

        if (model.get('isNew')) {
            model.deleteRecord();
        }
    }
});