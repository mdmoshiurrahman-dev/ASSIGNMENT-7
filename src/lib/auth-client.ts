import { createAuthClient } from "better-auth/react";
// const baseUrl = process.env.BETTER_AUTH_URL;
// if (!baseUrl) {
//   throw new Error("base url is not define");
// }
export const authClient = createAuthClient({
  baseURL:'http://localhost:300'
});
export const { signIn, signUp, signOut, useSession } = createAuthClient();
