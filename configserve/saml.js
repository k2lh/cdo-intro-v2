var appHost = process.env.VCAP_APPLICATION && JSON.parse(process.env.VCAP_APPLICATION).application_uris[0] || 'localhost';
var xmlCert = process.env.XML_CERT || '';

module.exports = {
    'dev' : {
        passport: {
            strategy : 'saml',
            saml : {
                issuer: 'https://' + appHost + '/',
                callbackUrl: 'https://' + appHost + '/auth/login/callback/postResponse',
                privateCert:  '-----BEGIN PRIVATE KEY-----\n' +
                              xmlCert.match(/.{1,64}/g).join('\n') +
                              '\n-----END PRIVATE KEY-----\n',
                signatureAlgorithm: 'sha256',
                // GroupCheck:  ['saa'],
                // attributesAsJson: {'Groups': true},
                passive: false,
                identifierFormat: 'urn:oasis:names:tc:SAML:2.0:nameid-format:transient',
                skipRequestCompression: false,
                disableRequestedAuthnContext: true,
                entryPoint: "https://sso.com/auth/sps/samlidp2/saml20/login",
                logoutUrl: "https://sso.com/auth/sps/samlidp2/saml20/slo",
								cert: ""
	      				},
            sessionSecret: xmlCert
        }
    }
};
