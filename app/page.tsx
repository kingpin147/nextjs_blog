'use client'
// Import necessary components and functions
import { Card, CardContent } from "@/components/ui/card";
import { simpleBlogCard } from "./lib/interface";
import client, { urlForImage } from "./lib/sanity";
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import Link from "next/link";

// Function to fetch data from Sanity
async function getData() {
  const query = `
    *[_type=='blog'] | order(_createdAt desc){
      title,
      smalldescription,
      "currentslug": slug.current,
      titleImage
    }
  `;
  const data = await client.fetch(query);
  return data;
}

// Next.js page component
// eslint-disable-next-line @next/next/no-async-client-component
export default async function Home() {
  // Fetch data on component mount
  const data: simpleBlogCard[] = await getData();
  console.log(data);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 ">
      {/* Map over fetched data and render each blog post */}
      {data.map((post, idx) => (
        <Card key={idx}>
          <Image
            src={urlForImage(post.titleImage).url()}
            alt="image"
            width={300}
            height={300}
            className="rounded-t-lg h-[300px] object-cover"
          />
          <CardContent className="mt-5">
            <h3 className="text-lg line-clamp-2 font-bold">{post.title}</h3>
            <p className="line-clamp-3 text-sm mt-2 text-gray-600 dark:text-gray-300">
              {post.smalldescription}
            </p>
            <Button asChild className="w-full mt-7">
              {/* Corrected string interpolation for href */}
              <Link href={`/blog/${post.currentslug}`}>Read More</Link>
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
