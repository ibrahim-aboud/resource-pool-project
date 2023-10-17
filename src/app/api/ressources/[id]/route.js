import ConnectMongodb from "@/libs/db";
import { NextResponse } from "next/server";
import Ressource from "@/models/ressource";

export async function GET(request , {params}) {
    const { id } = params;
    await ConnectMongodb();
    const ressource = await Ressource.findById(id).populate("categoryId");
    return NextResponse.json({ ressource });
}
