import express, { Request, Response } from "express";
import factions from "../controller/factions";
import {
    factionPropertyGet,
    factionPropertyPost,
} from "../controller/factionProperty";
import bodyParser from "body-parser";
import auth from "../controller/auth";

const router = express.Router();

router.get("/", (_req: Request, res: Response) => {
    return res.status(200).json({ status: "Operational." });
});

router.get("/api/factions", factions);

router.get("/api/faction/:faction/:property", factionPropertyGet);

router.post("/api/faction/:faction/:property", factionPropertyPost);

router.get("/api/auth", auth);

export = router;
