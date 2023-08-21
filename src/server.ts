import app from "express";
import logger from "./utils/logger";
import config from "../config.json";
import router from "./routes/router";
import bodyParser from "body-parser";

export const possibleProperties = ["invoices", "crafting", "shop"];
const port = config.port || 8080;
const httpServer = app();

httpServer.use(bodyParser.json());

httpServer.use("/", router);

httpServer.use((_req, res, _next) => {
    const error = new Error("Path not found.");
    return res.status(404).json({
        message: error.message,
    });
});

httpServer.listen(port, () => {
    logger.info(`Server | Started http-server on port ${port}`);
});
