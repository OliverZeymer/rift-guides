export async function GET() {
  try {
    const data = await fetch(`${process.env.NEXT_PUBLIC_ASSET_API_URL}/data/en_US/champion.json`);
    return new Response(JSON.stringify(await data.json()), { status: 200 });
  } catch (error) {
    return new Response(error.message || error.toString(), { status: 500 });
  }
}
