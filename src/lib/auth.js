// lib/auth.js
import { useSession, signIn } from "next-auth/react";
import { useEffect } from "react";

export default function withAuth(Component) {
    return (props) => {
        const { data: session, status } = useSession();

        useEffect(() => {
            if (status === "unauthenticated") signIn();
        }, [status]);

        if (status === "loading") {
            return <div>Loading...</div>;
        }

        return <Component {...props} session={session} />;
    };
}
