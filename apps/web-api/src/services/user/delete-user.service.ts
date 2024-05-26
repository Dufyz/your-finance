import supabase from "@/config/supabase";

interface IDeleteUserService {
  id: number;
}

export default async function DeleteUserService({
  id
}: IDeleteUserService): Promise<void> {
  const { data: user } = await supabase
    .from("users")
    .select("auth_id")
    .eq("id", id)
    .single();

  const { error } = await supabase.from("users").delete().eq("id", id);

  if (error || !user) {
    console.log("error", error);
    throw new Error(error?.message || "User not found");
  }

  const { error: deleteError } = await supabase.auth.admin.deleteUser(
    user.auth_id
  );

  if (deleteError) {
    console.log("deleteError", deleteError);
    throw new Error(deleteError.message);
  }
}
