import * as jose from "jose";

export var decodeJwtResponse = credential => {
    const jwt = credential;
    return { payload, protectedHeader } = await jose.jwtVerify(jwt, publicKey, {
        issuer: 'urn:example:issuer',
        audience: 'urn:example:audience'
    });
}