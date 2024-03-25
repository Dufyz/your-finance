import useLogin from "../hook/useLogin";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import FormError from "@/components/global/form-error";

interface IForgotPasswordProps {
  setActiveTab: any;
}

const ForgotPasswordSchema = z.object({
  email: z.string().email()
})

type ForgotPasswordSchemaType = z.infer<typeof ForgotPasswordSchema>

const ForgotPassword = ({ setActiveTab }: IForgotPasswordProps) => {
  const {handleForgotPassword} = useLogin();

  const {register, handleSubmit, formState: {errors, isSubmitting}} = useForm<ForgotPasswordSchemaType>({
    resolver: zodResolver(ForgotPasswordSchema),
    defaultValues: {
      email: ""
    }
  })

  return (
    <div className="w-full flex flex-col items-start justify-center gap-6">
      <form 
      onSubmit={handleSubmit(handleForgotPassword)}
       className="w-full flex flex-col items-center justify-center gap-8">
        <div className="w-full flex flex-col items-center justify-center gap-6">
          <div className="w-full flex flex-col items-start justify-center gap-2">
            <label htmlFor="" className="text-gray-800 text-base font-bold">
              Email Adress
            </label>
            {errors.email?.message && (<FormError message={errors.email.message} />)}
            <input
              {...register("email")}
              type="email"
              placeholder="Email"
              className="w-full h-12 py-3 px-4 rounded-[8px] border border-solid border-gray-600"
            />
          </div>
        </div>
        <div className="w-full flex flex-col items-center justify-center gap-8">
          <div className="w-full flex flex-col items-start justify-center gap-6">
            <button type="submit" disabled={isSubmitting} className="w-full bg-primary py-4 px-3 rounded-[8px] text-white font-bold hover:bg-primary-hover" >
              Recover
            </button>
          </div>
        </div>
      </form>

      <div className="w-full text-base font-semibold cursor-pointer flex items-center justify-center px-8">
        <button
          className="text-gray-400"
          onClick={() => setActiveTab("sign-in")}
        >
          Back to login
        </button>
      </div>
    </div>
  );
};

export default ForgotPassword;
