import supabase from "@/config/supabase";

interface IPatchUserService {
  id: number;
  name?: string;
  email?: string;
}

export const PatchUser = async ({ id, name, email }: IPatchUserService) => {
  const { error } = await supabase.from("users").update({ name, email }).eq("id", id).single();

  if (email) {
    const { data: oldUser } = await supabase.from("users").select("*").eq("id", id).single();

    const { error: errorAuth } = await supabase.auth.admin.updateUserById(oldUser.auth_id, { email })

    if (errorAuth) {
      console.log("error", errorAuth);

      throw new Error(errorAuth.message);
    }
  }

  if (error) {
    console.log("error", error);

    throw new Error(error.message);
  }

  return true;
};
