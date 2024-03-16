import { Todo } from './types/type';
import api from '@/api';

type payload = {
  title: string;
  contents: string;
};

export const getTodo = async () => {
  try {
    const req = await api.get('todos');
    const res = await req.data;
    return res;
  } catch (error) {
    console.error(error);
  }
};

export const addTodo = async (payload: payload) => {
  try {
    await api.post('todos', payload);
  } catch (error) {
    console.error(error);
  }
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
