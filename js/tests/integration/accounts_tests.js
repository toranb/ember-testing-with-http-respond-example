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
    //start at login, click, get redirected in that route and 2x promises
    var accounts = [{name: "x"}, {name: "y"}];
    visit("/accounts")
    .httpRespond("get", "/api/accounts", accounts)
    .then(function() {
        missing("table tr");
        // var rows = find("table tr").length;
        // equal(rows, 2, rows);
    });
});
