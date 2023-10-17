import ConnectMongodb from "@/libs/db";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
let Categorie = mongoose.model("Categorie");

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

