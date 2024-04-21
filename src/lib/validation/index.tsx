import * as z from "zod";

const customErrorMap: z.ZodErrorMap = (issue, ctx) => {
  const errorStyle = {
    color: "red", // Set the desired color for the error messages
  };

  if (issue.code === z.ZodIssueCode.invalid_type) {
    if (issue.expected === "string") {
      return { message: "bad type!", ...errorStyle };
    }
  }
  if (issue.code === z.ZodIssueCode.custom) {
    return { message: `less-than-${(issue.params || {}).minimum}`, ...errorStyle };
  }
  return { message: ctx.defaultError, ...errorStyle };
};

z.setErrorMap(customErrorMap);

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
      message: "Password should not be commonly used passwords (e.g:123456)",
    }),
});


export const SigninFormValidation = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" })
    .refine((value) => !commonPasswords.includes(value), {
      message: "Password should not be commonly used passwords (e.g:123456)",
    }),
});





export const postFormValidation = z.object({
 caption: z.string().min(5).max(2200),
 file: z.custom<File[]>(),
 location: z.string().min(2).max(100).optional(),
 tags: z.string(),
});