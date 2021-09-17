const express = require('express')
const router = express.Router()

// Route for private or communal area - v4
router.post("/alpha/v4/private-or-communal-answer", function(req, res) {
    if (req.session.data["private-communal"] === "communal") {
      res.redirect("/alpha/v4/communal-address");
    } else {
      res.redirect("/alpha/v4/postcode");
    }
  });

  // for version 2
  router.post("/alpha/v2/prior-repair-answer", function(req, res) {
    if (req.session.data["/alpha/v2/prior-repair"] === "Yes") {
      res.redirect("/alpha/v2/last-report");
    } else {
      res.redirect("/alpha/v2/repair-type");
    }
  });


// Route for following up prior repairs
router.post("/alpha/v1/prior-repair-answer", function(req, res) {
    if (req.session.data["/alpha/v1/prior-repair"] === "Yes") {
      res.redirect("/alpha/v1/last-report");
    } else {
      res.redirect("/alpha/v1/repair-location");
    }
  });

  // for version 2
  router.post("/alpha/v2/prior-repair-answer", function(req, res) {
    if (req.session.data["/alpha/v2/prior-repair"] === "Yes") {
      res.redirect("/alpha/v2/last-report");
    } else {
      res.redirect("/alpha/v2/repair-type");
    }
  });

  // for version 3
router.post("/alpha/v3/prior-repair-answer", function(req, res) {
    if (req.session.data["/alpha/v3/prior-repair"] === "Yes") {
      res.redirect("/alpha/v3/last-report");
    } else {
      res.redirect("/alpha/v3/repair-location");
    }
  });

  // for version 4
router.post("/alpha/v4/prior-repair-answer", function(req, res) {
    if (req.session.data["/alpha/v4/prior-repair"] === "Yes") {
      res.redirect("/alpha/v4/last-report");
    } else {
      res.redirect("/alpha/v4/repair-location");
    }
  });


  // Routes for emergency repairs
router.post("/alpha/v1/priority-repair-answer", function(req, res) {
    if (req.session.data["repair-emergency"] === "none-of-these") {
      res.redirect("/alpha/v1/prior-repair");
    } else if (req.session.data["repair-emergency"] === "gas")  {
      res.redirect("/alpha/v1/smell-gas");
    } else {
        res.redirect("/alpha/v1/emergency-repair");

    }
  });

  // for version 3
router.post("/alpha/v3/priority-repair-answer", function(req, res) {
    if (req.session.data["repair-emergency"] === "none-of-these") {
      res.redirect("/alpha/v3/prior-repair");
    } else if (req.session.data["repair-emergency"] === "gas")  {
      res.redirect("/alpha/v3/smell-gas");
    } else {
        res.redirect("/alpha/v3/emergency-repair");

    }
  });


  // for version 4
router.post("/alpha/v4/priority-repair-answer", function(req, res) {
    if (req.session.data["repair-emergency"] === "none-of-these") {
      res.redirect("/alpha/v4/prior-repair");
    } else if (req.session.data["repair-emergency"] === "gas")  {
      res.redirect("/alpha/v4/smell-gas");
    } else {
        res.redirect("/alpha/v4/emergency-repair");

    }
  });

//Routes for leaseholder
router.post("/alpha/v2/leaseholder-answer", function(req, res) {
  if (req.session.data["is-leaseholder"] === "yes") {
    res.redirect("/alpha/v2/repairs-leaseholder");
  } else  {
    res.redirect("/alpha/v2/postcode");
  }
});


// Routes for repair location
router.post("/alpha/v3/repair-location-answer", function(req, res) {
    if (req.session.data["/alpha/v3/repair-location"] === "Bathroom") {
      res.redirect("/alpha/v3/repair-type-bathroom");
    } else {
      res.redirect("/alpha/v3/repair-type");
    }
  });

//// Routes for repair descriptions drilldowns

 /// for version 1

    router.post("/alpha/v1/repair-description-answer", function(req, res) {
    if (req.session.data["repair-location-kitchen"] === "Damp or mould") {
      res.redirect("/alpha/v1/repair-description-damp");
    } else if (req.session.data["repair-location-kitchen"] === "Drip") {
      res.redirect("/alpha/v1/repair-description-leak");
    } else {
      res.redirect("/alpha/v1/repair-description");
    }
  });

  // V1: Damp or mould
    router.post("/alpha/v1/repair-description-damp-answer", function(req, res) {
    if (req.session.data["repair-description"] === "Damp") {
      res.redirect("/alpha/v1/repair-damp");
    } else if (req.session.data["repair-description"] === "Mold"){
      res.redirect("/alpha/v1/repair-description-damp-mold");
    } else {
      res.redirect("/alpha/v1/repair-description")
    }
  });

  // V1: Drip or leak
    router.post("/alpha/v1/repair-description-leak-answer", function(req, res) {
    if (req.session.data["repair-leak"] === "dripping-from-wall") {
      res.redirect("/alpha/v1/repair-description-leak-electrics");
    } else if (req.session.data["repair-leak"] === "tap-broken"){
      res.redirect("/alpha/v1/emergency-repair");
    } else {
      res.redirect("/alpha/v1/repair-description")
    }
  });

    router.post("/alpha/v1/repair-description-leak-electrics-answer", function(req, res) {
    if (req.session.data["repair-leak-electrics"] === "dripping-on-electrics") {
      res.redirect("/alpha/v1/emergency-repair");
    } else if (req.session.data["repair-leak-electrics"] ===  "not-containable"){
      res.redirect("/alpha/v1/emergency-repair");
    } else {
      res.redirect("/alpha/v1/repair-description-leak-inside")
    }
  });

    router.post("/repair-description-leak-source-answer", function(req, res) {
     if (req.session.data["repair-leak-source"] === "condensation") {
      res.redirect("/alpha/v1/repair-damp");
    } else {
      res.redirect("/alpha/v1/repair-description")
    }
  });

 /// for version 2

    router.post("/alpha/v2/repair-location-answer", function(req, res) {
     if (req.session.data["repair-location"] === "External repair") {
      res.redirect("/alpha/v2/repair-description");
    } else {
      res.redirect("/alpha/v2/repair-type");
      }
    });

 /// for version 3

    router.post("/alpha/v3/repair-description-answer", function(req, res) {
     if (req.session.data["repair-location-kitchen"] === "Damp or mould") {
      res.redirect("/alpha/v3/repair-description-damp");
    } else if (req.session.data["repair-location-kitchen"] === "Drip") {
      res.redirect("/alpha/v3/repair-description-leak");
    } else {
      res.redirect("/alpha/v3/repair-description");
    }
  });

  // V3: Damp or mould
    router.post("/alpha/v3/repair-description-damp-answer", function(req, res) {
     if (req.session.data["repair-description"] === "Damp") {
      res.redirect("/alpha/v3/repair-damp");
    } else if (req.session.data["repair-description"] === "Mold"){
      res.redirect("/alpha/v3/repair-description-damp-mold");
    } else {
      res.redirect("/alpha/v3/repair-description")
    }
  });

  // V3: Drip or leak
   router.post("/alpha/v3/repair-description-leak-answer", function(req, res) {
    if (req.session.data["repair-leak"] === "dripping-from-wall") {
      res.redirect("/alpha/v3/repair-description-leak-electrics");
    } else if (req.session.data["repair-leak"] === "tap-broken"){
      res.redirect("/alpha/v3/emergency-repair");
    } else {
      res.redirect("/alpha/v3/repair-description")
    }
  });


  router.post("/alpha/v3/repair-description-leak-electrics-answer", function(req, res) {
    if (req.session.data["repair-leak-electrics"] === "dripping-on-electrics") {
      res.redirect("/alpha/v3/repair-leak-description-electrics-emergency");
    } else if (req.session.data["repair-leak-electrics"] === "non-containable"){
      res.redirect("/alpha/v3/repair-leak-description-electrics-emergency");
    } else {
      res.redirect("/alpha/v3/repair-description-leak-inside")
    }
  });

  router.post("/alpha/v3/repair-description-leak-source-answer", function(req, res) {
    if (req.session.data["repair-leak-source"] === "pipe") {
      res.redirect("/alpha/v3/repair-description");
    } else {
      res.redirect("/alpha/v3/repair-description")
    }
  });

 /// for version 4

   router.post("/alpha/v4/repair-description-answer", function(req, res) {
    if (req.session.data["repair-location-kitchen"] === "Damp or mould") {
      res.redirect("/alpha/v4/repair-description-damp");
    } else if (req.session.data["repair-location-kitchen"] === "Drip") {
      res.redirect("/alpha/v4/repair-description-leak");
    } else if (req.session.data["repair-location-kitchen"] === "Cupboards") {
      res.redirect("/alpha/v4/repair-cupboard-type");
    } else if (req.session.data["repair-location-kitchen"] === "Electrical") {
      res.redirect("/alpha/v4/repair-description-electrical");
    } else if (req.session.data["repair-location-kitchen"] === "Heating") {
      res.redirect("/alpha/v4/repair-description-heating-water");
    } else {
      res.redirect("/alpha/v4/repair-description");
    }
  });

  // V4: Cupboard or worktop
   router.post("/alpha/v4/repair-description-cupboard-answer", function(req, res) {
    if (req.session.data["repair-description"] === "other-cupboard") {
      res.redirect("/alpha/v4/repair-description-cupboard");
    } else {
      res.redirect("/alpha/v4/repair-description")
    }
  });

  // V4: Electrical
   router.post("/alpha/v4/repair-description-electrical-answer", function(req, res) {
     if (req.session.data["repair-description"] === "carbon-monoxide") {
      res.redirect("/alpha/v4/repair-description-electrical-carbon-monoxide-alarm");
    } else if (req.session.data["repair-description"] === "smoke-detector") {
      res.redirect("/alpha/v4/repair-description-electrical-smoke-alarm");
    } else {
      res.redirect("/alpha/v4/repair-description")
    }
  });

  // V4: Heating or hot water
   router.post("/alpha/v4/repair-description-heating-water-answer", function(req, res) {
    if (req.session.data["repair-description"] === "no-heating-or-hot-water") {
      res.redirect("/alpha/v4/repair-description-heating-water-emergency");
    } else {
      res.redirect("/alpha/v4/repair-description")
    }
  });

// V4: Damp or mould
   router.post("/alpha/v4/repair-description-answer", function(req, res) {
    if (req.session.data["repair-location-kitchen"] === "Damp or mould") {
      res.redirect("/alpha/v4/repair-description-damp");
    } else if (req.session.data["repair-location-kitchen"] === "Drip") {
      res.redirect("/alpha/v4/repair-description-leak");
    } else if (req.session.data["repair-location-kitchen"] === "Cupboards") {
      res.redirect("/alpha/v4/repair-cupboard-type");
    } else {
      res.redirect("/alpha/v4/repair-description");
    }
  });


  router.post("/alpha/v4/repair-description-damp-answer", function(req, res) {
    if (req.session.data["repair-description"] === "Damp") {
      res.redirect("/alpha/v4/repair-damp");
    } else if (req.session.data["repair-description"] === "Mold"){
      res.redirect("/alpha/v4/repair-description-damp-mold");
    } else {
      res.redirect("/alpha/v4/repair-description")
    }
  });


  // V4: Drip or leak
   router.post("/alpha/v4/repair-description-leak-answer", function(req, res) {
    if (req.session.data["repair-leak"] === "dripping-from-wall") {
      res.redirect("/alpha/v4/repair-description-leak-electrics");
    } else if (req.session.data["repair-leak"] === "tap-broken"){
      res.redirect("/alpha/v4/emergency-repair");
    } else {
      res.redirect("/alpha/v4/repair-description")
    }
  });


  router.post("/alpha/v4/repair-description-leak-electrics-answer", function(req, res) {
    if (req.session.data["repair-leak-electrics"] === "dripping-on-electrics") {
      res.redirect("/alpha/v4/repair-leak-description-electrics-emergency");
    } else if (req.session.data["repair-leak-electrics"] === "non-containable"){
      res.redirect("/alpha/v4/repair-leak-description-electrics-emergency");
    } else {
      res.redirect("/alpha/v4/repair-description-leak-inside")
    }
  });

  router.post("/alpha/v4/repair-description-leak-source-answer", function(req, res) {
    if (req.session.data["repair-leak-source"] === "pipe") {
      res.redirect("/alpha/v4/repair-description");
    } else {
      res.redirect("/alpha/v4/repair-description")
    }
  });

// Routes for tracking repairs

  // V5: Communal repairs
   router.post("/alpha/v5/communal-or-private-property-answer", function(req, res) {
    if (req.session.data["communal"] === "yes") {
      res.redirect("/alpha/v5/communal-repair-postcode");
    } else {
      res.redirect("/alpha/v5/postcode")
    }
  });


//// Routes for communal repair description drilldowns

/// for version 4

    router.post("/alpha/v4/communal-repair-description-answer", function(req, res) {
    if (req.session.data["communal-repair-description"] === "lights") {
      res.redirect("/alpha/v4/communal-repair-description-lights");
    } else {
      res.redirect("/alpha/v4/communal-repair-description");
    }
  });


// BETA phase

// V1

router.post("/beta/v1/resident-type", function(req, res) {
    if (req.session.data["resident"] === "tenant") {
      res.redirect("/beta/v1/communal-or-private-property");
    } else {
      res.redirect("/beta/v1/not-eligible");
    }
  });

router.post("/beta/v1/private-or-communal-answer", function(req, res) {
    if (req.session.data["private-communal"] === "communal") {
      res.redirect("/beta/v1/communal-address");
    } else {
      res.redirect("/beta/v1/postcode");
    }
  });

router.post("/beta/v1/prior-repair-answer", function(req, res) {
    if (req.session.data["/beta/v1/prior-repair"] === "Yes") {
      res.redirect("/beta/v1/last-report");
    } else {
      res.redirect("/beta/v1/repair-type");
    }
  });


// Route for following up prior repairs
router.post("/beta/v1/prior-repair-answer", function(req, res) {
    if (req.session.data["/beta/v1/prior-repair"] === "Yes") {
      res.redirect("/beta/v1/last-report");
    } else {
      res.redirect("/beta/v1/repair-location");
    }
  });

  router.post("/beta/v1/prior-repair-answer", function(req, res) {
    if (req.session.data["/beta/v1/prior-repair"] === "Yes") {
      res.redirect("/beta/v1/last-report");
    } else {
      res.redirect("/beta/v1/repair-type");
    }
  });

router.post("/beta/v1/prior-repair-answer", function(req, res) {
    if (req.session.data["/beta/v1/prior-repair"] === "Yes") {
      res.redirect("/beta/v1/last-report");
    } else {
      res.redirect("/beta/v1/repair-location");
    }
  });

router.post("/beta/v1/prior-repair-answer", function(req, res) {
    if (req.session.data["/beta/v1/prior-repair"] === "Yes") {
      res.redirect("/beta/v1/last-report");
    } else {
      res.redirect("/beta/v1/repair-location");
    }
  });

// Routes for emergency repairs
router.post("/beta/v1/priority-repair-answer", function(req, res) {
    if (req.session.data["repair-emergency"] === "none-of-these") {
      res.redirect("/beta/v1/prior-repair");
    } else if (req.session.data["repair-emergency"] === "gas")  {
      res.redirect("/beta/v1/smell-gas");
    } else {
        res.redirect("/beta/v1/emergency-repair");

    }
  });

router.post("/beta/v1/priority-repair-answer", function(req, res) {
    if (req.session.data["repair-emergency"] === "none-of-these") {
      res.redirect("/beta/v1/prior-repair");
    } else if (req.session.data["repair-emergency"] === "gas")  {
      res.redirect("/beta/v1/smell-gas");
    } else {
        res.redirect("/beta/v1/emergency-repair");

    }
  });

router.post("/beta/v1/priority-repair-answer", function(req, res) {
    if (req.session.data["repair-emergency"] === "none-of-these") {
      res.redirect("/beta/v1/prior-repair");
    } else if (req.session.data["repair-emergency"] === "gas")  {
      res.redirect("/beta/v1/smell-gas");
    } else {
        res.redirect("/beta/v1/emergency-repair");

    }
  });

//Routes for leaseholder
router.post("/beta/v1/leaseholder-answer", function(req, res) {
  if (req.session.data["is-leaseholder"] === "yes") {
    res.redirect("/beta/v1/repairs-leaseholder");
  } else  {
    res.redirect("/beta/v1/postcode");
  }
});

// Routes for repair location
router.post("/beta/v1/repair-location-answer", function(req, res) {
    if (req.session.data["/beta/v1/repair-location"] === "Bathroom") {
      res.redirect("/beta/v1/repair-type-bathroom");
    } else {
      res.redirect("/beta/v1/repair-type");
    }
  });

//// Routes for repair descriptions drilldowns

    router.post("/beta/v1/repair-description-answer", function(req, res) {
    if (req.session.data["repair-location-kitchen"] === "Damp or mould") {
      res.redirect("/beta/v1/repair-description-damp");
    } else if (req.session.data["repair-location-kitchen"] === "Drip") {
      res.redirect("/beta/v1/repair-description-leak");
    } else {
      res.redirect("/beta/v1/repair-description");
    }
  });

  // Damp or mould
    router.post("/beta/v1/repair-description-damp-answer", function(req, res) {
    if (req.session.data["repair-description"] === "Damp") {
      res.redirect("/beta/v1/repair-damp");
    } else if (req.session.data["repair-description"] === "Mold"){
      res.redirect("/beta/v1/repair-description-damp-mold");
    } else {
      res.redirect("/beta/v1/repair-description")
    }
  });

  // Drip or leak
    router.post("/beta/v1/repair-description-leak-answer", function(req, res) {
    if (req.session.data["repair-leak"] === "dripping-from-wall") {
      res.redirect("/beta/v1/repair-description-leak-electrics");
    } else if (req.session.data["repair-leak"] === "tap-broken"){
      res.redirect("/beta/v1/emergency-repair");
    } else {
      res.redirect("/beta/v1/repair-description")
    }
  });

    router.post("/beta/v1/repair-description-leak-electrics-answer", function(req, res) {
    if (req.session.data["repair-leak-electrics"] === "dripping-on-electrics") {
      res.redirect("/beta/v1/emergency-repair");
    } else if (req.session.data["repair-leak-electrics"] ===  "not-containable"){
      res.redirect("/beta/v1/emergency-repair");
    } else {
      res.redirect("/beta/v1/repair-description-leak-inside")
    }
  });

    router.post("/repair-description-leak-source-answer", function(req, res) {
     if (req.session.data["repair-leak-source"] === "condensation") {
      res.redirect("/beta/v1/repair-damp");
    } else {
      res.redirect("/beta/v1/repair-description")
    }
  });


    router.post("/beta/v1/repair-location-answer", function(req, res) {
     if (req.session.data["repair-location"] === "External repair") {
      res.redirect("/beta/v1/repair-description");
    } else {
      res.redirect("/beta/v1/repair-type");
      }
    });


    router.post("/beta/v1/repair-description-answer", function(req, res) {
     if (req.session.data["repair-location-kitchen"] === "Damp or mould") {
      res.redirect("/beta/v1/repair-description-damp");
    } else if (req.session.data["repair-location-kitchen"] === "Drip") {
      res.redirect("/beta/v1/repair-description-leak");
    } else {
      res.redirect("/beta/v1/repair-description");
    }
  });

  // : Damp or mould
    router.post("/beta/v1/repair-description-damp-answer", function(req, res) {
     if (req.session.data["repair-description"] === "Damp") {
      res.redirect("/beta/v1/repair-damp");
    } else if (req.session.data["repair-description"] === "Mold"){
      res.redirect("/beta/v1/repair-description-damp-mold");
    } else {
      res.redirect("/beta/v1/repair-description")
    }
  });

  // : Drip or leak
   router.post("/beta/v1/repair-description-leak-answer", function(req, res) {
    if (req.session.data["repair-leak"] === "dripping-from-wall") {
      res.redirect("/beta/v1/repair-description-leak-electrics");
    } else if (req.session.data["repair-leak"] === "tap-broken"){
      res.redirect("/beta/v1/emergency-repair");
    } else {
      res.redirect("/beta/v1/repair-description")
    }
  });


  router.post("/beta/v1/repair-description-leak-electrics-answer", function(req, res) {
    if (req.session.data["repair-leak-electrics"] === "dripping-on-electrics") {
      res.redirect("/beta/v1/repair-leak-description-electrics-emergency");
    } else if (req.session.data["repair-leak-electrics"] === "non-containable"){
      res.redirect("/beta/v1/repair-leak-description-electrics-emergency");
    } else {
      res.redirect("/beta/v1/repair-description-leak-inside")
    }
  });

  router.post("/beta/v1/repair-description-leak-source-answer", function(req, res) {
    if (req.session.data["repair-leak-source"] === "pipe") {
      res.redirect("/beta/v1/repair-description");
    } else {
      res.redirect("/beta/v1/repair-description")
    }
  });


   router.post("/beta/v1/repair-description-answer", function(req, res) {
    if (req.session.data["repair-location-kitchen"] === "Damp or mould") {
      res.redirect("/beta/v1/repair-description-damp");
    } else if (req.session.data["repair-location-kitchen"] === "Drip") {
      res.redirect("/beta/v1/repair-description-leak");
    } else if (req.session.data["repair-location-kitchen"] === "Cupboards") {
      res.redirect("/beta/v1/repair-cupboard-type");
    } else if (req.session.data["repair-location-kitchen"] === "Electrical") {
      res.redirect("/beta/v1/repair-description-electrical");
    } else if (req.session.data["repair-location-kitchen"] === "Heating") {
      res.redirect("/beta/v1/repair-description-heating-water");
    } else {
      res.redirect("/beta/v1/repair-description");
    }
  });

  // Cupboard or worktop
   router.post("/beta/v1/repair-description-cupboard-answer", function(req, res) {
    if (req.session.data["repair-description"] === "other-cupboard") {
      res.redirect("/beta/v1/repair-description-cupboard");
    } else {
      res.redirect("/beta/v1/repair-description")
    }
  });

  // Electrical
   router.post("/beta/v1/repair-description-electrical-answer", function(req, res) {
     if (req.session.data["repair-description"] === "carbon-monoxide") {
      res.redirect("/beta/v1/repair-description-electrical-carbon-monoxide-alarm");
    } else if (req.session.data["repair-description"] === "smoke-detector") {
      res.redirect("/beta/v1/repair-description-electrical-smoke-alarm");
    } else {
      res.redirect("/beta/v1/repair-description")
    }
  });

  // Heating or hot water
   router.post("/beta/v1/repair-description-heating-water-answer", function(req, res) {
    if (req.session.data["repair-description"] === "no-heating-or-hot-water") {
      res.redirect("/beta/v1/repair-description-heating-water-emergency");
    } else {
      res.redirect("/beta/v1/repair-description")
    }
  });

// Damp or mould
   router.post("/beta/v1/repair-description-answer", function(req, res) {
    if (req.session.data["repair-location-kitchen"] === "Damp or mould") {
      res.redirect("/beta/v1/repair-description-damp");
    } else if (req.session.data["repair-location-kitchen"] === "Drip") {
      res.redirect("/beta/v1/repair-description-leak");
    } else if (req.session.data["repair-location-kitchen"] === "Cupboards") {
      res.redirect("/beta/v1/repair-cupboard-type");
    } else {
      res.redirect("/beta/v1/repair-description");
    }
  });


  router.post("/beta/v1/repair-description-damp-answer", function(req, res) {
    if (req.session.data["repair-description"] === "Damp") {
      res.redirect("/beta/v1/repair-damp");
    } else if (req.session.data["repair-description"] === "Mold"){
      res.redirect("/beta/v1/repair-description-damp-mold");
    } else {
      res.redirect("beta/v1/repair-description")
    }
  });


  // Drip or leak
   router.post("/beta/v1/repair-description-leak-answer", function(req, res) {
    if (req.session.data["repair-leak"] === "dripping-from-wall") {
      res.redirect("/beta/v1/repair-description-leak-electrics");
    } else if (req.session.data["repair-leak"] === "tap-broken"){
      res.redirect("/beta/v1/emergency-repair");
    } else {
      res.redirect("/beta/v1/repair-description")
    }
  });


  router.post("/beta/v1/repair-description-leak-electrics-answer", function(req, res) {
    if (req.session.data["repair-leak-electrics"] === "dripping-on-electrics") {
      res.redirect("/beta/v1/repair-leak-description-electrics-emergency");
    } else if (req.session.data["repair-leak-electrics"] === "non-containable"){
      res.redirect("/beta/v1/repair-leak-description-electrics-emergency");
    } else {
      res.redirect("/beta/v1/repair-description-leak-inside")
    }
  });

  router.post("/beta/v1/repair-description-leak-source-answer", function(req, res) {
    if (req.session.data["repair-leak-source"] === "pipe") {
      res.redirect("/beta/v1/repair-description");
    } else {
      res.redirect("/beta/v1/repair-description")
    }
  });

// Routes for tracking repairs

// Communal repairs
router.post("/beta/v1/communal-or-private-property", function(req, res) {
    if (req.session.data["communal"] === "yes") {
      res.redirect("/beta/v1/not-eligible");
    } else {
      res.redirect("/beta/v1/communal-repair-postcode")
    }
  });

// Reference number
router.post("/beta/v1/ref-number", function(req, res) {
    if (req.session.data["ref-number"] === "yes") {
      res.redirect("/beta/v1/ref-number-detail");
    } else {
      res.redirect("/beta/v1/not-eligible") /* confirm this journey with the team*/
    }
  });

router.post("/beta/v1/communal-or-private-property-answer", function(req, res) {
    if (req.session.data["communal"] === "yes") {
      res.redirect("/beta/v1/communal-repair-postcode");
    } else {
      res.redirect("/beta/v1/postcode")
    }
  });


//// Routes for communal repair description drilldown

    router.post("/beta/v1/communal-repair-description-answer", function(req, res) {
    if (req.session.data["communal-repair-description"] === "lights") {
      res.redirect("/beta/v1/communal-repair-description-lights");
    } else {
      res.redirect("/beta/v1/communal-repair-description");
    }
  });
module.exports = router
