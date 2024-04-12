import { FormControl, FormDescription, Form, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form"
import { Button } from '@/components/ui/button'
import { zodResolver } from "@hookform/resolvers/zod"
import { SignupFormValidation } from "@/lib/validation"
import { z } from "zod"


"use client"




const SignupForm = () => {
  // Define form.
  const form = useForm<z.infer<typeof SignupFormValidation>>({
    resolver: zodResolver(SignupFormValidation),
    defaultValues: {
      // ✅ This will be validated and type-safe
      name: "",
      username: "",
      password: "",
      email: "",

    },
  })

  // Define a submit handler.
  function onSubmit(values: z.infer<typeof SignupFormValidation>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }
  return (
    <>
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">

        <div className="sm:w-420 flex-center flex-col">
          <img src="/assets/images/logo.svg" className="mx-auto" alt="Logo" />
        </div>
        
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
    </>
  )
}

export default SignupForm