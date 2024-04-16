import * as z from "zod";

const commonPasswords = [
  // Add commonly used passwords here
  "password",
  "12345678",
  // ...
];

export const SignupFormValidation = z.object({
  name: z.string().min(2, { message: "Name too short" }),
  username: z.string().min(2, { message: "Username too short" }),
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" })
    .refine((value) => !commonPasswords.includes(value), {
      message: "Password should not be commonly used passwords(e.g:123456)",
    }),
  // confirmPassword: z.string().min(8, {message: "Password does not match"})
});


export const SigninFormValidation = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" })
    .refine((value) => !commonPasswords.includes(value), {
      message: "Password should not be commonly used passwords(e.g:123456)",
    }),
});