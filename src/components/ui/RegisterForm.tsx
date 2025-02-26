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
  CalendarIcon,
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
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Calendar } from "./calendar";
import Link from "next/link";

const RegisterForm = ({ countries }: { countries: string[] }) => {
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
    dob: z.date({
      required_error: "A date of birth is required.",
    }),
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
                      <SelectTrigger className="bg-white w-32 h-10 pl-10 p-4 rounded-md border text-md focus:ring-orange-500">
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
                      <SelectTrigger className="bg-white h-10 pl-10 p-4 rounded-md border text-md focus:ring-orange-500 w-full">
                        <Earth className="text-gray-400 h-4 w-4 -ml-2" />
                        <SelectValue placeholder="Nationality" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {countries.map((country) => (
                        <SelectItem key={country} value={country}>
                          {country}
                        </SelectItem>
                      ))}
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
            name="dob"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel className="text-orange-600 text-xl -mb-1.5">
                  Date of birth
                </FormLabel>
                <Popover>
                  <PopoverTrigger
                    asChild
                    className="bg-white h-10 pl-10 p-4 rounded-md border text-md focus:ring-orange-500 w-full"
                  >
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-[240px] pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) =>
                        date > new Date() || date < new Date("1900-01-01")
                      }
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>

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
  );
};

export default RegisterForm;
