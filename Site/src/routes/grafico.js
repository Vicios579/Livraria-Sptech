var express = require("express");
var router = express.Router();

var graficoController = require("../controllers/graficoController");

router.get("/caros", function (req, res) {
    graficoController.caros(req, res);
});

router.get("/quantidades", function (req, res) {
    graficoController.quantidades(req, res);
});

router.get("/todos", function (req, res) {
    graficoController.todos(req, res);
});


module.exports = router;