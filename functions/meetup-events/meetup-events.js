const fetch = require('node-fetch');

exports.handler = async (event, context) => {
    try {
        const res = await fetch('https://api.meetup.com/Olympia-Front-end-Development-Meetup-Group/events');
        return {
            statusCode: 200,
            headers: {
                'Content-Type': 'application/json'
            },
            body: await res.text(),
        };
    }
    catch (err) {
        console.log(err);
        return {
            statusCode: 500,
        };
    }
};
