"use client";

import { useState } from "react";
import { Button } from "./ui/Button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/DropdownMenu";

import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "./ui/toast";

const ExpenseOptions = () => {
  const [isDeleting, setIsDeleting] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [createNewExpense, setCreateNewExpense] = useState(false);
  const [groupExpense, setGroupExpense] = useState(false);
  const router = useRouter();

  const create = () => {
    try {
      setCreateNewExpense(true);
      router.push("/expense/create");
    } catch (error) {
      toast({
        title: "Something went wrong creating expense",
        message: "Please try again later",
        type: "error",
      });
    } finally {
      setCreateNewExpense(false);
    }
  };

  const group = () => {
    try {
      setGroupExpense(true);
      router.push("/group-search/query");
    } catch (error) {
      toast({
        title: "Something went wrong creating expense",
        message: "Please try again later",
        type: "error",
      });
    } finally {
      setGroupExpense(false);
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        disabled={isDeleting || isEditing || createNewExpense}
        asChild
      >
        <Button className="variant='ghost' className='flex gap-2 items-center'">
          <p>
            {createNewExpense
              ? "Creating Expense"
              : isDeleting
              ? "Deleting Expense"
              : isEditing
              ? "Editing Expense"
              : "Options"}
          </p>
          {isDeleting || isEditing || createNewExpense ? (
            <Loader2 className="animate-spin h-5 w-5 text-gray-400" />
          ) : null}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onClick={create}> Create New</DropdownMenuItem>
        <DropdownMenuItem onClick={group}> Go to Group</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ExpenseOptions;
