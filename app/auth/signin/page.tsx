'use client';

import { signIn } from "next-auth/react";

export default function SignIn() {
  const handleSignIn = async () => {
    try {
      await signIn('google');
    } catch (error) {
      console.error("Sign-in error:", error);
    }
  }
  return (
    <div className="flex h-screen items-center justify-center text-white">
      <div className="w-full max-w-md p-8 space-y-6 rounded-lg shadow-md bg-black border-white-200 border-2">
        <h2 className="text-2xl font-bold text-center">Sign In to Unpaced</h2>
            <button onClick={handleSignIn} className="bg-gray-200 p-5 rounded-sm w-full text-black font-bold" type="submit">Sign In with Google</button>
      </div>
    </div>
  );
}
