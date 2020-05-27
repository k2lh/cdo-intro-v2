const passport = require('passport');
const SamlStrategy = require('passport-saml').Strategy;
const samlSignature = require('./samlSignature');

module.exports = function (passport, config) {
  passport.serializeUser(function(user, done) {
    done(null, JSON.stringify(user));
  });

  passport.deserializeUser(function(user, done) {
    done(null, JSON.parse(user));
  });

  var verifySaml = function(profile, done) {
    var Groups = config.passport.saml.attributesAsJson && config.passport.saml.attributesAsJson.Groups && profile.Groups && JSON.parse(profile.Groups) || profile.Groups || [];
    var user = {
      id : profile.uid,              // Serial + country code
      uid: profile.emailaddress + "/" +profile.uid, // intranet e-mail + serial # is unique and human readable
      nameID: profile.nameID,
      nameIDFormat: profile.nameIDFormat,
      sessionIndex: profile.sessionIndex,
      email : profile.emailaddress,
      displayName : profile.cn,
      firstName : profile.firstName,
      lastName : profile.lastName,
      Groups: (Groups.map?Groups.map(function(item){return item.split(/.*cn=|,/)[1];}): [Groups.split(/.*cn=|,/)[1]]) // like ['cn=w3id-saml-adopters-techcontacts,ou=memberlist,ou=ibmgroups,o=ibm.com']
    };
    var GroupCheck = (typeof config.passport.saml.GroupCheck === "undefined") || config.passport.saml.GroupCheck && config.passport.saml.GroupCheck.some && config.passport.saml.GroupCheck.some(function(item) { return user.Groups.indexOf(item)>=0;}) || user.Groups.indexOf(config.passport.saml.GroupCheck)>=0;
    if (GroupCheck) {
        return done(null,user);
    } else {
        return done(null, false, { message : "User is not a member of a required group." });
    }
  };

  var strategies = {
    saml:  {passportStrategy: SamlStrategy, config: config.passport.saml, verify: verifySaml}
  };
  if (strategies[config.passport.strategy] ) {
    var strategyConf = strategies[config.passport.strategy];
    var strategy = new strategyConf.passportStrategy(strategyConf.config, strategyConf.verify);
    passport.use(strategy);
  }

  // Add handler for patching the signed IDP response
  passport.patchResponse = samlSignature.patchResponse;

};
