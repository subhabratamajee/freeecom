// import sanityClient from '@sanity/client'
// import imageBuilder from '@image-builder';

// export const client = sanityClient({
//     projectId:process.env.PROJECT_ID,
//     dataset:'production',
//     apiVersion: '2022-09-29',
//     useCdn: true,
//     token: process.env.NEXT_SANITY_TOKEN,
// });
// const builder = imageBuilder(client);
// export const urlFor=(source)=>builder.image(source);


import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: '33arqb3o',// ADD YOUR PROJECT ID INTO .env file aswell
    dataset: 'production',
    apiVersion:'2022-02-01', // CHG API VERSION TO AVOID BREAKING
    useCdn: true,
    token: process.env.NEXT_SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);