import supabase from "@/config/supabase";

interface ISignUpService {
  name: string;
  email: string;
  password: string;
}

export const SignUpService = async ({
  name,
  email,
  password,
}: ISignUpService) => {
  const { data: authData, error: authError } = await supabase.auth.signUp({
    email,
    password,
  });

  if (authError) {
    console.log("authError", authError);

    if (authError.message.includes("User already registered")) {
      throw new Error("User already registered");
    }

    throw new Error(authError.message);
  }

  const { data, error } = await supabase.from("users").insert({
    id: authData?.user?.id,
    name,
    email,
    plan_id: 1,
    created_at: new Date(),
    updated_at: new Date(),
  });

  if (error) {
    console.log("error", error);

    throw new Error(error.message);
  }

  return data;
};
