import getUser from "@/fetchers/user/getUser";
import LeftNavbarLayout from "@/layout/left-navbar-layout";
import SupportForm from "./components/support";

export default async function SupportPage() {
  const user = await getUser();

  return (
    <LeftNavbarLayout>
      <div className="flex w-full flex-col items-start justify-start gap-12">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-green-700 sm:text-4xl">
            Support contact
          </h1>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Fill out the form below and we'll get back to you as soon as
            possible.
          </p>
        </div>
        <SupportForm user={user} />
      </div>
    </LeftNavbarLayout>
  );
}
