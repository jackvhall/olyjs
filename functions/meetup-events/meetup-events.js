const fetch = require('node-fetch');
const oauth = require('./oauth.js');

exports.handler = async (event, context) => {
    const {
        MEETUP_KEY: key,
        MEETUP_SECRET: secret,
        MEETUP_USER: user,
        MEETUP_PASSWORD: password,
    } = process.env,
        redirectUri = 'https://olyjs.com';
    const authCode = await oauth.getAuthorizationCode(key, redirectUri);
    const anonymousToken = await oauth.getAnonymousToken(key, secret, redirectUri, authCode);
    const accessToken = await oauth.getAuthenticatedToken(user, password, anonymousToken);

    const init = {
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${accessToken}`,
        },
    };
    const res = await fetch('https://api.meetup.com/Olympia-Front-end-Development-Meetup-Group/events', init);
    return {
        statusCode: 200,
        body: await res.text(),
    };
};
