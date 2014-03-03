App.BaseChartComponent = Ember.Component.extend({
    classNames: ['chart'],

    didInsertElement: function() {
        Ember.run.once(this, 'update');
    },

    update: function() {
        if (this.get('isLoaded')) {
            d3.select(this.$()[0])
                .data([ this.get('data') ])
                .call(this.get('chart'));
        }
    }.observes('data')
});
