import { fullBlog } from "@/app/lib/interface";
import client from "@/app/lib/sanity";
import Image from 'next/image';
import { urlForImage } from "@/app/lib/sanity"; // Assuming urlForImage is imported from your sanity lib
import { PortableText } from "next-sanity";

// Function to fetch data from Sanity
async function getData(slug: string) {
    const query = `
    *[_type == "blog" && slug.current == '${slug}']{
        "currentSlug": slug.current,
        title,
        content, 
        titleImage
    }[0]`;
    const data = await client.fetch(query);
    console.log(data);
    return data;
}

export default async function BlogArticle({ params }: { params: { slug: string } }) {
    const data: fullBlog = await getData(params.slug);

    // Check if data is available
    if (!data) {
        return <div>No blog post found</div>;
    }

    return (
        <div className="mt-8">
            <h1>
                <span className="block text-base text-center text-primary font-semibold uppercase">
                    Nouman Blog
                </span>
                <span className="mt-2 block text-3xl text-center leading-8 font-bold tracking-tight sm:text-4xl">
                    {data.title}
                </span>
            </h1>
                <Image
                    src={urlForImage(data.titleImage).url()}
                    width={800}
                    height={800}
                    alt="blog image"
                    priority
                    className="rounded-lg mt-8 border"
                />
                <div className="mt-16 prose prose-blue prose-xl dark:peer-focus-visible:">
                    <PortableText value={data.smalldescription} />
                </div>
            
        </div>
    );
}
