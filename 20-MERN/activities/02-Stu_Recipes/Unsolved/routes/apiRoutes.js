const axios = require("axios");
const router = require("express").Router();

outer.get("/recipes", (req, res) => {
  axios
    .get("https://api.edamam.com/search?app_id=1f056e65&app_key=966e53bb46774cccfc367ae02228e11b", { params: req.query })
    .then(results => {
      console.log(results.data)
      res.json(results.data)
    })
    .catch(err => res.status(422).json(err));
});

module.exports = router;

