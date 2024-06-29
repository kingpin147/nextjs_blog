import { defineField, defineType, type SchemaTypeDefinition } from 'sanity';

export const blog = defineType({
  name: 'blog',
  title: 'Blog',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title of blog article',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug of blog article',
      options:{
        source: 'title'
      }
    }),
    defineField({
      name: 'titleImage',
      type: 'image',
      title: 'Title image',
    }),
    defineField({
      name: 'smalldescription',
      type: 'string',
      title: 'Short description',
      description: 'Short description of blog article',
    }),
    defineField({
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [
        {
          type: 'block',
        },
      ],
    }),
  ],
});

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blog],
};
