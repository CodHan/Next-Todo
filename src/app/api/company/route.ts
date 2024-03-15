//서버 요청을 여기다 날리면 여기서 json서버에 맞게 또 날리고
//그 값을 리턴 해준다.

import axios from 'axios';

export async function GET() {
  try {
    const res = await axios.get('http://localhost:4000/companyInfo');
    const data = res.data;
    return Response.json(data);
  } catch (error) {
    throw new Error('Server Error');
  }
}
