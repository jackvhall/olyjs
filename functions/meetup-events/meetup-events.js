const fetch = require('node-fetch');
const oauth = require('./oauth.js');

exports.handler = async (event, context) => {
    const {
        MEETUP_KEY: key,
        MEETUP_SECRET: secret,
    } = process.env,
        redirectUri = 'https://olyjs.com';
    const authCode = await oauth.getAuthorizationCode(key, redirectUri);
    const accessToken = await oauth.getAccessToken(key, secret, redirectUri, authCode);
    console.log(`Authorization code: ${authCode}`);
    console.log(`Access token: ${accessToken}`);

    const init = {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    };

    try {
        const res = await fetch('https://api.meetup.com/Olympia-Front-end-Development-Meetup-Group/events', init);
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
