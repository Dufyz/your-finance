import supabase from "@/config/supabase";

interface ISignInService {
  email: string;
  password: string;
}

export const SignInService = async ({ email, password }: ISignInService) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    console.log("error", error);

    throw new Error(error.message);
  }

  return data.session;
};
