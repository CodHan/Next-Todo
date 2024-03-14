import { Todo } from '@/types/type';
import React from 'react';

const reportPage = async () => {
  const req = await fetch('http://localhost:3000/api/todos', {
    method: 'GET',
    next: {
      revalidate: 10,
    },
  });
  const res = await req.json();
  const data: Todo[] = res.todos;
  const workingTodo: Todo[] = data.filter((item) => item.isDone === false);
  const doneTodo: Todo[] = data.filter((item) => item.isDone === true);

  return (
    <div>
      <div>현재 해야 할 todo는{workingTodo.length}개 입니다.</div>
      <div>현재 완료 한 todo는{doneTodo.length}개 입니다.</div>
    </div>
  );
};

export default reportPage;
