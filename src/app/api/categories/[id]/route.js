import ConnectMongodb from "@/libs/db";
import { NextResponse } from "next/server";
import Categorie from "@/models/categorie";

export async function GET(request , {params}) {
    const { id } = params;
    await ConnectMongodb();
    const categorie = await Categorie.findById(id);
    return NextResponse.json({ categorie });
}
