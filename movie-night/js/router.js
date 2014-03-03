MovieNight.Router.map(function() {
    this.resource('users', function() {
        this.resource('user', { path: ':post_id' });
    });
    this.resource('movies', function() {
        this.resource('movie', { path: ':movie_id' })
    });
});

MovieNight.UsersRoute = Ember.Route.extend({
    model: function() {
        return this.store.find('user');
    }
});

MovieNight.UserRoute = Ember.Route.extend({
    model: function(params) {
        return this.store.find('user', params.user_id);
    }
});

MovieNight.MoviesRoute = Ember.Route.extend({
    model: function() {
        return $.getJSON('https://api.themoviedb.org/3/movie/top_rated?' + 'API_KEY').then(function(data) {
            return data.results;
        });
    }
});

MovieNight.MovieRoute = Ember.Route.extend({
    model: function(params) {
        var host = 'https://api.themoviedb.org/3/movie/';
        var id = params.movie_id;
        var key = 'API_KEY';
        var url = host + id + key;
        return $.getJSON(url).then(function(data) {
            return data;
        });
    },

    renderTemplate: function() {
        this.render('movie', {
            into: 'application'
        });
    }
});





