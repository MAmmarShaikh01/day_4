import { Rule } from '@sanity/types';

export default {
  name: 'message',
  title: 'Message',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule: Rule) => Rule.required().error('A name is required.'),
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule: Rule) =>
        Rule.required()
          .regex(/\S+@\S+\.\S+/, {
            name: 'email', // Must be a valid email address
            invert: false,
          })
          .error('A valid email is required.'),
    },
    {
      name: 'message',
      title: 'Message',
      type: 'text',
      description: 'The message content',
      validation: (Rule: Rule) => Rule.required().error('A message is required.'),
    },
    {
      name: 'createdAt',
      title: 'Created At',
      type: 'datetime',
      options: {
        dateFormat: 'YYYY-MM-DD',
        timeFormat: 'HH:mm',
        calendarTodayLabel: 'Today',
      },
      initialValue: () => new Date().toISOString(),
      // validation: (Rule: Rule) => Rule.required(),
    },
  ],
};
