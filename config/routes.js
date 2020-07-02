module.exports = function (router) {
  [
    "countries",
    "states",
    "postal-codes",
    "places",
    "neighborhoods",
    "counties",
  ].forEach(function (geo) {
    router.options("/*path").to("application.preflight");
    router.get("/explore/" + geo).to("geographies/" + geo + ".explore");
    router
      .get("/geographies/" + geo + "/whereami")
      .to("geographies/" + geo + ".whereami");
    router
      .get("/geographies/" + geo + "/nearme")
      .to("geographies/" + geo + ".nearme");
    router
      .get("/geographies/" + geo + "/named/:name")
      .to("geographies/" + geo + ".named");
    router
      .get("/geographies/" + geo + "/named/:name.svg")
      .to("geographies/" + geo + ".svg");
    router.resource("geographies/" + geo);
  });
};
