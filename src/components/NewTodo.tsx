import React, { useRef } from 'react';
import './NewTodo.css'

interface NewTodoProps {
	onAddTodo: (text: string) => void;
}
const NewTodo: React.FC<NewTodoProps> = (props) => {
	const todoInputRef = useRef<HTMLInputElement>(null);
	const submitHandler = (event: React.FormEvent) => {
		event.preventDefault();
		const todoText = todoInputRef.current!.value;
		props.onAddTodo(todoText);
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
