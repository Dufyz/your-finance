import { Separator } from "@/components/ui/separator";
import ChangeEmail from "./change-email";
import ChangeName from "./change-name";
import ChangePassword from "./change-password";
import Change2FA from "./change-2fa";
import DeleteAccount from "./delete-account";
import ChangeAppearance from "./change-apperance";
import ChangeLanguage from "./change-language";
import ChangeCountry from "./change-country";
import ChangeCurrency from "./change-currency";
import getUser from "@/fetchs/user/getUser";


export default async function MyAccount() {
  //TODO Implementar features comentadas

  const user = await getUser()


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
              <ChangeName userData={user} />
            </div>
          </div>
          <div className="flex w-full items-center justify-between">
            <div>
              <h3 className="font-bold">Email</h3>
              <span className="text-muted-foreground">
                {user.email}
              </span>
            </div>
            <div>
              <ChangeEmail />
            </div>
          </div>

          {/* <div>
            <div>
              <label htmlFor="">Nome</label>
              <input type="text" />
            </div>

            <div>
              <label htmlFor="">email</label>
              <input type="text" />
            </div>
          </div>
          <div>
            <button>Submit</button>
          </div> */}

          <div className="flex w-full items-center justify-between">
            <div>
              <h3 className="font-bold">Password</h3>
              <p className="text-muted-foreground">
                Reset password to login to your account
              </p>
            </div>
            <div>
              <ChangePassword />
            </div>
          </div>
        </div>
      </section>

      {/* <section className="w-full">
        <h1 className="text-bold text-2xl text-black">Security</h1>
        <Separator className="my-4" />
        <div className="flex flex-col items-start justify-center gap-8">
          <div className="flex w-full items-center justify-between">
            <div>
              <h3 className="font-bold">2-set verification</h3>
              <span className="flex max-w-2xl text-wrap text-start text-muted-foreground">
                Add an aditional layer of security to your account.
              </span>
            </div>
            <div>
              <Change2FA />
            </div>
          </div>
        </div>
      </section> */}

      <section className="w-full">
        <h1 className="text-bold text-2xl text-black">Settings</h1>
        <Separator className="my-4" />
        <div className="flex flex-col items-start justify-center gap-8">
          {/* <div className="flex w-full items-center justify-between">
            <div>
              <h3 className="font-bold">Country</h3>
              <span className="text-muted-foreground">{user.country}</span>
            </div>
            <div>
              <ChangeCountry />
            </div>
          </div> */}
          <div className="flex w-full items-center justify-between">
            <div>
              <h3 className="font-bold">Currency</h3>
              <span className="text-muted-foreground">{user.currency}</span>
            </div>
            <div>
              <ChangeCurrency />
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
              <h3 className="font-bold">Time zone</h3>
              <p className="text-muted-foreground">
                {user.time_zone}
              </p>
            </div>
            {/* <div>
              <button className="rounded-md  bg-gray-800  p-2  text-sm text-white hover:bg-gray-900">
                Change timezone
              </button>
            </div> */}
          </div>
          <div className="flex w-full items-center justify-between">
            <div>
              <h3 className="font-bold">Appearance</h3>
              <span className="text-muted-foreground">
                Switch between dark mode and light mode
              </span>
            </div>
            <div>
              <ChangeAppearance />
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
              <span className="flex max-w-2xl text-wrap text-start text-muted-foreground">
                Your account will be deleted. You will have 30 days to recover
                it; after that, the account will be permanently deleted.
              </span>
            </div>
            <div>
              <DeleteAccount />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
