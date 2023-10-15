import ConnectMongodb from "@/src/libs/db";
import Ressource from "@/src/models/ressource";
import Categorie from "@/src/models/categorie";
import { NextResponse } from "next/server";

export async function GET() {
    const { id } = request.params;
    await ConnectMongodb();
    const ressource = await Ressource.findById(id);
    return NextResponse.json({ ressource });
}
