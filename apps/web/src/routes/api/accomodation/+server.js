/** @type {import('./$types').RequestHandler} */
export function GET({ url }) {
    
    console.log("URL: ", url);

    return new Response(String(random));
}