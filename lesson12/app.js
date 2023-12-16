const express = require('express');
const app = express();


app.use(express.json());


// Routes for /users
const usersRouter = require('./routes/users');
app.use('/users', usersRouter);

// Routes for /products
const productsRouter = require('./routes/products');
app.use('/products', productsRouter);



//Custom 404 page
app.use((req, res) => {
  res.status(404).send('404 Page Not Found');
});


//Custom error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});


app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});
