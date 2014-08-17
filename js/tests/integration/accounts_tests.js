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

test('model will populate the controller with nothing when xhr returns empty list', function() {
    visit("/accounts")
    .httpRespond("get", "/api/accounts", [])
    .then(function() {
        missing("table tr");
    });
});

test('model will populate the controller when promise resolves with 2 accounts', function() {
    var accounts = [{name: "first"}, {name: "last"}];
    visit("/accounts")
    .httpRespond("get", "/api/accounts", accounts)
    .then(function() {
        var rows = find("table tr").length;
        equal(rows, 2, rows);
    });
});
