import { getAuthSession } from "@/lib/auth";
import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import {authOptions} from "@/lib/auth";


// create get by id route
export async function GET(req, { params }) {
  try {
    const session = await getAuthSession(authOptions);

    if (!session?.user) {
      return new NextResponse("Unauthenticated", { status: 403 });
    }
    const { id } = await params;
    if (!id) {
      return new NextResponse("Expense id is required", { status: 400 });
    }

    const expense = await db.expense.findUnique({
      where: {
        id: params.id,
      },
    });

    return NextResponse.json(expense);
  } catch (error) {

    return new NextResponse("Internal error", { status: 500 });
  }
}

// create delete by id route
export async function DELETE(req, { params }) {
  try {
    const session = await getAuthSession();

    if (!session?.user) {
      return new NextResponse("Unauthenticated", { status: 403 });
    }
    const { id } = await params;
    if (!id) {
      return new NextResponse("Expense id is required", { status: 400 });
    }

    const expense = await db.expense.delete({
      where: {
        id: params.id,
      },
    });

    return NextResponse.json(expense);
  } catch (error) {

    return new NextResponse("Internal error", { status: 500 });
  }
}

// create update by id route
export async function PATCH(req, { params }) {
  try {
    const session = await getAuthSession();
    const { description, date, amount, group } = await req.json();
    if (!session?.user) {
      return new NextResponse("Unauthenticated", { status: 403 });
    }

    const { id } = await params;

    if (!id) {
      return new NextResponse("Expense id is required", { status: 400 });
    }

    const existingExpense = await db.expense.findUnique({
      where: {
        id: params.id,
      },
    });

    existingExpense.description = description;
    existingExpense.date = date;
    existingExpense.group = group;
    existingExpense.amount = amount;

    const expense = await db.expense.update({
      where: {
        id: params.id,
      },
      data: {
        description: description,
        amount: Number(amount),
        group: group,
        date: new Date(date),
        userId: session.user.id,
        name: session.user.name,
      },
    });

    return new NextResponse(JSON.stringify(expense));
  } catch (error) {

    return new NextResponse("Internal error", { status: 500 });
  }
}
