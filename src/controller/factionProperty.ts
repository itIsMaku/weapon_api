import { Request, Response } from "express";
import { getDataByFaction } from "../mysql/get";
import config from "../../config.json";
import { insertData } from "../mysql/insert";

const factionPropertyGet = async (req: Request, res: Response) => {
    let factionName = req.params.faction;
    let propertyName = req.params.property;
    let data = await getDataByFaction(propertyName, factionName);
    if (data == null) {
        return res.status(404).json({
            error: `Property ${propertyName} not found for faction ${factionName}`,
        });
    }
    return res.status(200).json(data);
};

const factionPropertyPost = async (req: Request, res: Response) => {
    let factionName = req.params.faction;
    let propertyName = req.params.property;
    let originToken = config.token;
    let token = req.headers.authorization;
    if (token == null) {
        return res.status(401).json({ error: "No token provided." });
    }
    if (originToken != token) {
        return res.status(403).json({ error: "Invalid token." });
    }
    let response = await insertData(propertyName, factionName, req.body);
    if (response == null) {
        return res.status(404).json({
            error: `Property ${propertyName} not found for faction ${factionName}`,
        });
    }
    return res.status(200).json({ status: "Success." });
};

export { factionPropertyGet, factionPropertyPost };
