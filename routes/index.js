const messages = [
  {
    user: "Mario",
    text: "Wahoo!",
    time: new Date()
  },
  {
    user: "Wario",
    text: "D'oh I missed!",
    time: new Date()
  }
]

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render("index", {title: "Express", messages})
});

router.get("/new", function(req, res) {
  res.render("form", {title: "New message"})
})

router.post("/new", function(req, res) {
  const newMes = {}
  newMes.user = req.body.user || "Anonymous"
  newMes.text = req.body.text
  newMes.time = new Date()
  messages.push(newMes)
  res.redirect("/")
})

module.exports = router;
