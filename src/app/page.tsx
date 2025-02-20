import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center min-h-screen">
      <div className="flex flex-col w-1/3 ">
        <div className="mt-4">Navbar</div>
        <div className="flex-1">
          <div className=" flex flex-col mt-12 items-center justify-center">
            <Image
              src="/new_huskey.png"
              alt="huskey-logo"
              width={120}
              height={120}
              quality={100}
            />
            <Image
              className="mt-12 mb-12"
              src="/home-learn.png"
              alt="home-learn"
              width={240}
              height={240}
              quality={100}
            />
            <p className="mt-2 text-lg text-gray-900 sm:text-2xl text-center">
              Start learning various nepali languages{" "}
            </p>
            <p className="text-lg text-orange-600 sm:text-2xl">for FREE</p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-end p-4 gap-3 mb-6">
          <Link
            className={cn(
              buttonVariants({ variant: "default" }), // Keep default button styles
              "bg-orange-500 w-2/3 h-12 text-sm md:text-lg sm:text-md hover:bg-orange-700 shadow-md shadow-orange-800 rounded-xl mb-2"
            )}
            href={"/register"}
          >
            Sign up for free
          </Link>
          <Button className="bg-white text-gray-700 w-2/3 h-12 text-sm md:text-lg sm:text-md border-2 border-gray-400 hover:bg-gray-400 hover:text-white hover:border-0 shadow-md shadow-gray-600 rounded-xl">
            <Image
              src="/google-icon.png"
              alt="Google"
              width={32}
              height={32}
              className="mr-2"
            />
            Continue with Google
          </Button>
          <h2 className="mt-7">
            Already a member?{" "}
            <Button
              variant="link"
              className="p-0 text-orange-500 text-md font-medium"
            >
              Log in
            </Button>
          </h2>
        </div>
      </div>
    </div>
  );
}
