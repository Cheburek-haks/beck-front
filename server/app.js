const express = require("express");
const mongoose = require("mongoose");
const config = require("config");
const chalk = require("chalk");
const initDatabase = require("./start/initDatabase");
const routes = require("./routes");

const port = config.get("port") ?? 8080;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api", routes);

// if (process.env.NODE_ENV === "production") {
//     console.log("Production");
// } else {
//     console.log("Development");
// }

async function start() {
    try {
        mongoose.connection.once("open", () => {
            initDatabase();
        });
        await mongoose.connect(config.get("mongoURI"));
        console.log(chalk.blue("MongoDB connected"));
        app.listen(port, (res, req) => {
            console.log(
                chalk.green(`Server has been started on port - ${port}`)
            );
        });
    } catch (error) {
        console.log(chalk.red(error.message));
        process.exit(1);
    }
}
start();
