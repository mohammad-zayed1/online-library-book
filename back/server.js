const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");

const mongoose = require("mongoose");


// import routes
const productRouter = require("./routes/productRouter");
const quoteRouter = require("./routes/quotesRouter");
const aboutRouter = require("./routes/aboutRouter");
const writerRouter = require("./routes/writerRouter");
const authRoute = require("./routes/userRouter");
const orderRoute = require("./routes/orderRouter");
const contactRoute = require("./routes/contactRouter");


// middlewear
app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    credentials: true,
  })
);
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.json());

// use routes
app.use(productRouter);
app.use(quoteRouter);
app.use(aboutRouter);
app.use(writerRouter);
app.use(authRoute);
app.use(orderRoute);

module.exports = {
  server: app,
  start: () => {
    mongoose
      .connect(process.env.DBURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        app.listen(process.env.PORT, () => {
          console.log(`Starting server on port ${process.env.PORT}`);
        });
      });
  },
};
