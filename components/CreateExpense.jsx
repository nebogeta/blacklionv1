"use client";

import { DollarSign } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/Button";
import { Input } from "./ui/Input";
import LargeHeading from "./ui/LargeHeading";
import Paragraph from "./ui/Paragraph";
import { toast } from "./ui/toast";
import { useRouter } from "next/navigation";

const CreateExpense = () => {
  const [isCreating, setIsCreating] = useState(false);
  const [data, setData] = useState({
    description: "",
    amount: 0,
    group: "",
    date: new Date(),
  });
  const router = useRouter();

  async function createNewExpense(e) {
    e.preventDefault();
    setIsCreating(true);
    try {
      fetch("/api/expense/create", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then(() => {
          setData({ description: "", amount: 0, group: "", date: new Date() });
        })
        .then(() => {
          toast({
            title: "Success",
            message: "Expense created successfully",
            type: "success",
          });
        })
        .then(() => {
          router.push("/dashboard");
          router.refresh();
        });
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsCreating(false);
    }
  }

  return (
    <div className="container md:max-w-2xl">
      <div className="flex flex-col gap-6 items-center">
        <DollarSign className="mx-auto h-12 w-12 text-gray-400" />
        <LargeHeading className="text-center">
          Create your Expenses
        </LargeHeading>
        <Paragraph>You haven't created your expense yet.</Paragraph>
      </div>
      <form
        onSubmit={createNewExpense}
        className="mt-6 sm:flex sm:items-center"
        action="#"
      >
        <div className="relative rounded-md shadow-sm sm:min-w-0 sm:flex-1">
          <Input
            placeholder="Enter Description"
            value={data.description}
            onChange={(e) => setData({ ...data, description: e.target.value })}
          />

          <Input
            placeholder="Enter amount"
            value={data.amount}
            onChange={(e) => setData({ ...data, amount: e.target.value })}
            type="number"
          />
          <Input
            placeholder="Enter Group"
            value={data.group}
            onChange={(e) => setData({ ...data, group: e.target.value })}
          />

          <Input
            placeholder="Enter Date"
            value={data.date}
            onChange={(e) => setData({ ...data, date: e.target.value })}
            type="date"
          />
        </div>
        <div className="mt-6 flex justify-center sm:mt-0 sm:ml-4 sm:flex-shrink-0">
          <Button disabled={!data} isLoading={isCreating}>
            Add
          </Button>
        </div>
      </form>
     
    </div>
  );
};

export default CreateExpense;
