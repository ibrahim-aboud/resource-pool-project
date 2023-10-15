import ConnectMongodb from "@/src/libs/db";
import Categorie from "@/src/models/categorie";
import { NextResponse } from "next/server";

export async function GET() {
    const { id } = request.params;
    await ConnectMongodb();
    const categorie = await Categorie.findById(id);
    return NextResponse.json({ categorie });
}
