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

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
