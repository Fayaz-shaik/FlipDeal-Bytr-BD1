const express = require('express');
const cors = require('cors');

const { resolve } = require('path');

const app = express();
const port = 3010;

app.use(cors);

//Server Side Values
let taxRate = 5
let discountPercentage = 10;
let loyaltyRate = 2;

// app.get('/', (req, res) => {
//   res.sendFile(resolve(__dirname, 'pages/index.html'));
// });

app.get("/cart-total",(req,res)=>{
  res.send((parseFloat(res.query.newItemPrice)+parseFloat(res.query.cartTotal)).toString())
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
