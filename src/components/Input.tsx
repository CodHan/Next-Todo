import React from 'react';

const Input = () => {
  return (
    <div>
      <div className="mt-5 flex justify-center">
        <span className="text-[25px] p-1">제목:</span>
        <input
          type="text"
          placeholder="제목 입력"
          className="input input-bordered input-accent w-full max-w-xs"
        />
      </div>
      <div className="mt-5 flex justify-center">
        <span className="text-[25px] p-1">내용:</span>
        <input
          type="text"
          placeholder="내용 입력"
          className="input input-bordered input-accent w-full max-w-xs"
        />
      </div>
      <div className="flex justify-center mt-5 ml-8">
        <button className="btn btn-wide ">확인</button>
      </div>
    </div>
  );
};

export default Input;
