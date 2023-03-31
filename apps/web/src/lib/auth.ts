import { SvelteKitAuth, Providers } from 'sk-auth';
import { env } from '$env/dynamic/private';

// this is the domain we set up in our Cognito Pool
const DOMAIN = env.COGNITO_DOMAIN;
const redirectUrl = env.BASE_URL + env.PORT;

// these are the configuration seetings for our OAUTH2 provider
const config = {
	accessTokenUrl: `https://${DOMAIN}/oauth2/token`,
	profileUrl: `https://${DOMAIN}/oauth2/userInfo`,
	authorizationUrl: `https://${DOMAIN}/oauth2/authorize`,
	redirect: redirectUrl,
	clientId: import.meta.env.VITE_CLIENT_ID,
	clientSecret: import.meta.env.VITE_CLIENT_SECRET,
	scope: ['openid', 'email'],
	id: 'cognito', // IMPORTANT: this is the id that we'll use to identify our provider
	contentType: 'application/x-www-form-urlencoded'
};

const oauthProvider = new Providers.OAuth2Provider(config);

// exposing our auth object
export const appAuth = new SvelteKitAuth({
	providers: [oauthProvider]
});
