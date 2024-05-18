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
});

type ForgotPasswordSchemaType = z.infer<typeof ForgotPasswordSchema>;

const ForgotPassword = ({ setActiveTab }: IForgotPasswordProps) => {
  const { handleForgotPassword } = useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<ForgotPasswordSchemaType>({
    resolver: zodResolver(ForgotPasswordSchema),
    defaultValues: {
      email: ""
    }
  });

  return (
    <div className="flex w-full flex-col items-start justify-center gap-6">
      <form
        onSubmit={handleSubmit(handleForgotPassword)}
        className="flex w-full flex-col items-center justify-center gap-8"
      >
        <div className="flex w-full flex-col items-center justify-center gap-6">
          <div className="flex w-full flex-col items-start justify-center gap-2">
            <label htmlFor="" className="text-base font-bold text-gray-800">
              Email Adress
            </label>
            {errors.email?.message && (
              <FormError message={errors.email.message} />
            )}
            <input
              {...register("email")}
              type="email"
              placeholder="Email"
              className="h-12 w-full rounded-[8px] border border-solid border-gray-600 px-4 py-3"
            />
          </div>
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-8">
          <div className="flex w-full flex-col items-start justify-center gap-6">
            <button
              type="submit"
              disabled={isSubmitting}
              className="hover:bg-primary-hover bg-primary w-full rounded-[8px] px-3 py-4 font-bold text-white"
            >
              Recover
            </button>
          </div>
        </div>
      </form>

      <div className="flex w-full cursor-pointer items-center justify-center px-8 text-base font-semibold">
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
