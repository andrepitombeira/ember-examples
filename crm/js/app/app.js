window.App = Ember.Application.create();

//DS.RESTAdapter.reopen({
//    host: 'http://embercrmapi.com'
//});
App.ApplicationAdapter = DS.FixtureAdapter.extend();

//App.TaskSerializer = DS.RESTSerializer.extend({
//
//    normalize: function(type, hash, property) {
//        var tType = hash.taskable_type;
//        var tId = hash.taskable_id;
//
//        delete hash.taskable_type;
//        delete hash.taskable_id;
//
//        hash.taskable = {
//
//            id: tId,
//            type: tType
//        }
//
//        return hash;
//    },
//
//    serialize: function(record, options) {
//
//        var json = this._super(record, options);
//
//        json.taskable_id = json.taskable;
//        delete json.taskable;
//
//        json.taskable_type = json.taskableType;
//        delete json.taskableType;
//
//        return json;
//    }
//});

App.Messagable = Ember.Mixin.create({

    init: function() {
        this._super();
        this.set('successMessages', []);
        this.set('errorMessages', []);
    },

    actions: {

        addSuccessMessage: function(msg) {
            this.get('successMessages').pushObject(msg);
        },
        dismissSuccessMessage: function(msg) {
            this.get('successMessages').clear();
        },
        addErrorMessage: function(msg) {
            this.get('errorMessages').pushObject(msg);
        },
        dismissErrorMessage: function() {
            this.get('errorMessages').clear();
        },
        dismissAllMessages: function() {
            this.get('successMessages').clear();
            this.get('errorMessages').clear();
        }
    }
});

App.Savable = Ember.Mixin.create(App.Messagable, {

    actions: {

        save: function() {

            var model = this.get('model');

            if (model.get('isDirty')) {

                var self = this;

                model.save().then(function() {
                    self.send('addSuccessMessage', 'Save successful!');
                }, function(data) {
                    if (data.responseJSON && data.responseJSON.errors) {
                        var errors = data.responseJSON.errors;

                        if (errors) {

                            $.each(errors, function(key, errorGroup) {

                                $.each(errorGroup, function(index, error) {

                                    self.send('addErrorMessage', error);
                                });
                            });
                        }
                    }
                });
            }
        }
    }
});

//App.Select2View = Ember.TextField.extend({
//
//    classNames: ['input-xlarge','bigdrop'],
//
//    prompt: "Search",
//
//    resource: null,
//
//    displayKey: null,
//
//    onSelect: null,
//
//    pageSize: 5,
//
//    didInsertElement: function() {
//        Ember.run.scheduleOnce('afterRender', this, 'setupSelect2');
//    },
//
//    setupSelect2: function() {
//
//        var self = this;
//
//        this.$().select2({
//            dropdownAutoWidth: true,
//            placeholder: self.get('prompt'),
//            minimumInputLength: 1,
//            ajax: {
//                url: "http://embercrmapi.com/" + self.get('resource'),
//                dataType: 'json',
//                quietMillis: 100,
//                data: function (term, page) {
//                    return {
//                        q: term,
//                        page_limit: self.get('pageSize'),
//                        page: page
//                    };
//                },
//                results: function (json, page) {
//                    var more = (page * self.get('pageSize')) < json.meta.total;
//
//                    return {
//                        results: json[self.get('resource')],
//                        more: more
//                    };
//                }
//            },
//            formatResult: function(modelJSON) {
//                return modelJSON[self.get('displayKey')];
//            },
//            formatSelection: function(modelJSON) {
//                self.sendAction('onSelect', modelJSON);
//                return modelJSON[self.get('displayKey')];
//            }
//        });
//    },
//
//    willDestroyElement: function () {
//        this.$().select2("destroy");
//    }
//});

App.TaskModalView =  Ember.View.extend({

    templateName: 'taskModal',
    model: null,
    classNames: ["modal", "fade"],

    didInsertElement: function() {

        var controller = this.get('controller');

        //show the modal
        this.$().modal('show');

        var self = this;

        //when the controller triggers 'hide', actually hide the modal
        controller.on('hideModal', function() {

            self.$().modal('hide');

            //unbind the controller from this specific callback
            controller.off('hideModal');
        });

        this.$().on('hidden.bs.modal', function() {
            controller.send('removeModal');
        });
    },

    willDestroyElement: function() {
        this.$().data('bs.modal', null);
    }
});