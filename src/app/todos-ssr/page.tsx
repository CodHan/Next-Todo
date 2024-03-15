import { Todo } from '@/types/type';
import Link from 'next/link';
import React from 'react';

const ssrTodoPage = async () => {
  const req = await fetch('http://localhost:3000/api/todos', {
    method: 'GET',
    cache: 'no-cache',
  });
  const res = await req.json();

  const todos = res.todos;

  return (
    <div>
      <h1 className="text-[30px] font-bold ml-10 mt-5">투두 목록 입니다.</h1>
      <Link
        href={'/report'}
        className="btn glass text-[30px] ml-6 text-blue-600/100"
      >
        통계 보러 가기 Click!
      </Link>
      <div className="flex">
        {todos.map((item: Todo) => {
          return (
            <div
              className="ml-10 mt-5 card w-96 bg-neutral text-neutral-content"
              key={item.id}
            >
              <div className="card-body items-center text-center">
                <h2 className="card-title">{item.title}</h2>
                <p>{item.contents}</p>
                <div className="card-actions justify-end"></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ssrTodoPage;
