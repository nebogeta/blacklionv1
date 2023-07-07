import { getServerSession } from "next-auth";
import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { authOptions} from "@/lib/auth";

export async function GET(req) {
  try {
    const user = await getServerSession(authOptions);

    if (!user) {
      return new NextResponse("Unauthenticated", { status: 403 });
    }

    const expense = await db.expense.findMany({
      where: {
        userId: user.user.id,

      },
    });

    return NextResponse.json(expense);
  } catch (error) {

    return new NextResponse("Internal error", { status: 500 });
  }
}
