'use client';
import { deleteTodo, getTodo, updateTodo } from '@/mutateFn';
import { Todo } from '@/types/type';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import React from 'react';

const Done = () => {
  const { isLoading, isError, data } = useQuery({
    queryKey: ['todos'],
    queryFn: getTodo,
  });
  const queryClient = useQueryClient();

  const deleteMutate = useMutation({
    mutationFn: deleteTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    },
  });
  const updateMutate = useMutation({
    mutationFn: updateTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    },
  });

  const handDelete = (id: string) => {
    const confirm = window.confirm('정말 삭제 하나요?');
    if (!confirm) {
      return;
    }
    const payload = { id };
    deleteMutate.mutate(payload);
  };
  const handUpdate = (id: string) => {
    const findData = data.find((item: Todo) => item.id === id);
    const updateData = { ...findData, isDone: !findData.isDone };
    updateMutate.mutate(updateData);
  };
  if (isLoading) {
    return <div>로딩중...</div>;
  }
  if (isError) {
    return <div>에러발생!</div>;
  }
  const doneTodo = data.filter((item: Todo) => {
    return item.isDone === true;
  });
  return (
    <div className="flex">
      {doneTodo?.map((item: Todo) => {
        return (
          <div
            className="ml-10 mt-5 card w-96 bg-neutral text-neutral-content"
            key={item.id}
          >
            <div className="card-body items-center text-center">
              <h2 className="card-title">{item.title}</h2>
              <p>{item.contents}</p>
              <div className="card-actions justify-end">
                <button
                  className="btn btn-primary"
                  onClick={() => handUpdate(item.id)}
                >
                  취소
                </button>
                <button
                  className="btn btn-error"
                  onClick={() => handDelete(item.id)}
                >
                  삭제
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Done;
