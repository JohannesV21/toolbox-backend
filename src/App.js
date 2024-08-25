import express from "express";
import cors from "cors";
import morgan from "morgan";
import moment from "moment";
import clc from "cli-color";
import consoleStamp from "console-stamp";
import routes from "./Routes/Routes.js";
import "dotenv/config";

const app = express();
const port = process.env.PORT;

//---- Debug ----\\
const morganDateFormat = "yyyy-MM-DD HH:mm:ss";
const morganDebugFormat = `[:customDate] - ${clc.cyan(":method")} ${clc.yellow(
  ":url"
)} :status :response-time ms - :res[content-length]]`;
const consoleTimeFormat = `:date(yyyy-mm-dd HH:MM:ss) ${clc.blue(":label")}`;

// logs configs
morgan.token("customDate", (req, res) => moment().format(morganDateFormat));
consoleStamp(console, { format: consoleTimeFormat });
app.use(morgan(morganDebugFormat));

app.use(cors());
app.use(express.text({ type: "text/xml" }));
app.use("/", routes);

app.listen(port, () => {
  console.log(`Starting ToolBox API on port ${port}`);
});
