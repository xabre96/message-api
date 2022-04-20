import {appDataSource} from "../utils/appDataSourceUtil";

const databaseLoader = () => {
    appDataSource.initialize()
        .then(() => {})
        .catch((error) => console.log(error))
}

export default databaseLoader;

