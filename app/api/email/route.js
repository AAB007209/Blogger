import { ConnectDB } from "@/lib/config/db";
import { NextResponse } from "next/server";
import EmailModel from "@/lib/models/EmailModel";

const LoadDB = async () => {
    await ConnectDB();
}

LoadDB();

export async function POST(request) {
    try {
        const formData = await request.formData();
        const email = formData.get('email');

        if (!email) {
            return NextResponse.json({ success: false, msg: "Email is required" }, { status: 400 });
        }

        await EmailModel.create({ email });

        return NextResponse.json({ success: true, msg: "Email Subscribed" });
    } catch (error) {
        console.error("Error subscribing email:", error);
        return NextResponse.json({ success: false, msg: "Internal Server Error" }, { status: 500 });
    }
}

export async function GET(request) {
    const emails = await EmailModel.find({});
    return NextResponse.json(emails);
}

export async function DELETE(request) {
    const id = await request.nextUrl.searchParams.get("id");
    await EmailModel.findByIdAndDelete(id);
    return NextResponse.json({ success: true, msg: "Email Deleted" });
}
