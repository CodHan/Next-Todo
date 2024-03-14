//서버 요청을 여기다 날리면 여기서 json서버에 맞게 또 날리고
//그 값을 리턴 해준다.

export async function GET(request: Request) {
  const res = await fetch('http://localhost:4000/companyInfo');
  const data = await res.json();

  if (!data) {
    return new Response('companyInfo is not found', {
      status: 404,
    });
  }

  return Response.json({
    data,
  });
}
