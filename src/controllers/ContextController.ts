import {BodyParam, JsonController, Post, Res} from "routing-controllers";
import {Context} from "../models/Context";
import {appDataSource} from "../utils/appDataSourceUtil";
import {some, split} from "lodash";

type ResponseBody = {
    response_id: string;
    response: string;
}

@JsonController()
export class ContextController {

    constructor() {
    }

    @Post('/message')
    public async getMessage(@BodyParam('conversation_id', {required: true}) conversation_id: string, @BodyParam('message', {required: true}) message: string, @Res() response: any) {
        let params: ResponseBody = {response_id: conversation_id, response: 'Sorry, I don’t understand.'};

        const contexts = await appDataSource.getRepository(Context).find()

        if (contexts.length > 0) {
            const explodedMessage = split(message, /\s+|,\s+/g)

            some(explodedMessage, (word: string) =>
                some(contexts, (context: any) => {
                    const isInContext = context.message.replace(/\[|\]|\'|\"/g, '') //remove brackets and quotation marks
                        .split(',') //convert into array
                        .map((str: string) => str.replace(/\s+/g, '').toLowerCase()) //remove spaces and convert to lowercase
                        .includes(word.toLowerCase());

                    if (isInContext) {
                        params = {response_id: conversation_id, response: context.response};
                        return true;
                    }
                }))
        }

        return response.send(params);
    }
}