const db = new Map();

export function getTodos(userId) {
	if (!db.get(userId)) db.set(userId, [newTodo('Learn SvelteKit')]);
	return db.get(userId);
}

export function createTodo(userId, description) {
	const todos = db.get(userId);
	todos.push(newTodo(description));
}

export function deleteTodo(userId, todoId) {
	const todos = db.get(userId);
	const index = todos.findIndex((todo) => todo.id === todoId);
	if (index !== -1) todos.splice(index, 1);
}

function newTodo(description) {
	return {
		id: crypto.randomUUID(),
		description,
		done: false
	};
}
