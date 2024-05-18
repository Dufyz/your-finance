import supabase from "@/config/supabase";

interface IPatchUserService {
  user_id: number;
  name?: string;
  email?: string;
  password?: string;
  currency?: string;
}

export const PatchUserService = async ({
  user_id,
  name,
  email,
  password,
  currency
}: IPatchUserService) => {
  const { error } = await supabase
    .from("users")
    .update({ name, email, currency })
    .eq("id", user_id)
    .single();
  const { data: user, error: errorUser } = await supabase
    .from("users")
    .select("*")
    .eq("id", user_id)
    .single();

  const auth_id = user?.auth_id;

  if (email) {
    const { error: errorAdmin } = await supabase.auth.admin.updateUserById(
      auth_id,
      { email }
    );

    if (errorAdmin) {
      console.log("errorAdmin", errorAdmin);

      throw new Error(errorAdmin.message);
    }
  }

  if (password) {
    const { error: errorAdmin } = await supabase.auth.admin.updateUserById(
      auth_id,
      {
        password
      }
    );

    if (errorAdmin) {
      console.log("errorAdmin", errorAdmin);

      throw new Error(errorAdmin.message);
    }
  }

  if (error) {
    console.log("error", error);

    throw new Error(error.message);
  }

  if (errorUser) {
    console.log("errorUser", errorUser);

    throw new Error(errorUser.message);
  }

  return true;
};
