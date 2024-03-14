import Image from 'next/image';
import React from 'react';

const AboutPage = async () => {
  const req = await fetch('http://localhost:3000/api/company', {
    method: 'GET',
  });
  const res = await req.json();
  const data = res.data;
  const { name, desctiption, image } = data;

  return (
    <div>
      <div>회사명: {name}</div>
      <div>설명: {desctiption}</div>
      <div>회사 전경</div>
      {/* <Image src={image} alt="회사이미지" /> */}
    </div>
  );
};

export default AboutPage;

//이미지 불러오는거 오류
