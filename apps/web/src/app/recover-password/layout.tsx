import Link from "next/link";

export default function RecoverPasswordLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-bg-primary flex h-screen w-full flex-col items-center justify-center gap-8">
      <div className="flex w-full max-w-sm flex-col items-center justify-center">
        <div className="flex w-full flex-col items-center justify-center gap-12 p-8">
          <div className="flex w-full flex-col items-center justify-center gap-4">
            <h1 className="text-3xl font-bold text-green-700 sm:text-4xl">
              YourFinance
            </h1>
          </div>
          <div className="flex w-full flex-col items-start justify-center gap-6">
            <div className="flex w-full flex-col items-start justify-center gap-6">
              {children}
              <div className="flex w-full cursor-pointer items-center justify-center px-8 text-base font-semibold">
                <Link href="/login" className="text-green-700 no-underline">
                  Back to login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
