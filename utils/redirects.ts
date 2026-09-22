import { redirect } from "next/navigation";
import { createClient } from "./supabase/server";

export async function redirectIfAuth(){
    const supabase = await createClient()

    const {data: {user}} = await supabase.auth.getUser()

    console.log(user)
}