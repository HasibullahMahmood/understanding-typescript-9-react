import React from 'react';

interface TodoListInterface {
	items: { id: string; text: string }[];
}
const TodoList: React.FC<TodoListInterface> = (props) => {
	return (
		<ul>
			{props.items.map((item) => (
				<li key={item.id}>{item.text}</li>
			))}
		</ul>
	);
};

export default TodoList;
