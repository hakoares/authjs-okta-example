import type { Handle } from '@sveltejs/kit';
import { SvelteKitAuth } from '@auth/sveltekit';
import Okta from '@auth/core/providers/okta';

export const handle = SvelteKitAuth(async () => {
	const authOptions = {
		secret: import.meta.env.VITE_PRIVATE_SECRET,
		trustHost: true,
		providers: [
			Okta({
				clientId: import.meta.env.VITE_PUBLIC_OKTA_CLIENT_ID,
				clientSecret: import.meta.env.VITE_PRIVATE_OKTA_CLIENT_SECRET,
				issuer: import.meta.env.VITE_PUBLIC_OKTA_ORG_URL,
				checks: ['pkce', 'state']
			})
		]
	};
	return authOptions;
}) satisfies Handle;
