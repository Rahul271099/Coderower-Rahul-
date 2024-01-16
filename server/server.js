import app from "./app.js";

//Database Connection
import { connectDB } from "./config/connection.js";

app.get("/", (req, res) => {
  res.send("Working");
});

app.listen(process.env.PORT, () =>
  connectDB()
    .then(() =>
      console.log(
        `Server is up and database connection pass running on port ${process.env.PORT}!!!`
      )
    )
    .catch(() =>
      console.log("server is Running but database connection failed!!!!")
    )
);
