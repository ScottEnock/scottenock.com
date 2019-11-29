const axios = require('axios');
const { SEND_IN_BLUE_API_KEY } = process.env;

exports.handler = async ( event , context ) => {

    console.log(event.headers["Origin"])

    try {
        console.log(event.body)
        const body = JSON.parse(event.body);

        const config = {
            headers: {
                "api-key": SEND_IN_BLUE_API_KEY
            }
        }

        const response = await axios.post("https://api.sendinblue.com/v3/contacts", {
        "email": body.email,
        "listIds":[3],
        "updateEnabled":false
        }, config);

        return {body: "works", statusCode: 200}
    } catch (error) {
        // console.log(error)
        // return { body: "error", statusCode: 400}
        return {
            body: JSON.stringify({message: error.response.data.message}), 
            statusCode: error.response.status
        }
    }

}