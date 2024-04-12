import * as z from "zod"



export const SignupFormValidation = z.object({
    name: z.string().min(2, { message: "Name too short" }),
    username: z.string().min(2, { message: "Username too short" }),
    email: z.string().email({ message: "Invalid email address" }),
    password: z.string().min(8, { message: "Password must be at least 8 characters" }),
    // confirmPassword: z.string().min(8, {message: "Password does not match"})

})