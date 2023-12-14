import type { RequestHandler } from "@sveltejs/kit";

export async function GET({ request, platform }) {
  // Matches the "DB" binding you create: make sure the names match!
  let result = await platform?.env.cf_pages_d1.prepare(
    "SELECT * FROM Persons LIMIT 5"
  ).run();
  return new Response("sverk"+JSON.stringify(result));
}