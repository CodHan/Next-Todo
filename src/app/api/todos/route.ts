//서버 요청을 여기다 날리면 여기서 json서버에 맞게 또 날리고
//그 값을 리턴 해준다.

//GET요청
export async function GET(request: Request) {
  const res = await fetch('http://localhost:4000/todos');
  const todos = await res.json();

  if (!todos) {
    return new Response('todos is not found', {
      status: 404,
    });
  }

  return Response.json({
    todos,
  });
}

//추가요청
export async function POST(request: Request) {
  const { title, contents }: { title: string; contents: string } =
    await request.json();

  const res = await fetch('http://localhost:4000/todos', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title, contents, isDone: false }),
  });

  const todo = await res.json();

  return Response.json({
    todo,
  });
}

//수정요청
export async function PATCH(request: Request) {
  const { id, isDone } = await request.json();

  const res = await fetch(`http://localhost:4000/todos/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ isDone }),
  });
  const updateTodo = await res.json();

  return new Response(JSON.stringify(updateTodo), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}

//삭제요청
export async function DELETE(request: Request) {
  const { id } = await request.json();

  await fetch(`http://localhost:4000/todos/${id}`, {
    method: 'DELETE',
  });
  return new Response(null, { status: 204 });
}
