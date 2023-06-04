require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const cors = require("cors");
// const MailingController = require("./controller/mailing");
// const Authentication = require("./middleware/authentication");

app.use(express.json());
// allawing cors to fix fetching errors
app.use(
  cors({
    origin: "https://mailing-app-coral.vercel.app",
    methods: ["GET", "POST", "PUT", "DELETE"], // Adjust the allowed methods as per your requirements
    allowedHeaders: ["Content-Type", "Authorization", "Accept"], // Adjust the allowed headers as per your requirements
  })
);

app.get("/", (req, res) => {
  res.send("API's Workig");
});

const userRouter = require("./routes/users");
const mailingRouter = require("./routes/mailing");
const tujuanRouter = require("./routes/tujuan");
const jobDetailsRouter = require("./routes/jobDetail");
const jobResultRouter = require("./routes/jobResult");

// url for api
app.use("/users", userRouter);
app.use("/mailings", mailingRouter);
app.use("/tujuans", tujuanRouter);
app.use("/job-details", jobDetailsRouter);
app.use("/job-results", jobResultRouter);

app.listen(port, "0.0.0.0", () => console.log(`app listening in port ${port}`));
