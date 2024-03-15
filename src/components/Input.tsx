'use client';
import { addTodo } from '@/mutateFn';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import React, { ChangeEvent, useState } from 'react';

const Input = () => {
  const [title, setTitle] = useState('');
  const [contents, setcontents] = useState('');
  const router = useRouter();

  const queryClient = useQueryClient();

  const addMutate = useMutation({
    mutationFn: addTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    },
  });

  const handTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const handContents = (e: ChangeEvent<HTMLInputElement>) => {
    setcontents(e.target.value);
  };

  const handSubmit = () => {
    const newTodo = {
      title,
      contents,
    };
    addMutate.mutate(newTodo);
  };

  const handRouter = () => {
    router.push('/report');
  };

  return (
    <div>
      <div className="mt-5 flex justify-center">
        <span className="text-[25px] p-1">제목:</span>
        <input
          type="text"
          placeholder="제목 입력"
          className="input input-bordered input-accent w-full max-w-xs"
          onChange={handTitle}
        />
      </div>
      <div className="mt-5 flex justify-center">
        <span className="text-[25px] p-1">내용:</span>
        <input
          type="text"
          placeholder="내용 입력"
          className="input input-bordered input-accent w-full max-w-xs"
          onChange={handContents}
        />
      </div>
      <div className="flex justify-center mt-5 ml-8">
        <button className="btn btn-wide" onClick={handSubmit}>
          입력
        </button>
      </div>
      <div className="flex justify-center mt-5 ml-8">
        <button className="btn glass " onClick={handRouter}>
          통계 보러 가기
        </button>
      </div>
    </div>
  );
};

export default Input;
