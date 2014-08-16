var App;

module('accounts integration tests', {
    setup: function() {
        App = startApp();
        fakehr.start();
    },
    teardown: function() {
        fakehr.reset();
        Ember.run(App, 'destroy');
    }
});

test('model will populate the controller when promise resolves with 2 accounts', function() {
    var accounts = [{name: "x"}, {name: "y"}];
    visit("/accounts")
    .httpRespond("get", "/api/accounts", accounts)
    .then(function() {
        missing("table tr");
    });
});
