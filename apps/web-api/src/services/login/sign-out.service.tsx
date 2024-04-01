import supabase from "@/config/supabase";

interface ISignOutService {
  sessionToken: string;
}

export const SignOutService = async ({ sessionToken }: ISignOutService) => {
  const { error } = await supabase.auth.signOut({
    scope: "local",
  });

  if (error) {
    console.log("error", error);

    throw new Error(error.message);
  }

  return true;
};
