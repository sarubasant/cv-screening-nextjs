// app/auth/signin/page.js
import { signIn } from "next-auth/react";

export default function SignIn() {
    return (
        <form method="post" action="/api/auth/signin/credentials">
            <label>
                Email
                <input name="email" type="text" />
            </label>
            <label>
                Password
                <input name="password" type="password" />
            </label>
            <button type="submit">Sign in</button>
        </form>
    );
}
