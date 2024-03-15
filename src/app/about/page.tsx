import Image from 'next/image';
import React from 'react';

import api from '@/api';

const AboutPage = async () => {
  const req = await api.get('/company');
  const res = req.data;
  const { name, desctiption, image } = res;
  console.log(res);
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
