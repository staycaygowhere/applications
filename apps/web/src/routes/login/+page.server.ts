import { env } from '$env/dynamic/private';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
	return {
		GOOGLE_CLIENT_ID: env.GOOGLE_CLIENT_ID,
		GOOGLE_SECRET: env.GOOGLE_SECRET
	};
};
