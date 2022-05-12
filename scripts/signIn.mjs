import * as jose from "jose";
export function handleCredentialResponse(response) {
    // decodeJwtResponse() is a custom function defined by you
    // to decode the credential response.
    const responsePayload = decodeJwtResponse(response.credential).payload;

    console.log("ID: " + responsePayload.sub);
    console.log('Full Name: ' + responsePayload.name);
    console.log('Given Name: ' + responsePayload.given_name);
    console.log('Family Name: ' + responsePayload.family_name);
    console.log("Image URL: " + responsePayload.picture);
    console.log("Email: " + responsePayload.email);
}

function decodeJwtResponse(credential) {
    const jwt = credential;
    return { payload, protectedHeader } = await jose.jwtVerify(jwt, publicKey, {
        issuer: 'urn:example:issuer',
        audience: 'urn:example:audience'
    });
}