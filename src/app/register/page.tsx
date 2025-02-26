import { Button } from "@/components/ui/button";
import RegisterForm from "@/components/ui/RegisterForm";
import Link from "next/link";

const Page = async () => {
  const res = await fetch("https://api.first.org/data/v1/countries");
  const data = await res.json();
  const countries = Object.values(data.data).map(
    (country: any) => country.country
  );

  return (
    <div className="flex justify-center min-h-screen">
      <div className="flex flex-col w-1/3">
        <RegisterForm countries={countries} />
        <h2 className="mt-7">
            Already a member?{" "}
            <Button
              variant="link"
              asChild
              className="p-0 text-orange-500 text-md font-medium"
            >
              <Link href="/login">Login</Link>
            </Button>
          </h2>
      </div>
    </div>
  );
};

export default Page;
