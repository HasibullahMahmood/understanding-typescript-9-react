import React, { useState } from 'react';
import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';
import Todo from './Todo.model';

const App: React.FC = () => {
	const [todos, setTodos] = useState<Todo[]>([]);

	const addNewTodoHandler = (text: string) => {
		const randomId = Math.random() + new Date().toString();
		const todo = { id: randomId, text };
		setTodos((prev) => [todo, ...prev]);
	};

	const deleteTodoHandler = (todoId: string) => {
		setTodos((prev) => prev.filter((i) => i.id !== todoId));
	};

	return (
		<div>
			<NewTodo onAddTodo={addNewTodoHandler} />
			<TodoList items={todos} onDeleteTodo={deleteTodoHandler} />
		</div>
	);
};

export default App;
