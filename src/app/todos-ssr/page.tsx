import { Todo } from '@/types/type';
import axios from 'axios';
import Link from 'next/link';
import React from 'react';
import api from '@/api';

const ssrTodoPage = async () => {
  const req = await api.get('todos');
  const todos = req.data;

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
