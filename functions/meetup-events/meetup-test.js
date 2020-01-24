const querystring = require('querystring');
const fetch = require('node-fetch');

const getAuthorizationCode = async (key, redirectUri) => {
    const params = querystring.stringify({
        client_id: key,
        redirect_uri: redirectUri,
        response_type: 'anonymous_code',
    });
    const init = { headers: { Accept: 'application/json' } };
    const res = await fetch(`https://secure.meetup.com/oauth2/authorize?${params}`, init);
    return (await res.json()).code;
};

const getAnonymousToken = async (key, secret, redirectUri, code) => {
    const params = querystring.stringify({
        client_id: key,
        client_secret: secret,
        grant_type: 'anonymous_code',
        redirect_uri: redirectUri,
        code
    });
    const init = {
        method: 'POST',
        headers: { Accept: 'application/json' },
    };
    const res = await fetch(`https://secure.meetup.com/oauth2/access/?${params}`, init);
    return await res.json();
};

const getAuthenticatedToken = async (email, password, anonymousToken) => {
    const params = querystring.stringify({ email, password });
    const init = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${anonymousToken}`,
        },
    };
    const res = await fetch(`https://api.meetup.com/sessions?${params}`, init);
    console.log(await res.text());
    return (await res.json()).oauth_token;
};

// Test OAuth using console params
const [ key, secret, redirectUri, email, password ] = process.argv.slice(2);
const code = await getAuthorizationCode(key, redirectUri);
const anonymousToken = await getAnonymousToken(key, secret, redirectUri, code);
console.log(`Anonymous token: ${anonymousToken}`);
const accessToken = await getAuthenticatedToken(email, password, anonymousToken);
console.log(`Authenticated token: ${accessToken}`);
