const express = require('express');
const cors = require('cors');

const { resolve } = require('path');

let app = express();
const port = 3010;

app.use(cors());

//Server Side Values
let taxRate = 5
let discountPercentage = 10;
let loyaltyRate = 2;

// app.get('/', (req, res) => {
//   res.sendFile(resolve(__dirname, 'pages/index.html'));
// });

app.get("/cart-total",(req,res)=>{
  res.send((parseFloat(req.query.newItemPrice)+parseFloat(req.query.cartTotal)).toString())
});

app.get("/membership-discount",(req,res)=>{
  let cartTotal = parseFloat(req.query.cartTotal)
  res.send(((req.query.isMember)?(cartTotal*(100-discountPercentage)/100):(cartTotal)).toString())
});

app.get("/calculate-tax",(req,res)=>{
  res.send((parseFloat(req.query.cartTotal)*taxRate/100).toString())
});

app.get("/estimate-delivery",(req,res)=> {
  let distance = parseFloat(req.query.distance)
  let shippingMethod = req.query.shippingMethod
  res.send(((shippingMethod=='Standard')?((distance/50).toString()):((distance/100).toString())).toString())
});

app.get("/shipping-cost",(req,res)=> {
  let weight =  parseFloat(req.query.weight);
  let distance = parseFloat(req.query.distance);
  res.send((weight*distance*0.1).toString())
});

app.get("/loyalty-points",(req,res)=>{
  res.send((parseFloat(req.query.purchaseAmount)*loyaltyRate).toString())
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
