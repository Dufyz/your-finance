import supabase from "@/config/supabase";

interface ICreateUserService {
  name: string;
  email: string;
  auth_id: string;
}

export const CreateUserService = async ({
  name,
  email,
  auth_id
}: ICreateUserService) => {
  const { error } = await supabase.from("users").insert({
    auth_id,
    name,
    email,
    created_at: new Date(),
    updated_at: new Date(),
  }).single();

  if (error) {
    console.log("error", error);

    throw new Error(error.message);
  }

  const { data } = await supabase.from("users").select("*").eq("auth_id", auth_id).single();

  if (!data) {
    throw new Error("User not found");
  }

  await supabase.auth.admin.updateUserById(auth_id, {
    user_metadata: {
      id: data.id,
    }
  });

  return data;
};
