const expres = require("express");
const cors = require("cors");
const { error } = require("console");

const app = expres();

// use middleware to form our contract for incoming json payloads ONLY
app.use(expres.json());
// use middleware for url encoding
app.use(expres.urlencoded({extended: true}));
//use middleware to handle cors policy
app.use(cors());


// health point or actuator
// http://localhost:3001
app.get("/", (req, res, next)=>{
  res.status(200).json({message: "Service is up"});
})

// routers


// bad url or error we can handle
// with middleware
app.use((req, res, next)=>{
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next)=>{
  res.status(error.status || 500).json({
    error: {
      message: error.message,
      status: error.status,
    }
  })
})



module.exports = app;