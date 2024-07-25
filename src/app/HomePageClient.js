"use client"; // This directive is necessary to mark this as a Client Component

import Link from 'next/link';
import { useSession, signIn, signOut } from 'next-auth/react';

export default function HomePageClient() {
    const { data: session } = useSession();

    return (
        <div className="container mx-auto p-4">
            <header className="flex justify-between items-center py-4">
                <h1 className="text-2xl font-bold">CV Screening App</h1>
                <nav>
                    <ul className="flex space-x-4">
                        {!session && (
                            <>
                                <li>
                                    <button
                                        onClick={() => signIn()}
                                        className="text-blue-500 hover:underline"
                                    >
                                        Sign In
                                    </button>
                                </li>
                                <li>
                                    <Link href="/auth/signup" className="text-blue-500 hover:underline">
                                        Sign Up
                                    </Link>
                                </li>
                            </>
                        )}
                        {session && (
                            <>
                                <li>
                                    <Link href="/upload" className="text-blue-500 hover:underline">
                                        Upload CV
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/dashboard" className="text-blue-500 hover:underline">
                                        Dashboard
                                    </Link>
                                </li>
                                <li>
                                    <button
                                        onClick={() => signOut()}
                                        className="text-blue-500 hover:underline"
                                    >
                                        Sign Out
                                    </button>
                                </li>
                            </>
                        )}
                    </ul>
                </nav>
            </header>

            <main className="mt-8">
                <h2 className="text-xl font-semibold">Welcome to the CV Screening App</h2>
                <p className="mt-4">
                    This application helps recruiting agencies to screen and rank CVs
                    efficiently. You can upload CVs, view the ranking, and manage your
                    dashboard.
                </p>

                {!session ? (
                    <div className="mt-8">
                        <h3 className="text-lg font-semibold">Get Started</h3>
                        <p className="mt-2">
                            <button
                                onClick={() => signIn()}
                                className="text-blue-500 hover:underline"
                            >
                                Sign In
                            </button>{' '}
                            or{' '}
                            <Link href="/auth/signup" className="text-blue-500 hover:underline">
                                Sign Up
                            </Link>{' '}
                            to start using the app.
                        </p>
                    </div>
                ) : (
                    <div className="mt-8">
                        <h3 className="text-lg font-semibold">Quick Links</h3>
                        <ul className="mt-2 space-y-2">
                            <li>
                                <Link href="/upload" className="text-blue-500 hover:underline">
                                    Upload CV
                                </Link>
                            </li>
                            <li>
                                <Link href="/dashboard" className="text-blue-500 hover:underline">
                                    Go to Dashboard
                                </Link>
                            </li>
                        </ul>
                    </div>
                )}
            </main>
        </div>
    );
}
