var Controller = require("kona/lib/controller/request");

var ApplicationController = Controller.extend({
  constructor: function () {
    Controller.apply(this, arguments);

    this.set("links", [
      {
        title: "Countries",
        controller: "geographies/countries",
      },
      {
        title: "States",
        controller: "geographies/states",
      },
      {
        title: "Counties",
        controller: "geographies/counties",
      },
      {
        title: "Places",
        controller: "geographies/places",
      },
      {
        title: "Postal Codes",
        controller: "geographies/postal-codes",
      },
      {
        title: "Neighborhoods",
        controller: "geographies/neighborhoods",
      },
    ]);
  },

  preflight: function* () {
    yield this._addCors();
    this.status = 200;
    this.body = "OK";
  },

  _addCors: function* () {
    if (
      ["http://localhost:8001", "https://boundaries.io"].includes(
        this.ctx.get("Origin")
      )
    ) {
      this.ctx.set("Access-Control-Allow-Origin", "*");
      this.ctx.set(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, x-api-key"
      );
      this.ctx.set(
        "Access-Control-Allow-Methods",
        "POST, GET, PUT, DELETE, OPTIONS"
      );
    }
  },
});

module.exports = ApplicationController;
