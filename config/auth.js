module.exports = {

    facebookAuth: {
        clientID: '451212361962490', // your App ID
        clientSecret: 'e1cd6dded43992a08e15c249532217', // your App Secret
        callbackURL: 'http://localhost:8080/auth/facebook/callback',
        profileURL: 'https://graph.facebook.com/v2.5/me?fields=first_name,last_name,email',
        profileFields: ['id', 'email', 'name'] // For requesting permissions from Facebook API
    },
};