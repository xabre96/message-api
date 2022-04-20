import "reflect-metadata"
import { createExpressServer } from 'routing-controllers';
import path from 'path';
import databaseLoader from "./src/loaders/databaseLoader";

databaseLoader()

createExpressServer({
    routePrefix: '/api',
    controllers: [path.join(__dirname + '/src/controllers/*.ts')],
}).listen(3000);

