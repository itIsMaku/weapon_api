import { possibleProperties } from "../server";
import mysql from "./connection";

export async function insertData(table: string, faction: string, data: any) {
    if (!possibleProperties.includes(table)) return null;

    let p;
    if (table == "invoices") {
        let employee = data.employee;
        let employeeId = data.employee_id;
        let price = data.price;
        let target = data.target;
        let targetId = data.target_id;
        let description = data.description;
        let date = data.date || new Date();
        p = new Promise((res, rej) => {
            mysql.query(
                "INSERT INTO `invoices` (`faction`, `employee`, `employee_id`, `price`, `target`, `target_id`, `description`, `date`) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
                [
                    faction,
                    employee,
                    employeeId,
                    price,
                    target,
                    targetId,
                    description,
                    date,
                ],
                (err, result) => {
                    if (err) rej(err);
                    else res(result);
                }
            );
        });
    } else if (table == "crafting") {
        let ic_name = data.ic_name;
        let ooc_name = data.ooc_name;
        let charid = data.charid;
        let steam_hex = data.steam_hex;
        let item = data.item;
        let weapon_pieces = data.weapon_pieces;
        let price = data.price;
        let date = data.date || new Date();
        p = new Promise((res, rej) => {
            mysql.query(
                "INSERT INTO `crafting` (`faction`, `ic_name`, `ooc_name`, `charid`, `steam_hex`, `item`, `weapon_pieces`, `price`, `date`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
                [
                    faction,
                    ic_name,
                    ooc_name,
                    charid,
                    steam_hex,
                    item,
                    weapon_pieces,
                    price,
                    date,
                ],
                (err, result) => {
                    if (err) rej(err);
                    else res(result);
                }
            );
        });
    } else if (table == "shop") {
        let ic_name = data.ic_name;
        let ooc_name = data.ooc_name;
        let charid = data.charid;
        let item = data.item;
        let price = data.price;
        let count = data.count;
        let date = data.date || new Date();
        p = new Promise((res, rej) => {
            mysql.query(
                "INSERT INTO `shop` (`faction`, `ic_name`, `ooc_name`, `charid`, `item`, `price`, `count`, `date`) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
                [faction, ic_name, ooc_name, charid, item, price, count, date],
                (err, result) => {
                    if (err) rej(err);
                    else res(result);
                }
            );
        });
    }
    p?.catch((err) => {
        console.log(err);
    });
    return p;
}
