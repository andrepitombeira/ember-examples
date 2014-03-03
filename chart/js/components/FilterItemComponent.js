App.FilterItemComponent = Ember.Component.extend({
    tagName: 'li',
    classNameBindings: ['active'],

    active: function() {
        return this.get('filter') == this.get('value');
    }.property('filter'),

    click: function() {
        this.set('filter', this.get('value'));
    }
});
