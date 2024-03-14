import React from 'react';

const Working = () => {
  return (
    <div className="flex">
      <div className="ml-10 mt-5 card w-96 bg-neutral text-neutral-content">
        <div className="card-body items-center text-center">
          <h2 className="card-title">Cookies!</h2>
          <p>We are using cookies for no reason.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-success">완료</button>
            <button className="btn btn-error">삭제</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Working;
