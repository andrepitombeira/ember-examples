App.MonthlyReport = DS.Model.extend({
    companies: DS.hasMany('company', { async: true }),

    date: function() {
        return moment( this.get('id'), 'MMM-YYYY' );
    }.property('model')
});