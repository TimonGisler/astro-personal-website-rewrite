import { defineCollection, z} from 'astro:content';

const lebenslauf = defineCollection({
    type: 'data', // date = json or yaml type: 'content' = md
    schema: z.object({ // schema is defined with zod (https://zod.dev/)
        img: z.string(),
        Personalien: z.record(z.string()), // requre the field "Personalien" to exist and be a record of strings
        Sprachen: z.record(z.string()),
        'IT-Kentnisse': z.array(z.string()),
        Arbeitserfahrung: z.record(z.string()),
        Ausbildung: z.record(z.string()),
        Hobbys: z.array(z.string()),
    }),
})

// portfolio data
const contacts = defineCollection({
    type: 'data', // date = json or yaml type: 'content' = md
    schema: z.object({ // schema is defined with zod (https://zod.dev/)
        name: z.string(),
        value: z.string(), // requre the field "Personalien" to exist and be a record of strings
        card_link: z.string(),
        image_url: z.string(),
        alt_image_description: z.string(),
    }),
})

// export the collections --> so we can use them in our astro files (type safe)
export const collections = { lebenslauf, contacts }; 

// alternative syntax to export collections:
// export const collections = {
//     'blog': blogCollection, <-- every content file in the blog folder needs to follow the schema defined in the blogCollection
//   };
