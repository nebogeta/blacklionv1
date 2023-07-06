import React from "react";
import { DollarSign } from "lucide-react";
import LargeHeading from "@/components/ui/LargeHeading";
import Paragraph from "@/components/ui/Paragraph";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

function Form({ type, expense, setExpense, isEditing, updateExpense }) {
  return (
    <div className="container md:max-w-2xl">
      <div className="flex flex-col gap-6 items-center mt-12">
        <DollarSign className="mx-auto h-12 w-12 text-gray-400" />
        <LargeHeading className="text-center">{type} your Expense</LargeHeading>
        <Paragraph>You haven`&apos;`t {type}ed your expense yet.</Paragraph>
      </div>
      <form
        onSubmit={updateExpense}
        className="mt-6 sm:flex sm:items-center"
        action="#"
      >
        <div className="relative rounded-md shadow-sm sm:min-w-0 sm:flex-1">
          <Input
            placeholder="Enter Description"
            value={expense.description}

            onChange={(e) =>
              setExpense({ ...expense, description: e.target.value })
            }
          />

          <Input
            placeholder="Enter amount"
            value={expense.amount}
            onChange={(e) => setExpense({ ...expense, amount: e.target.value })}
            type="number"
          />
          <Input
            placeholder="Enter GroupExpenses name"
            value={expense.group}
            onChange={(e) => setExpense({ ...expense, group: e.target.value })}
          />
          <Input
            placeholder="Enter Date"
            value={expense.date}
            onChange={(e) => setExpense({ ...expense, date: e.target.value })}
            type="date"
          />
        </div>
        <div className="mt-6 flex justify-center sm:mt-0 sm:ml-4 sm:flex-shrink-0">
          <Button disabled={!expense} isLoading={isEditing}>
            Add
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Form;
