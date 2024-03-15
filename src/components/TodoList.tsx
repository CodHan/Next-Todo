'use client';
import React from 'react';
import Working from './Working';
import Done from './Done';
import Input from './Input';

const TodoList = () => {
  return (
    <>
      <div>
        <Input />
        <div className="text-[40px] ml-10">Working...</div>
        <Working />
      </div>
      <div>
        <div className="text-[40px] ml-10 mt-5">Done...!!</div>
        <Done />
      </div>
    </>
  );
};

export default TodoList;
