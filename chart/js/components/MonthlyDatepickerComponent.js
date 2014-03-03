App.MonthlyDatepickerComponent = Ember.Component.extend({
    classNames: ['dp'],

    didInsertElement: function() {
        var _this = this;
        this.$().datepicker({format: 'M-yyyy',minViewMode: 'months'})
            .on('changeDate', function(e) {
                _this.sendAction('action', e.format());
            });

        this.update();
    },

    update: function() {
        if (this.get('month')) {
            this.$().datepicker('update', this.get('month').toDate());
        } else {
            this.$('.month.active').removeClass('active');
        }
    }.observes('month')
});