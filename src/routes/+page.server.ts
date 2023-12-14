
import type { D1Response } from "$lib/d1Response";

export async function load(event) : Promise<D1Response<Person>> {
    let response = await event.platform?.env.cf_pages_d1.prepare(
        "SELECT * FROM Persons LIMIT 5"
      ).run();
    return response;
}

interface Person {
    id:        number;
    firstname: string;
    lastname:  string;
}
