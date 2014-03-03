App.ApplicationController = Ember.Controller.extend({
    needs: ['monthlyReport'],

    actions: {
        getMonthlyReport: function(id) {
            this.transitionToRoute('monthlyReport', this.get('store').find('monthlyReport', id ));
        }
    }
});
