import {z} from 'zod';

export const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional().or(z.literal('')),
  company: z.string().min(1),
  service: z.string().min(1),
  message: z.string().min(5)
});

export const newsletterSchema = z.object({
  email: z.string().email()
});

export const leadSchema = z.object({
  email: z.string().email(),
  tool: z.string().min(1),
  payload: z.record(z.string(), z.unknown()).optional()
});

export type ContactInput = z.infer<typeof contactSchema>;
export type NewsletterInput = z.infer<typeof newsletterSchema>;
export type LeadInput = z.infer<typeof leadSchema>;
