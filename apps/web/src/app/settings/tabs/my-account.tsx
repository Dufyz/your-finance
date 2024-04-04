import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import ChangeEmail from "../components/payment-method/change-email";
import ChangeName from "../components/payment-method/change-name";
import ChangePassword from "../components/payment-method/change-password";
import Change2FA from "../components/payment-method/change-2fa";
import DeleteAccount from "../components/payment-method/delete-account";
import ChangeAppearance from "../components/payment-method/change-apperance";
import ChangeLanguage from "../components/payment-method/change-language";

const MyAccount = () => {

    return (
      <main className="w-full flex flex-col items-center justify-start gap-16">
        <section className="w-full">
        <h1 className="text-bold text-2xl text-black">Info</h1>
        <Separator className="my-4"/>
        <div className="flex flex-col items-start justify-center gap-8">
        <div className="w-full flex items-center justify-between">
          <div>
          <h3 className="font-bold">Name</h3>
          <span className="text-muted-foreground">Guilherme Thomaz</span>
          </div>  
          <div>
            <ChangeName />
          </div>
        </div>
        <div className="w-full flex items-center justify-between">
          <div>
          <h3 className="font-bold">Email</h3>
          <span className="text-muted-foreground">guilherme@your-finance.com</span>
          </div>
          <div>
            <ChangeEmail/>
          </div>
        </div>
        <div className="w-full flex items-center justify-between">
          <div>
          <h3 className="font-bold">Password</h3>
          <p className="text-muted-foreground">Reset password to login to your account</p>
          </div>
          <div>
            <ChangePassword/>
          </div>
        </div>
                </div>
      </section>

      <section className="w-full">
       <h1 className="text-bold text-2xl text-black">Security</h1>
       <Separator className="my-4"/>
       <div className="flex flex-col items-start justify-center gap-8">
       <div className="w-full flex items-center justify-between">
         <div>
         <h3 className="font-bold">2-set verification</h3>
         <span className="max-w-2xl text-start flex text-wrap text-muted-foreground">Add an aditional layer of security to your account.</span>
         </div>
         <div>
          <Change2FA />
         </div>
       </div>
      
               </div>
     </section>

       <section className="w-full">
       <h1 className="text-bold text-2xl text-black">Settings</h1>
       <Separator className="my-4"/>
       <div className="flex flex-col items-start justify-center gap-8">
       <div className="w-full flex items-center justify-between">
         <div>
         <h3 className="font-bold">Country</h3>
         <span className="text-muted-foreground">Brazil</span>
         </div>
         <div>
           <button className="bg-gray-800  hover:bg-gray-900  text-white  text-sm p-2 rounded-md">Change country</button>
         </div>
       </div>
       <div className="w-full flex items-center justify-between">
         <div>
         <h3 className="font-bold">Currency</h3>
         <span className="text-muted-foreground">GBP (£)</span>
         </div>
         <div>
           <button className="bg-gray-800  hover:bg-gray-900  text-white  text-sm p-2 rounded-md">Change currency</button>
         </div>
       </div>
       <div className="w-full flex items-center justify-between">
         <div>
         <h3 className="font-bold">Languange</h3>
         <p className="text-muted-foreground">English</p>
         </div>
         <div>
           <ChangeLanguage/>
         </div>
       </div>
       <div className="w-full flex items-center justify-between">
         <div>
         <h3 className="font-bold">Time zone</h3>
         <p className="text-muted-foreground">(GMT-03:00) America/Sao_Paulo (GMT-3)</p>
         </div>
         <div>
           <button className="bg-gray-800  hover:bg-gray-900  text-white  text-sm p-2 rounded-md">Change timezone</button>
         </div>
       </div>
       <div className="w-full flex items-center justify-between">
         <div>
         <h3 className="font-bold">Appearance</h3>
         <span className="text-muted-foreground">Switch between dark mode and light mode</span>
         </div>
         <div>
          <ChangeAppearance />
         </div>
       </div>
               </div>
     </section>

   

     <section className="w-full">
       <h1 className="text-bold text-2xl text-black">Danger Zone</h1>
       <Separator className="my-4"/>
       <div className="flex flex-col items-start justify-center gap-8">
       <div className="w-full flex items-center justify-between">
         <div>
         <h3 className="font-bold">Delete account</h3>
         <span className="max-w-2xl text-start flex text-wrap text-muted-foreground">Your account will be deleted. You will have 30 days to recover it; after that, the account will be permanently deleted.</span>
         </div>
         <div>
           <DeleteAccount />
         </div>
       </div>
               </div>
     </section>

      </main>
    )
  }

  export default MyAccount;