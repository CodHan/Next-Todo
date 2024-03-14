import { Todo } from './types/type';

type payload = {
  title: string;
  contents: string;
};

export const getTodo = async () => {
  const req = await fetch('http://localhost:3000/api/todos', {
    method: 'GET',
  });
  const res = await req.json();
  return res.todos;
};

export const addTodo = async (payload: payload) => {
  await fetch('http://localhost:3000/api/todos', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
};

export const deleteTodo = async (payload: { id: string }) => {
  await fetch(`http://localhost:3000/api/todos/`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
};
export const updateTodo = async (payload: Todo) => {
  await fetch('http://localhost:3000/api/todos/', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
};
