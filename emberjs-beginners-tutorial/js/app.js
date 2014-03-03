var Roller = Ember.Application.create({
    LOG_TRANSITIONS: true,
    LOG_BINDINGS: true,
    LOG_VIEW_LOOKUPS: true,
    LOG_STACKTRACE_ON_DEPRECATION: true,
    LOG_VERSION: true,
    debugMode: true
});

Roller.Roll = Ember.Object.extend({
    diceNumber: 0,
    totalRolls: 0,
    numberOfRolls: 0,

    proportion: function() {
        var width = 50 + parseInt(400 * this.get("numberOfRolls") /
            this.get("totalRolls"));
        return "width: " + width + "px;";
    }.property("totalRolls", "numberOfRolls")
});

Roller.RollController = Ember.Controller.extend({

    actions: {
        rollDice: function() {
            var roll = this.get("rollString"),
                content = [],
                rolls = 0,
                sides = 0,
                errors = "",
                i, rnd, roll_parts;

            if (roll == undefined) {
                this.set("errors", "Please fill out the text box!");
                return;
            }

            roll_parts = roll.split("d");

            if (roll_parts.length !== 2) {
                errors += "You need to enter a value in the format 'xdy'.  ";
            } else {
                rolls = parseInt(roll_parts[0]);
                sides = parseInt(roll_parts[1]);

                if (isNaN(rolls) || isNaN(sides)) {
                    errors += "Rolls and sides must be numbers.  ";
                }

                if (errors.length === 0) {
                    for (i = 0; i < sides; i++) {
                        content.push(Roller.Roll.create({
                            diceNumber: i + 1,
                            totalRolls: rolls
                        }));
                    }

                    for (i = 0; i < rolls; i++) {
                        rnd = Math.floor(Math.random() * sides);
                        content[rnd].incrementProperty("numberOfRolls");
                    }
                }
            }

            this.set('content', content);

            this.set('errors', errors);
        }
    }
});

Roller.RollRoute = Ember.Route.extend({
    model: function () {
        return [];
    },

    setupController: function(controller, model) {
        controller.set("content", model);
    }
});

Roller.Router.map(function() {
    this.resource('roll');
});

Roller.IndexRoute = Ember.Route.extend({
    redirect: function() {
        this.transitionTo("roll");
    }
});