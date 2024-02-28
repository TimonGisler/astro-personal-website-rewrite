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

const projekte = defineCollection({
    type: 'content', 
    schema: z.object({ 
        card_image_url: z.string(),
        card_image_alt: z.string(), 
        title: z.string(),
        tags: z.string(),
        demo_link: z.string().nullable(),
        github_link: z.string(),
    }),
})

// export the collections --> so we can use them in our astro files (type safe)
export const collections = { lebenslauf, projekte }; 

// alternative syntax to export collections:
// export const collections = {
//     'blog': blogCollection, <-- every content file in the blog folder needs to follow the schema defined in the blogCollection
//   };
