 var express = require("express");
 var app = express();

 var PORT = process.env.PORT || 8080;

 app.use(express.urlencoded({ extended: true}));
 app.use(express.json());


 require("./routes/apiRoutes")(app);
 require("./routes/htmlRoutes")(app);

 app.listen(PORT, function(){
     console.log("App listening on PORT:" + PORT);
 });
 
























 var friendsData = [
 
 {
    "name":"Maddie",
    "photo":"",
    "scores":[
        5,
        3,
        2,
        4,
        1,
        5,
        3,
        4,
        2,
        2
      ]
  },
  {
    "name":"Abraham",
    "photo":"",
    "scores":[
        2,
        3,
        5,
        1,
        4,
        3,
        2,
        1,
        4,
        2
      ]
  },
  {
    "name":"Anne",
    "photo":"",
    "scores":[
        2,
        4,
        1,
        1,
        2,
        5,
        4,
        4,
        5,
        2
      ]
  },
  {
    "name":"Francisco",
    "photo":"",
    "scores":[
        4,
        3,
        4,
        1,
        2,
        5,
        3,
        4,
        1,
        3
      ]
  }
];