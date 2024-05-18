"use client";

import { createClient } from "@/config/supabase/supabaseClient";
import { User } from "@supabase/supabase-js";
import { useEffect, useState } from "react";

const ClientePage = () => {
  const [data, setData] = useState<User | undefined>();

  const supabase = createClient();

  const handleGetUser = async () => {
    const { data, error } = await supabase.auth.getUser();

    if (error) {
      console.error(error);
      return;
    }

    setData(data);
  };

  useEffect(() => {
    handleGetUser();
  }, []);

  return (
    <div>
      <h1>Cliente, {data?.user?.email}</h1>
    </div>
  );
};

export default ClientePage;
