import ConnectMongodb from "@/src/libs/db";
import Categorie from "@/src/models/categorie";
import { NextResponse } from "next/server";

export async function POST(request) {
    const { title,explanation } = await request.json();
    await ConnectMongodb();
    await Categorie.create({ title,explanation });
    return NextResponse.json({ message: "Categorie Created" }, { status: 201 });
}

export async function GET() {
    await ConnectMongodb();
    const categories = await Categorie.find();
    return NextResponse.json({ categories });
}

