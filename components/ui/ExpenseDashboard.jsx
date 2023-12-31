import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";
import { getServerSession } from "next-auth";
import LargeHeading from "@/components/ui/LargeHeading";
import Paragraph from "@/components/ui/Paragraph";
import Table from "./Table";
import ExpenseOptions from "../ExpenseOptions";

const ExpenseDashboard = async () => {
  const user = await getServerSession(authOptions);
  if (!user) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  const expenses = await db.expense.findMany({
    where: {
      userId: user.user.id,
    },
  });


  const total = expenses.reduce((acc, expense) => {
    return acc + expense.amount;
  }, 0);

  const roundedTotal = total.toFixed(2);

  return (
    <div className="container flex flex-col gap-6">
      <LargeHeading >Welcome back, {user.user.name}</LargeHeading>
      <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start items-center">
        <ExpenseOptions expenses={expenses} />
      </div>

      <Paragraph className="text-center md:text-left mt-4 mb-4">
        Your Expense history:
      </Paragraph>

      <Table expenses={expenses} />
      <Paragraph className="text-center font-semibold md:text-left mt-4 -mb-4 ">
        Total: ${roundedTotal}
      </Paragraph>
    </div>
  );
};

export default ExpenseDashboard;
