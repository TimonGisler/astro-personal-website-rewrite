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

const portfolio = defineCollection({
    type: 'data', 
    schema: z.object({ 
        infoAboutMe: z.object({
            profile: z.array(z.object({
                infoName: z.string(),
                value: z.string(),
            })),
            aboutMeText: z.string(),
            profilePictureUrl: z.string(),
        }),
        contacts: z.array(z.object({
            name: z.string(),
            value: z.string(),
            card_link: z.string(),
            image_url: z.string(),
            alt_image_description: z.string(),
        })),
        education: z.array(z.object({
            time: z.string(),
            what_i_did: z.string(),
            text: z.string().optional(),
        })),

    }),
})

const projects = defineCollection({
    type: 'content', 
    schema: z.object({ 
        creation_date: z.date(),
        title: z.string(),
        card_image_url: z.string(),
        card_image_alt: z.string(), 
        tags: z.string(),
        demo_link: z.string().nullable(),
        github_link: z.string(),
    }),
})



// export the collections --> so we can use them in our astro files (type safe)
export const collections = { lebenslauf, projects, portfolio }; 

// alternative syntax to export collections:
// export const collections = {
//     'blog': blogCollection, <-- every content file in the blog folder needs to follow the schema defined in the blogCollection
//   };
