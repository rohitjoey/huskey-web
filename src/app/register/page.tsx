import RegisterForm from "@/components/ui/RegisterForm";

const Page = async () => {
  const res = await fetch("https://api.first.org/data/v1/countries");
  const data = await res.json();
  const countries = Object.values(data.data).map(
    (country: any) => country.country
  );

  return (
    <div className="flex justify-center min-h-screen">
      <div className="flex flex-col w-1/3">
        <RegisterForm countries={countries} />;
      </div>
    </div>
  );
};

export default Page;
