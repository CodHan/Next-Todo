//서버 요청을 여기다 날리면 여기서 json서버에 맞게 또 날리고
//그 값을 리턴 해준다.

import axios from 'axios';

const SERVER_URL = 'http://localhost:4000/todos';
//GET요청
export async function GET() {
  try {
    const res = await axios.get(SERVER_URL);
    const todos = await res.data;

    if (!todos) {
      return new Response('todos is not found', {
        status: 404,
      });
    }
    return Response.json(todos);
  } catch (error) {
    throw new Error('Server Error');
  }
}

//추가요청
// payload형태로 받으면 안됨, request로 받아서 json으로 꼭 바꿔야 하는지
// request의 형태가 뭔지 궁금함.
export async function POST(request: Request) {
  try {
    const { title, contents }: { title: string; contents: string } =
      await request.json();

    const req = await axios.post(SERVER_URL, {
      title,
      contents,
      isDone: false,
    });
    const res = await req.data;

    return Response.json(res);
  } catch (error) {
    console.error(error);
  }
}

//수정요청
export async function PATCH(request: Request) {
  try {
    const { id, isDone } = await request.json();
    const req = await axios.patch(`${SERVER_URL}/${id}`, {
      isDone: isDone,
    });
    const res = await req.data;
    return Response.json(res);
  } catch (error) {
    console.error(error);
  }
}

//삭제요청
export async function DELETE(request: Request) {
  const { id } = await request.json();
  await axios.delete(`${SERVER_URL}/${id}`);
  return new Response(null, { status: 204 });
}
//mutateFn으론 axios가 안되는건지,
//axios가 delete요청이다보니 애초에 id값을 넣어서 요청 보내야 해서
//오류가 남. DELETE요청을 axios로 할 순 없는건지

//axios#get(url[, config]) get은 되는데 delete는 안됨
//axios#delete(url[, config])
