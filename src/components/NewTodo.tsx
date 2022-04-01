import React, { useRef } from 'react';

const NewTodo: React.FC = () => {
	const todoInputRef = useRef<HTMLInputElement>(null);
	const submitHandler = (event: React.FormEvent) => {
		event.preventDefault();
		const todoText = todoInputRef.current!.value;
		console.log(todoText);
	};

	return (
		<form onSubmit={submitHandler}>
			<div>
				<label htmlFor="todo-text">Todo text</label>
				<input type="text" id="todo-text" ref={todoInputRef} />
			</div>

			<button>Submit</button>
		</form>
	);
};

export default NewTodo;
