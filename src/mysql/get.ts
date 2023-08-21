import { possibleProperties } from "../server";
import mysql from "./connection";

export async function getDataByFaction(table: string, faction: string) {
    if (!possibleProperties.includes(table)) return null;
    let p = new Promise((res, rej) => {
        mysql.query(
            `SELECT * FROM \`${table}\` WHERE \`faction\` = ?`,
            [faction],
            (err, result) => {
                if (err) rej(err);
                else res(result);
            }
        );
    });
    return p;
}

export async function getUserByAuthKey(key: string) {
    let p = new Promise((res, rej) => {
        mysql.query(
            `SELECT * FROM \`users\` WHERE \`auth_key\` = ?`,
            [key],
            (err, result: any) => {
                if (err) rej(err);
                else res(result ? result[0] : null);
            }
        );
    });
    return p;
}
