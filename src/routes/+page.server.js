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

export const actions = {
	create: async ({ cookies, request }) => {
		const data = await request.formData();
		db.createTodo(cookies.get('userId'), data.get('description'));
	},
	delete: async ({ cookies, request }) => {
		const data = await request.formData();
		db.deleteTodo(cookies.get('userId'), data.get('id'));
	}
}