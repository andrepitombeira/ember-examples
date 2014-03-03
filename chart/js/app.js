/* Application */
window.App = Ember.Application.create({});

App.ApplicationAdapter = DS.FixtureAdapter.extend({
    latency: 400
});

/* Routes */
App.Router.map(function() {
    this.resource('monthlyReport', { path: '/:monthlyReport_id' });
});

App.IndexRoute = Ember.Route.extend({
    setupController: function(controller, model) {
        this.controllerFor('monthlyReport').set('content', null);
        this.controllerFor('companies').set('content', null);
    }
});

App.LoadingRoute = Ember.Route.extend({
    renderTemplate: function() {
        if (this.controllerFor('application').get('currentPath')) {
            this.render('loading', {into: 'application', outlet: 'loading'})
        }
    }
});

App.MonthlyReportRoute = Ember.Route.extend({
    setupController: function(controller, model) {
        var _this = this;

        controller.set('model', model);
        model.get('companies').then(function(companies) {
            _this.controllerFor('companies').set('model', companies);
        });
    }
});
