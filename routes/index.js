var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('API si manejo, encentra la documentación en api.simanejo.com/documentacion' );
});

module.exports = router;
