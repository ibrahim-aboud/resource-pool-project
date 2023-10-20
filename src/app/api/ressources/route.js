import ConnectMongodb from "@/libs/db";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
import Categorie from "@/models/categorie";
import Ressource from "@/models/ressource";

export async function POST(request) {
    const { title, description, link, category } = await request.json();
    await ConnectMongodb();
    const categorieDoc = await Categorie.findOne({ title: category });
    await Ressource.create({ title, description, link, categoryId: categorieDoc });
    return NextResponse.json({ message: "Ressource Created" }, { status: 201 });
}

export async function GET() {
    await ConnectMongodb();
    const ressources = await Ressource.find().populate("categoryId");
    return NextResponse.json({ ressources });
}
