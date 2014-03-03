window.MovieNight = Ember.Application.create({
    LOG_ACTIVE_GENERATION: true,
    LOG_VIEW_LOOKUPS: true
});

//MovieNight.ApplicationAdapter = DS.LSAdapter.extend({
//    namespace: 'movienight-emberjs'
//});

MovieNight.ApplicationAdapter = DS.FixtureAdapter.extend();


