import { z } from 'zod';

export const usernameValidation = z
  .string()
  .min(2, 'Username must be at least 2 characters')
  .max(20, 'Username cannot be more than 20 characters');

export const signUpSchema = z.object({
  username: usernameValidation,
  email: z.string().email({ message: 'Invlaid email address' }),
  password: z
    .string()
    .min(6, { message: 'password must be at least 6 characters long' }),
});
