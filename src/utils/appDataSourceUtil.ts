import {DataSource} from "typeorm";
import {Context} from "../models/Context";

export const appDataSource = new DataSource({
    type: "sqlite",
    database: "message_api",
    entities: [Context],
    synchronize: true,
    logging: false,
})