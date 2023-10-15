import ConnectMongodb from "@/src/libs/db";
import Ressource from "@/src/models/ressource";
import Categorie from "@/src/models/categorie";
import { NextResponse } from "next/server";

export async function POST(request) {
    const { title, description, link, categorie } = await request.json();
    await ConnectMongodb();
    const categorieDoc = await Categorie.findOne({ title: categorie });
    await Ressource.create({ title, description, link, categoryId: categorieDoc._id });
    return NextResponse.json({ message: "Ressource Created" }, { status: 201 });
}

export async function GET() {
    await ConnectMongodb();
    const ressources = await Ressource.find();
    return NextResponse.json({ ressources });
}
