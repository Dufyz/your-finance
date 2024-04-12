import supabase from "@/config/supabase";

interface IPatchUserService {
  id: number;
  name?: string;
}

export const PatchUser = async ({ id, name }: IPatchUserService) => {
  const { data, error } = await supabase.from("users").update({ name }).eq("id", id).single();

  await supabase.auth.

    if(error) {
    console.log("error", error);

    throw new Error(error.message);
  }

  return data;
};
