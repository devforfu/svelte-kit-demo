import * as db from '$lib/db.js';

export function load({ cookies }) {
	let id = cookies.get('userId');

	if (!id) {
		id = crypto.randomUUID();
		cookies.set('userId', id, { path: '/' });
	}

	return {
		id,
		todos: db.getTodos(id)
	};
}
