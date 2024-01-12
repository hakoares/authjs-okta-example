import OktaAuth, { type OktaAuthOptions } from '@okta/okta-auth-js';

const config: OktaAuthOptions = {
	// Required config
	issuer: import.meta.env.VITE_PUBLIC_OKTA_ORG_URL,
	clientId: import.meta.env.VITE_PUBLIC_OKTA_CLIENT_ID,
	redirectUri: '/oauth2',
	// redirectUri: 'https://acme.com/oauth2/callback/home',

	// Use authorization_code flow
	responseType: 'code',
	pkce: false
};

export const authClient = new OktaAuth(config);
