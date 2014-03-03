App.CompaniesController = Ember.ArrayController.extend({
    filter: 'newContracts',

    data: function() {
        if (!this.get('model.isLoaded')) { return; }

        var _this = this;
        var data = this.map(function(company) {
            return {
                category: company.get('name'),
                count: company.get(_this.get('filter'))
            };
        });

        return data;
    }.property('model', 'filter')
});
