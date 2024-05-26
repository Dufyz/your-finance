import { Skeleton } from "@/components/ui/skeleton";
import LeftNavbarLayout from "@/layout/left-navbar-layout";

export default function LoadingSupport() {
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
        <div className="mx-auto w-full max-w-xl">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label
                htmlFor="last-name"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Name
              </label>
              <div className="mt-2.5">
                <Skeleton className="h-10 w-full" />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Email
              </label>

              <div className="mt-2.5">
                <Skeleton className="h-10 w-full" />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="category"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Reason for contact
              </label>

              <Skeleton className="h-10 w-full" />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Message
              </label>

              <div className="mt-2.5">
                <Skeleton className="h-40 w-full" />
              </div>
            </div>
            <div className="flex flex-col items-start justify-center gap-2 sm:col-span-2">
              <div className="flex items-center justify-center gap-x-4 sm:col-span-2">
                <Skeleton className="h-10 w-36" />
                <p>
                  By selecting this, you agree to our{" "}
                  <a href="#" className="font-semibold text-green-700">
                    privacy&nbsp;policy
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <button
              type="submit"
              disabled
              className="block w-full rounded-md bg-green-700 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </LeftNavbarLayout>
  );
}
