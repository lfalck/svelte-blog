
import type { D1Response } from "$lib/d1Response";
import { error } from '@sveltejs/kit';
export const ssr = false;
export async function load(event): Promise<CatFacts> {
  //throw error(400, "inte bra")
    let response = await event.fetch("https://cat-fact.herokuapp.com/facts/");

    let facts = await response.json() as CatFact[];
    return {
        catFacts: facts
    };
}

interface CatFacts {
    catFacts: CatFact[]
}

interface CatFact {
    status: Status;
    _id: string;
    user: string;
    text: string;
    __v: number;
    source: string;
    updatedAt: Date;
    type: string;
    createdAt: Date;
    deleted: boolean;
    used: boolean;
}

interface Status {
    verified: boolean;
    sentCount: number;
}
