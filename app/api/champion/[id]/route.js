export async function GET(request, { params }) {
  console.log(params);
  try {
    const data = await fetch(`${process.env.NEXT_PUBLIC_DATA_API_URL}/data/en_US/champion/${params.id}.json`);
    return new Response(JSON.stringify(await data.json()), { status: 200 });
  } catch (error) {
    return new Response(error.message || error.toString(), { status: 500 });
  }
}
