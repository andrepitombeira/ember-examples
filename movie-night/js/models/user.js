MovieNight.User = DS.Model.extend({
    name: DS.attr('string'),
    email: DS.attr('string')
});

MovieNight.User.FIXTURES = [
    {
        id: '1',
        name: 'Andre',
        email: 'andre@email.com'
    },
    {
        id: '2',
        name: 'Luis',
        email: 'luis@email.com'
    },
    {
        id: '3',
        name: 'Maria',
        email: 'maria@email.com'
    },
    {
        id: '4',
        name: 'Carla',
        email: 'carla@email.com'
    }
];