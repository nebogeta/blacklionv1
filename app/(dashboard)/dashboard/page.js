import CreateExpense from "@/components/CreateExpense";
import ExpenseDashboard from "@/components/ui/ExpenseDashboard";
import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";
import { getServerSession } from "next-auth";

export const metadata = {
    title: 'Blk expense | Dashboard',
    description: 'Free & open-source expense tracker app',
};

const page = async () => {
    const user = await getServerSession(authOptions);
    if (!user) return  null;

    const expenses = await db.expense.findMany({
        where: {
            userId: user.user.id,
            
        },
      });
      

    return (
        <div className='max-w-7xl mx-auto mt-16'>
          {expenses ? (
        
            <ExpenseDashboard />
            
          ) : (
            <CreateExpense />
          )}
        </div>
      )
};

export default page;