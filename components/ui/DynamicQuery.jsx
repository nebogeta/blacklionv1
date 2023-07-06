// DynamicQuery.js
"use client";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import LargeHeading from "@/components/ui/LargeHeading";
import Paragraph from "@/components/ui/Paragraph";

import { FilterIcon } from "lucide-react";
import { useState } from "react";
import Table from "./Table";
import ExpenseOptions from "../ExpenseOptions";
import { useRouter } from "next/navigation";

const DynamicQuery = () => {
  const [dynamicQuery, setDynamicQuery] = useState({
    groupId: "",
    startDate: "",
    endDate: "",
  });
  const [expenses, setExpenses] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsEditing(true);

    try {
      const response = await fetch(
        `/api/group/${dynamicQuery.startDate}/${dynamicQuery.endDate}/${dynamicQuery.groupId}`
      );
      const data = await response.json();
      setExpenses(data);
      
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsEditing(false);
      setIsSubmit(true);
    }
  };

  return (
    <>
      <div className="container md:max-w-2xl">
        <div className="flex flex-col gap-6 items-center">
          <FilterIcon className="mx-auto h-12 w-12 text-gray-400" />
          <LargeHeading className="text-center">
            Please enter your search parameters
          </LargeHeading>
          <Paragraph>Please Enter search parameters</Paragraph>
        </div>
        <form
          onSubmit={handleSubmit}
          className="mt-6 sm:flex sm:items-center"
          action="#"
        >
          <div className="relative rounded-md shadow-sm sm:min-w-0 sm:flex-1">
            <Input
              placeholder="Enter the group you belong to"
              value={dynamicQuery.groupId}
              required={true}
              onChange={(e) =>
                setDynamicQuery({ ...dynamicQuery, groupId: e.target.value })
              }
            />

            <Input
              placeholder="Enter month for your search"
              value={dynamicQuery.startDate}
              type="date"
              required={true}
              onChange={(e) =>
                setDynamicQuery({
                  ...dynamicQuery,
                  startDate: e.target.value,
                })
              }
            />
            <Input
              placeholder="Enter end date for your search"
              value={dynamicQuery.endDate}
              type="date"
              required={true}
              onChange={(e) =>
                setDynamicQuery({ ...dynamicQuery, endDate: e.target.value })
              }
            />
          </div>
          <div className="mt-6 flex justify-center sm:mt-0 sm:ml-4 sm:flex-shrink-0">
            <Button disabled={!dynamicQuery} isLoading={isEditing}>
              Search
            </Button>
          </div>
        </form>
      </div>

      <div className="container flex flex-col mt-20 gap-6">
        <LargeHeading>Welcome back, {dynamicQuery.groupId} group expense</LargeHeading>
        <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start items-center">
          <ExpenseOptions expenses={expenses} />
        </div>

        <Paragraph className="text-center md:text-left mt-4 -mb-4">
          Your Expense history:
        </Paragraph>

        <Table expenses={expenses} />
        <Paragraph className="text-center font-semibold md:text-left mt-4 -mb-4 ">
          {/* Total: ${roundedTotal} */}
        </Paragraph>
      </div>
    </>
  );
};

export default DynamicQuery;
