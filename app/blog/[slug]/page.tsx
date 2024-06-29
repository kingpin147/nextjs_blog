import { fullBlog } from "@/app/lib/interface";
import client from "@/app/lib/sanity";

// Import React and any necessary dependencies
async function getData( slug:string){
    const query = `
    *[_type == blog && sulg.current == '${slug}']{
        "currentSlug": slug.current,
        title,
        content,
        titleImage
    }[0]`;
    const data = await client.fetch(query);
    console.log(data);
    return data
}


export default async function BlogArticle({params}:{params: {slug:string}}){
    const data: fullBlog = await getData(params.slug)
    return <h1>{params.slug}</h1>
}