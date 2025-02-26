"use client";

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    Eye,
    EyeOff,
    Lock,
    Mail
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const Page = ({ countries }: { countries: string[] }) => {
  const [showPassword, setShowPassword] = useState(false);
  const formSchema = z.object({
   
    email: z
      .string()
      .nonempty("Email cannot be empty")
      .email("Email should be of type email"),
    password: z.string().nonempty("Password cannot be empty"),
    
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <div className="flex justify-center min-h-screen">
      <div className="flex flex-col w-1/3">
        <div className="flex flex-col items-center mt-14 border-orange-500 border-2 rounded-lg p-6 shadow-2xl">
          <Link href="/">
            <Image
              src="/new_huskey.png"
              alt="huskey-logo"
              width={120}
              height={120}
              quality={100}
            />
          </Link>
          <h2 className="text-2xl font-medium text-center text-gray-800 mt-2">
            Log in to Huskey
          </h2>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="mt-4 w-full px-2"
            >
              {/* email */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="flex flex-col mb-4">
                    <FormLabel className="text-orange-600 text-xl -mb-1.5">
                      Email
                    </FormLabel>

                    <div className="relative">
                      <Mail className="absolute left-3 top-4 text-gray-400 h-4 w-4" />
                      <FormControl>
                        <input
                          placeholder="Enter your email address"
                          {...field}
                          className="w-full h-12 pl-10 p-4 rounded-md border focus:outline-none focus:ring-1 focus:ring-orange-500"
                        />
                      </FormControl>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* password */}
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className="flex flex-col mb-4">
                    <FormLabel className="text-orange-600 text-xl -mb-1.5">
                      Password
                    </FormLabel>

                    <div className="relative">
                      <Lock className="absolute left-3 top-4 text-gray-400 h-4 w-4" />
                      <FormControl>
                        <input
                          type={showPassword ? "text" : "password"}
                          placeholder="Enter password"
                          {...field}
                          className="w-full h-12 pl-10 p-4 rounded-md border focus:outline-none focus:ring-1 focus:ring-orange-500"
                        />
                      </FormControl>
                      <span
                        className="absolute right-3 top-3 cursor-pointer"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <EyeOff /> : <Eye />}
                      </span>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="bg-orange-500 w-1/3 h-10 text-sm md:text-lg sm:text-md hover:bg-orange-700 shadow-md shadow-orange-800 rounded-xl mb-2 mt-4"
              >
                Submit
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Page;
