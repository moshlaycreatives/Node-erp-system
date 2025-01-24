import https from "https";
import http from "http";
import fs from "fs";

import { app } from "./src/app.js";
import { ConnectDb } from "./src/config/db.config.js";

/** __________ Server Setup with Clustering __________ */
let server;
if (process.env.NODE_ENV === "PRODUCTION") {
  try {
    const privateKey = fs.readFileSync("./privkey.pem", "utf8");
    const certificate = fs.readFileSync("./fullchain.pem", "utf8");

    const options = {
      key: privateKey,
      cert: certificate,
    };

    server = https.createServer(options, app);
  } catch (err) {
    console.error("Error reading files:", err);
  }
} else {
  server = http.createServer(app);
}

/** __________ Server Listing & DB Connection __________ */
(async () => {
  try {
    await ConnectDb();
    server.listen(app.get("port"), () => {
      if (process.env.NODE_ENV === "PRODUCTION") {
        console.log("Server is running.");
      } else {
        console.info("==> 🌎 Go to http://localhost:%s", app.get("port"));
      }
    });
  } catch (error) {
    console.error("An error occurred while running server", error);
  }
})();
