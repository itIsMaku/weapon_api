import { Request, Response } from "express";
import { getUserByAuthKey } from "../mysql/get";

const auth = async (req: Request, res: Response) => {
    let key = req.headers.authorization;
    if (!key) return res.status(400).json({ error: "No key provided" });
    let user = await getUserByAuthKey(key);
    if (!user) return res.status(403).json({ error: "Invalid key" });
    return res.status(200).json({ user: user });
};

export default auth;
