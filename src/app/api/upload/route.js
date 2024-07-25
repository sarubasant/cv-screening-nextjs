// app/api/upload/route.js
import multer from "multer";
import { NextResponse } from "next/server";

const upload = multer({
    storage: multer.memoryStorage(),
});

export const config = {
    api: {
        bodyParser: false,
    },
};

export async function POST(req) {
    const formData = await req.formData();
    const file = formData.get("file");

    if (!file) {
        return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    // Process file here (e.g., extract text)
    return NextResponse.json({ message: "File uploaded successfully" });
}
