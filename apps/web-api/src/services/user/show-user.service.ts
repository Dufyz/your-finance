import supabase from "@/config/supabase";

interface IShowUserService {
  id: number;
}

export const ShowUserService = async ({ id }: IShowUserService) => {
  const { data, error } = await supabase
    .from("users")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.log("error", error);

    throw new Error(error.message);
  }

  return data;
};
