import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import FormError from "@/components/global/form-error";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { forgotPassword } from "../actions/forgot-password";

interface IForgotPasswordProps {
  setActiveTab: any;
}

const ForgotPasswordSchema = z.object({
  email: z.string().email()
});

type ForgotPasswordSchemaType = z.infer<typeof ForgotPasswordSchema>;

const ForgotPassword = ({ setActiveTab }: IForgotPasswordProps) => {
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm<ForgotPasswordSchemaType>({
    resolver: zodResolver(ForgotPasswordSchema)
  });

  const handleForgotPasswordAction = async ({
    email
  }: ForgotPasswordSchemaType) => {
    try {
      await forgotPassword({ email });
      return toast.success("Recovery email sent");
    } catch (error) {
      return toast.error("Invalid email. Please try again.");
    }
  };

  return (
    <div className="flex w-full flex-col items-start justify-center gap-6">
      <form
        onSubmit={handleSubmit(handleForgotPasswordAction)}
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
            <Button
              type="submit"
              className="flex h-12 w-full items-center justify-center rounded-[8px] text-base font-semibold text-white"
            >
              Recover
            </Button>
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
