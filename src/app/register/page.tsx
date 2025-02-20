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
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    Earth,
    Eye,
    EyeOff,
    Lock,
    Mail,
    User,
    VenusAndMars,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const Page = () => {
  const [showPassword, setShowPassword] = useState(false);
  const formSchema = z.object({
    fullName: z
      .string()
      .min(2, { message: "Name cannot be empty" })
      .max(50, "Name too long"),
    email: z
      .string()
      .nonempty("Email cannot be empty")
      .email("Email should be of type email"),
    password: z.string().nonempty("Password cannot be empty"),
    gender: z.enum(["Male", "Female", "Other"], {
      message: "Please select a gender",
    }),
    nationality: z.string().nonempty("Please select a nationality"),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      gender: undefined,
      nationality: "",
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
          <Image
            src="/new_huskey.png"
            alt="huskey-logo"
            width={120}
            height={120}
            quality={100}
          />
          <h2 className="text-2xl font-medium text-center text-gray-800 mt-2">
            Create an Account with huskey
          </h2>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="mt-4 w-full px-2"
            >
              {/* fullname */}
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem className="flex flex-col mb-4">
                    <FormLabel className="text-orange-600 text-xl -mb-1.5">
                      Name
                    </FormLabel>

                    <div className="relative">
                      <User className="absolute left-3 top-4 text-gray-400 h-4 w-4" />
                      <FormControl>
                        <input
                          placeholder="Enter your full name"
                          {...field}
                          className="w-full h-12 pl-10 p-4 rounded-md border focus:outline-none focus:ring-1 focus:ring-orange-500"
                        />
                      </FormControl>
                    </div>

                    <FormMessage />
                  </FormItem>
                )}
              />
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
              {/* gender and nationality */}
              <div className="flex justify-between gap-6">
                {/* gender */}
                <FormField
                  control={form.control}
                  name="gender"
                  render={({ field }) => (
                    <FormItem className="flex flex-col mb-4">
                      <FormLabel className="text-orange-600 text-xl -mb-1.5">
                        Gender
                      </FormLabel>

                      <Select onValueChange={field.onChange}>
                        <FormControl>
                          <SelectTrigger className="bg-white w-32 h-10 pl-10 p-4 rounded-md border text-gray-400 text-md focus:ring-orange-500">
                            <VenusAndMars className="text-gray-400 h-4 w-4 -ml-2" />
                            <SelectValue placeholder="Gender" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Male">Male</SelectItem>
                          <SelectItem value="Female">Female</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* nationality */}
                <FormField
                  control={form.control}
                  name="nationality"
                  render={({ field }) => (
                    <FormItem className="flex flex-col mb-4 w-full">
                      <FormLabel className="text-orange-600 text-xl -mb-1.5">
                        Nationality
                      </FormLabel>

                      <Select onValueChange={field.onChange}>
                        <FormControl>
                          <SelectTrigger className="bg-white w-32 h-10 pl-10 p-4 rounded-md border text-gray-400 text-md focus:ring-orange-500 w-full">
                            <Earth className="text-gray-400 h-4 w-4 -ml-2" />
                            <SelectValue placeholder="Nationality" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Nepal">Nepal</SelectItem>
                          <SelectItem value="Korea">Korea</SelectItem>
                          <SelectItem value="What">What</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
               {/* dateOfBirth */}
               <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="flex flex-col mb-4">
                    <FormLabel className="text-orange-600 text-xl -mb-1.5">
                      Date of Birth
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
              <Button type="submit">Submit</Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Page;
