import { IconEye } from "@tabler/icons-react";
import useLogin from "../hook/useLogin";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import FormError from "@/components/global/form-error";

interface ISignUpProps {
  setActiveTab: any;
}

const SignUpSchema = z.object({
  name: z.string().min(3, "Name must have at least 3 characters"),
  email: z.string().email(),
  password: z.string().min(6, "Password must have at least 6 characters"),
})

type SignUpSchemaType = z.infer<typeof SignUpSchema>

const SingUp = ({ setActiveTab }: ISignUpProps) => {
  const {handleSingUp} = useLogin();

  const {handleSubmit, register, formState: {
    errors, isSubmitting
  }} = useForm<SignUpSchemaType>({
    resolver: zodResolver(SignUpSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    }
  })

  return (
    <div className="w-full flex flex-col items-center justify-center gap-8">
     <form className="w-full flex flex-col items-center justify-center gap-6" onSubmit={handleSubmit(handleSingUp)}>
     <div className="w-full flex flex-col items-center justify-center gap-6">
        <div className="w-full flex flex-col items-start justify-center gap-2">
          <label htmlFor="" className="text-gray-800 text-base font-bold">
            Name
          </label>
          {errors.name?.message && (<FormError message={errors.name.message} />)}
          <input
          {...register("name")}
            type="text"
            placeholder="Name"
            className="w-full h-12 py-3 px-4 rounded-[8px] border border-solid border-gray-600"
          />
        </div>
        <div className="w-full flex flex-col items-start justify-center gap-2">
          <label htmlFor="" className="text-gray-800 text-4 font-bold">
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
          <div className="w-full flex flex-col items-start justify-center gap-2">
            <div className="w-full flex items-start justify-between flex-wrap gap-4">
              <label htmlFor="" className="text-gray-800 text-base font-bold">
                Password
              </label>
            </div>
            {errors.password?.message && (<FormError message={errors.password.message} />)}
            <div className="w-full relative">
              <input
              {...register("password")}
                type={"password"}
                placeholder="Password"
                className="w-full h-12 py-3 px-4 rounded-[8px] border border-solid border-gray-600"
              />
              <IconEye
                size={24}
                className="absolute right-4 top-3 cursor-pointer"
              />
            </div>
          </div>
      </div>
      <div className="w-full flex flex-col items-center justify-center gap-8">
        <div className="w-full flex flex-col items-start justify-center gap-6">
          <button type="submit" disabled={isSubmitting} className="w-full bg-primary py-4 px-3 rounded-[8px] text-white font-bold hover:bg-primary-hover">
            Sign Up
          </button>
        </div>
      </div>
     </form>
      <div className="w-full text-base font-semibold cursor-pointer flex items-center justify-center px-6">
        <button
          className="text-gray-400"
          onClick={() => setActiveTab("sign-in")}
        >
          Already have an account? <span className="text-green-700">Login</span>
        </button>
      </div>
    </div>
  );
};

export default SingUp;
