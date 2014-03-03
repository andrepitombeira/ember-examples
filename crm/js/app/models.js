App.Taskable = DS.Model.extend({

    tasks: DS.hasMany('task', {async: true})
});

App.Task = DS.Model.extend({

    subject: DS.attr('string'),

    taskable: DS.belongsTo('taskable', {polymorphic: true})
});

App.Company = App.Taskable.extend({

    name: DS.attr('string'),

    people: DS.hasMany('person', {async: true})
});

App.Person = App.Taskable.extend({

    firstName: DS.attr('string'),

    lastName: DS.attr('string'),

    city : DS.attr('string'),

    state: DS.attr('string'),

    email: DS.attr('string'),

    fullName: function() {

        var firstName = this.get('firstName');
        var lastName = this.get('lastName');

        return ((firstName ? firstName : '') + ' ' + (lastName ? lastName : '')).trim();
    }.property('firstName', 'lastName'),

    location: function() {

        var location = this.get('city');

        var state = this.get('state');

        if (state && state.trim().length > 0) {

            location += ', ' + state;
        }

        return location;

    }.property('city', 'state'),

    company: DS.belongsTo('company', {async: true})
});

App.Company.FIXTURES = [
    {
        "id": "1",
        "created_at": "2013-12-09 00:57:49",
        "updated_at": "2013-12-09 00:57:49",
        "name": "Acme Corp",
        "people": [1],
        "tasks": [1,2,3]
//        "links": {
//            "tasks": "/companies/1/tasks",
//            "people": "/companies/1/people"
//        }
    },
    {
        "id": "2",
        "created_at": "2013-12-09 00:57:49",
        "updated_at": "2013-12-09 00:57:49",
        "name": "Foo Bar Industries",
        "people": [2],
        "tasks": [4,5,6,7]
//        "links": {
//            "tasks": "/companies/2/tasks",
//            "people": "/companies/2/people"
//        }
    },
    {
        "id": "3",
        "created_at": "2013-12-09 00:57:49",
        "updated_at": "2013-12-09 00:57:49",
        "name": "Bogus Inc",
        "people": [3],
        "tasks": [8,9]
//        "links": {
//            "tasks": "/companies/3/tasks",
//            "people": "/companies/3/people"
//        }
    }
];

App.Person.FIXTURES = [
    {
        "id": "1",
        "created_at": "2013-12-09 00:57:50",
        "updated_at": "2013-12-09 00:57:50",
        "email": "bjohnson@gmail.com",
        "firstName": "Bob",
        "lastName": "Johnson",
        "city": "Austin",
        "state": "TX",
        "company": "1",
        "tasks": [1]
//        "links": {
//            "tasks": "/people/1/tasks"
//        }
    },
    {
        "id": "2",
        "created_at": "2013-12-09 00:57:50",
        "updated_at": "2013-12-09 00:57:50",
        "email": "athomp@yahoo.com",
        "firstName": "Allen",
        "lastName": "Thompson",
        "city": "San Diego",
        "state": "CA",
        "company": "2",
        "tasks": [2]
    },
    {
        "id": "3",
        "created_at": "2013-12-09 00:57:50",
        "updated_at": "2013-12-09 00:57:50",
        "email": "kparks@aol.com",
        "firstName": "Kara",
        "lastName": "Smith",
        "city": "Dallas",
        "state": "TX",
        "company": "2",
        "tasks": [3]
//        "links": {
//            "tasks": "/people/2/tasks"
//        }
    },
    {
        "id": "4",
        "created_at": "2013-12-09 00:57:50",
        "updated_at": "2013-12-09 00:57:50",
        "email": "gWash@hotmail.com",
        "firstName": "George",
        "lastName": "Washington",
        "city": "Washington",
        "state": "DC",
        "company": "3",
        "tasks": [4]
//        "links": {
//            "tasks": "/people/2/tasks"
//        }
    }
];

App.Task.FIXTURES = [
    {
        "id": "1",
        "created_at": "2013-12-09 00:57:50",
        "updated_at": "2013-12-09 00:57:50",
        "subject": "Fuga illo expedita.",
        "taskable_id": "1",
        "taskable_type": "person"
    },
    {
        "id": "2",
        "created_at": "2013-12-09 00:57:50",
        "updated_at": "2013-12-09 00:57:50",
        "subject": "Nostrum veritatis quo odit accusantium.",
        "taskable_id": "1",
        "taskable_type": "person"
    },
    {
        "id": "3",
        "created_at": "2013-12-09 00:57:50",
        "updated_at": "2013-12-09 00:57:50",
        "subject": "Quis fugiat eligendi.",
        "taskable_id": "1",
        "taskable_type": "person"
    },
    {
        "id": "4",
        "created_at": "2013-12-09 00:57:50",
        "updated_at": "2013-12-09 00:57:50",
        "subject": "Velit et inventore repellat.",
        "taskable_id": "1",
        "taskable_type": "person"
    },
    {
        "id": "5",
        "created_at": "2013-12-09 00:57:50",
        "updated_at": "2013-12-09 00:57:50",
        "subject": "Tenetur impedit quibusdam et vel.",
        "taskable_id": "2",
        "taskable_type": "person"
    },
    {
        "id": "6",
        "created_at": "2013-12-09 00:57:50",
        "updated_at": "2013-12-09 00:57:50",
        "subject": "Ut veniam in qui.",
        "taskable_id": "2",
        "taskable_type": "person"
    },
    {
        "id": "7",
        "created_at": "2013-12-09 00:57:50",
        "updated_at": "2013-12-09 00:57:50",
        "subject": "Vel quo facere modi rerum dolores.",
        "taskable_id": "3",
        "taskable_type": "person"
    },
    {
        "id": "8",
        "created_at": "2013-12-09 00:57:50",
        "updated_at": "2013-12-09 00:57:50",
        "subject": "Id reprehenderit id dolores expedita.",
        "taskable_id": "3",
        "taskable_type": "person"
    },
    {
        "id": "9",
        "created_at": "2013-12-09 00:57:50",
        "updated_at": "2013-12-09 00:57:50",
        "subject": "A vitae aut similique.",
        "taskable_id": "4",
        "taskable_type": "person"
    },
    {
        "id": "10",
        "created_at": "2013-12-09 00:57:50",
        "updated_at": "2013-12-09 00:57:50",
        "subject": "Nostrum officia quam quia expedita quae dolorem.",
        "taskable_id": "4",
        "taskable_type": "person"
    },
    {
        "id": "11",
        "created_at": "2013-12-09 00:57:50",
        "updated_at": "2013-12-09 00:57:50",
        "subject": "Sed nihil amet rerum.",
        "taskable_id": "4",
        "taskable_type": "person"
    },
    {
        "id": "12",
        "created_at": "2013-12-09 00:57:50",
        "updated_at": "2013-12-09 00:57:50",
        "subject": "Consequatur quasi delectus.",
        "taskable_id": "1",
        "taskable_type": "company"
    },
    {
        "id": "13",
        "created_at": "2013-12-09 00:57:50",
        "updated_at": "2013-12-09 00:57:50",
        "subject": "Et aut quibusdam sit.",
        "taskable_id": "1",
        "taskable_type": "company"
    },
    {
        "id": "14",
        "created_at": "2013-12-09 00:57:50",
        "updated_at": "2013-12-09 00:57:50",
        "subject": "Eius doloremque omnis id fugit.",
        "taskable_id": "1",
        "taskable_type": "company"
    },
    {
        "id": "15",
        "created_at": "2013-12-09 00:57:50",
        "updated_at": "2013-12-09 00:57:50",
        "subject": "Minus esse iusto voluptatem nostrum.",
        "taskable_id": "2",
        "taskable_type": "company"
    },
    {
        "id": "16",
        "created_at": "2013-12-09 00:57:50",
        "updated_at": "2013-12-09 00:57:50",
        "subject": "Quas rerum sint.",
        "taskable_id": "2",
        "taskable_type": "company"
    },
    {
        "id": "17",
        "created_at": "2013-12-09 00:57:50",
        "updated_at": "2013-12-09 00:57:50",
        "subject": "Repellat quo voluptatem saepe voluptas sint.",
        "taskable_id": "2",
        "taskable_type": "company"
    },
    {
        "id": "18",
        "created_at": "2013-12-09 00:57:50",
        "updated_at": "2013-12-09 00:57:50",
        "subject": "Molestias necessitatibus dignissimos ut.",
        "taskable_id": "3",
        "taskable_type": "company"
    },
    {
        "id": "19",
        "created_at": "2013-12-09 00:57:50",
        "updated_at": "2013-12-09 00:57:50",
        "subject": "Omnis at nisi.",
        "taskable_id": "3",
        "taskable_type": "company"
    }
];

