App.MonthlyReportController = Ember.ObjectController.extend({
    needs: ['companies'],

    title: function() {
        return this.get('date').format('MMMM YYYY');
    }.property('model')
});
