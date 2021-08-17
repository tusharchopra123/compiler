const express = require("express");
const app = express();
const dotenv = require("dotenv");
const compilerRoutes = require("./routes/compilerRoutes.js");
const { notFound, errorHandler } = require("./middleware/errorMiddleware.js");
const path = require("path");
const cors = require("cors");
const morgan = require("morgan");
const connectDB = require('./config/db');
dotenv.config();
connectDB();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/api/compiler",compilerRoutes)

const dirname = path.resolve();
if (process.env.NODE_ENV === "development") {
app.use(morgan("dev"));
}
if (process.env.NODE_ENV === "production") {
app.use(express.static(path.join(dirname, "client/build")));
app.get("*", (req,res) =>
res.sendFile(path.resolve(dirname, "client", "build", "index.html"))
);
} else {
app.get("/", function (req, res) {
    res.send("Hello hi");
});
}
app.use(notFound);
app.use(errorHandler);
const port = process.env.PORT || 6876
  
app.listen(port, () => {
console.log(`Example app listening at http://localhost:${port}`);
});

