import sanityClient from "@sanity/client";
import imageUrlBuilder from '@sanity/image-url'
import { NEXT_PUBLIC_SANITY_TOKEN } from "no-commit";

export const client = sanityClient({
  projectId: 'fdm6v40h',
  dataset:'production',
  apiVersion: '2022-07-26',
  useCdn: true,
  token: process.env.NODE_ENV === 'development' ? NEXT_PUBLIC_SANITY_TOKEN : process.env.NEXT_PUBLIC_SANITY_TOKEN,
  ignoreBrowserTokenWarning: true
})

const builder = imageUrlBuilder(client)

export const urlFor= (src) => builder.image(src)