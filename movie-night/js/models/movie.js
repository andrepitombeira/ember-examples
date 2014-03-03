MovieNight.Movie = DS.Model.extend({
    id: DS.attr('string'),
    title: DS.attr('string'),
    original_title: DS.attr('string'),
    release_date: DS.attr('string'),
    vote_average: DS.attr('string'),
    overview: DS.attr('string')
});
