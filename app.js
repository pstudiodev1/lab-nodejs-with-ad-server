// Initialize
var ActiveDirectory = require('activedirectory');
var config = {
    url: 'ldap://192.168.99.53',
    baseDN: 'dc=acs,dc=local',
    username: 'Administrator@acs.local',
    password: 'P@ssw0rd'
};

var ad = new ActiveDirectory(config);
var username = 'indyit@acs.local';
var password = 'P@ssw0rd';

// Authenticate
ad.authenticate(username, password, function(err, auth) {
    if (err) {
        console.log('ERROR: '+JSON.stringify(err));
        return;
    }
    if (auth) {
        console.log('Authenticated!');
        ad.findUser("indyit", function(err, users) {
            if (err) {
              console.log('ERROR: ' +JSON.stringify(err));
              return;
            }
           
            if ((! users) || (users.length == 0)) console.log('No users found.');
            else {
              console.log('findUsers: '+JSON.stringify(users));
            }
        });
    }
    else {
        console.log('Authentication failed!');
    }
});
