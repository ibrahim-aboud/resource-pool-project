import ConnectMongodb from "@/libs/db";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { writeFile } from 'fs/promises'
import Categorie from "@/models/categorie";

export async function POST(request) {
    // const { title,explanation } = await request.json();
    const data = await request.formData();
    const title = data.get("title");
    const explanation = data.get("explanation");
    const image = data.get("image");
    const color = data.get("color");
    const bgColor = data.get("bgColor");

    if(!title || !explanation || !image || !color || !bgColor ) return NextResponse.json({ message: "Missing fields" }, { status: 400 });

    const bytes= await image.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const path = `public/categoryImages/${image.name}.png`;
    await writeFile(path, buffer);
    await ConnectMongodb();
    await Categorie.create({ title,explanation,color,bgColor,imagePath:`/categoryImages/${image.name}.png` });
    return NextResponse.json({ message: "Categorie Created" }, { status: 201 });
}

export async function GET() {
    await ConnectMongodb();
    const categories = await Categorie.find();
    return NextResponse.json({ categories });
}

