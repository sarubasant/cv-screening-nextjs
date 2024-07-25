// app/dashboard/page.js
"use client";
import { useEffect, useState } from "react";
import withAuth from "../../lib/auth";
import { rankCVs } from "../../utils/ranking";

function Dashboard() {
    const [cvs, setCVs] = useState([]);

    useEffect(() => {
        // Fetch CVs from the backend
        const fetchCVs = async () => {
            const res = await fetch("/api/cvs");
            const data = await res.json();
            setCVs(data);
        };
        fetchCVs();
    }, []);

    const keywords = ["JavaScript", "React", "Node.js"]; // Example keywords
    const rankedCVs = rankCVs(cvs, keywords);

    return (
        <div>
            <h1>Dashboard</h1>
            <ul>
                {rankedCVs.map((cv, index) => (
                    <li key={index}>{cv.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default withAuth(Dashboard);
