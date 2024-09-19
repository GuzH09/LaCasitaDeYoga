import { defineCollection, z } from 'astro:content';

const aboutusCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    about: z.array(
      z.object({
        name: z.string(), 
        role: z.string(),
        certifications: z.array(z.string()),
        imageAlt: z.string(),
        imageSrc: image()
      })
    )
  })
});

const mediaCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    media: z.array(
      z.object({
        title: z.string(), 
        summary: z.string(),
        imageAlt: z.string(),
        imageSrc: image()
      })
    )
  })
});

const classesCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    classes: z.array(
      z.object({
        title: z.string(), 
        summary: z.string(),
        logoAlt: z.string(),
        logoSrc: image(),
        descriptions: z.array(z.string()),
        link: z.string(),
        imageAlt: z.string(),
        imageSrc: image()
      })
    )
  })
});

const homeCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    classes: z.array(
      z.object({
        title: z.string(), 
        alt: z.string(), 
        description: z.string(), 
        link: z.string(),
        src: image()
      })
    )
  })
});

export const collections = {
  'home': homeCollection,
  'classes': classesCollection,
  'media': mediaCollection,
  'aboutus': aboutusCollection
};