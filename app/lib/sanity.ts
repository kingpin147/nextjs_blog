import { createClient } from 'next-sanity';
import  ImageUrlBuilder  from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

const client = createClient({
  projectId: 'dkf35icl', // your project ID
  dataset: 'production', // your dataset name
  apiVersion: '2021-10-21', // use a UTC date string
  token:process.env.SANITY_AUTH_TOKEN, // use environment variable for security
  useCdn: true, // `false` if you want to ensure fresh data
});

export default client;


// Function to generate image URLs
const imageBuilder = ImageUrlBuilder(client);

// Function to generate image URLs
export function urlForImage(source:any) {
  return imageBuilder.image(source);
}