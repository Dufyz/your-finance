import { Separator } from "@/components/ui/separator";
import ChangeEmail from "./change-email";
import ChangeName from "./change-name";
import ChangePassword from "./change-password";
import Change2FA from "./change-2fa";
import DeleteAccount from "./delete-account";
import ChangeTheme from "./change-theme";
import ChangeLanguage from "./change-language";
import ChangeCountry from "./change-country";
import ChangeCurrency from "./change-currency";
import getUser from "@/fetchers/user/getUser";
import { currencys } from "@/data/currencys";

export default async function MyAccount() {
  //TODO Implementar features comentadas

  const user = await getUser();

  const userCurrency = currencys.find(
    (currency) => currency.cc === user.currency
  );
  const userCurrencyString = `${userCurrency?.cc} (${userCurrency?.symbol})`;

  return (
    <main className="flex w-full flex-col items-center justify-start gap-16">
      <section className="w-full">
        <h1 className="text-bold text-2xl text-black">Info</h1>
        <Separator className="my-4" />
        <div className="flex flex-col items-start justify-center gap-8">
          <div className="flex w-full items-center justify-between">
            <div>
              <h3 className="font-bold">Name</h3>
              <span className="text-muted-foreground">{user.name}</span>
            </div>
            <div>
              <ChangeName user={user} />
            </div>
          </div>
          <div className="flex w-full items-center justify-between">
            <div>
              <h3 className="font-bold">Email</h3>
              <span className="text-muted-foreground">{user.email}</span>
            </div>
            <div>
              <ChangeEmail user={user} />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full">
        <h1 className="text-bold text-2xl text-black">Security</h1>
        <Separator className="my-4" />
        <div className="flex flex-col items-start justify-center gap-8">
          <div className="flex w-full items-center justify-between">
            <div>
              <h3 className="font-bold">Password</h3>
              <p className="text-muted-foreground">
                Reset password to login to your account
              </p>
            </div>
            <div>
              <ChangePassword user={user} />
            </div>
          </div>
          {/* <div className="flex w-full items-center justify-between">
            <div>
              <h3 className="font-bold">2-set verification</h3>
              <span className="flex max-w-2xl text-wrap text-start text-muted-foreground">
                Add an aditional layer of security to your account.
              </span>
            </div>
            <div>
              <Change2FA />
            </div>
          </div> */}
        </div>
      </section>

      <section className="w-full">
        <h1 className="text-bold text-2xl text-black">Settings</h1>
        <Separator className="my-4" />
        <div className="flex flex-col items-start justify-center gap-8">
          <div className="flex w-full items-center justify-between">
            <div>
              <h3 className="font-bold">Currency</h3>
              <span className="text-muted-foreground">
                {userCurrencyString}
              </span>
            </div>
            <div>
              <ChangeCurrency user={user} />
            </div>
          </div>
          {/* <div className="flex w-full items-center justify-between">
            <div>
              <h3 className="font-bold">Languange</h3>
              <p className="text-muted-foreground">{user.language}</p>
            </div>
            <div>
              <ChangeLanguage />
            </div>
          </div> */}
          <div className="flex w-full items-center justify-between">
            <div>
              <h3 className="font-bold">Appearence theme</h3>
              <span className="text-muted-foreground">
                Switch between light mode and dark mode
              </span>
            </div>
            <div>
              <ChangeTheme />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full">
        <h1 className="text-bold text-2xl text-black">Danger Zone</h1>
        <Separator className="my-4" />
        <div className="flex flex-col items-start justify-center gap-8">
          <div className="flex w-full items-center justify-between">
            <div>
              <h3 className="font-bold">Delete account</h3>
              <span className="text-muted-foreground flex max-w-2xl text-wrap text-start">
                Your account will be deleted.
              </span>
            </div>
            <div>
              <DeleteAccount user={user} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
