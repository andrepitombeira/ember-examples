var App = Ember.Application.create();

App.name = "Hello World!";

App.secondsOnPage = 0;

setInterval(function() {
    App.set('secondsOnPage', App.get('secondsOnPage') + 1);
}, 1000);

//App.ApplicationRoute = Ember.Route.extend({
//    model: function() {
//        return { name: 'My App', timer: 0 };
//    },
//
//    activate: function() {
//        this.interval = setInterval(function() {
//            var timer = this.get("controller.model.timer");
//            this.set('controller.model.timer', timer + 1);
//        }.bind(this), 1000);
//    },
//
//    deactivate: function() {
//        clearInterval(this.interval);
//    }
//});

App.Router.map(function() {
    this.resource('user', { path: '/users/:user_id'});
    this.resource('editUser', { path: '/users/:user_id/edit' });
});

App.UserRoute = Ember.Route.extend({
    model: function(params) {
        return users[params.user_id];
    }
});

App.ApplicationRoute = Ember.Route.extend({
    model: function() {
        return users;
    },

    actions: {
        createUser: function() {
            var users = this.modelFor('application');
            var user = users.pushObject({
                id: users.length
            });

            this.transitionTo('editUser', user);
        }
    }
});

App.EditUserRoute = Ember.Route.extend({
    model: function() {
        return users[params.user_id];
    },

    actions: {
        save: function() {
            var user = this.modelFor('editUser');
            this.transitionTo('user', user);
        }
    }
});

var users = [
    {
        id: 0,
        first: 'Ryan',
        last: 'Florence',
        avatar: 'https://si0.twimg.com/profile_images/3123276865/5c069e64eb7f8e971d36a4540ed7cab2.jpeg'
    },
    {
        id: 1,
        first: 'Tom',
        last: 'Dale',
        avatar: 'https://si0.twimg.com/profile_images/1317834118/avatar.png'
    },
    {
        id: 2,
        first: 'Yehuda',
        last: 'Katz',
        avatar: 'https://si0.twimg.com/profile_images/3250074047/46d910af94e25187832cb4a3bc84b2b5.jpeg'
    }
];