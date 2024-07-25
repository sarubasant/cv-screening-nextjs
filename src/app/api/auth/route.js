// app/api/auth/route.js
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                const user = { id: 1, name: "User", email: credentials.email };
                if (user) {
                    return user;
                } else {
                    return null;
                }
            },
        }),
    ],
    pages: {
        signIn: "/auth/signin",
    },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
