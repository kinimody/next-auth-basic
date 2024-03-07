import React from "react";
import { auth } from "@/auth";
import { signOut } from "@/auth";


const settingsPage = async () => {
  const session = await auth();
  

  return (
    <div>
      setting page
      {JSON.stringify(session)}
      <form action={async () => {
        "use server"
        await signOut();
      }}>
        <button type="submit">Sign out</button>
      </form>
    </div>
  );
};

export default settingsPage;
