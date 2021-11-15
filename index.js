var express = require('express');
var app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json()); 
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", req.headers.origin);
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-access-token");
  next();
});

require('./app/Routes')(app,console);

app.listen(8000, () => {
  console.log('server running at the port', 8000);
})

/*const server = http.createServer((req, res) => {
  let reqBody   = "",
  signature = req.headers["x-razorpay-signature"];
  req.on("data", (data) => {
    reqBody += data;
  });
  req.on("end", (data) => {
    console.log("is signature valid");
    console.log(reqBody)
    console.log(razorpay.validateWebhookSignature(reqBody, signature, mySecret));
  });
});
server.listen(8000)*/