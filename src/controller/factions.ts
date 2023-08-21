import { Request, Response } from "express";
import config from "../../config.json";

const factions = async (req: Request, res: Response) => {
    return res.status(200).json(config.factions);
};

export default factions;
