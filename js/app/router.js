var Router = Ember.Router.extend();

Router.map(function() {
    this.resource("people", { path: "/" });
    this.resource("accounts", { path: "/accounts" });
});

export default Router;
