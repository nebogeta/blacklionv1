import { getAuthSession } from "@/lib/auth";
import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    const session = await getAuthSession();

    if (!session?.user) {
      return new NextResponse("Unauthenticated", { status: 403 });
    }

    const expense = await db.expense.findMany({
      where: {
        userId: session.user.id,
      },
    });

    return NextResponse.json(expense);
  } catch (error) {
    console.log(error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
