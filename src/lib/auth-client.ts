import { createAuthClient } from "better-auth/react";
const baseUrl = process.env.NEXT_PUBLIC_BETTER_AUTH_URL;
if (!baseUrl) {
  throw new Error("base url is not define");
}
export const authClient = createAuthClient({
  baseURL: baseUrl,
});

export const { signIn, signUp, signOut, useSession, updateUser } = authClient;
