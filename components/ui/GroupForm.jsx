import React from "react";
import { FilterIcon} from "lucide-react";
import LargeHeading from "@/components/ui/LargeHeading";
import Paragraph from "@/components/ui/Paragraph";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

function GroupForm({ type, dynamicQuery, setDynamicQuery, isEditing, updateQuery }) {
  return (
    <div className="container md:max-w-2xl mt-12">
      <div className="flex flex-col gap-6 items-center">
        <FilterIcon className="mx-auto h-12 w-12 text-gray-400" />
        <LargeHeading className="text-center">Welcome to your {type} group Expense</LargeHeading>
        <Paragraph className='text-start'>You can filter your {type} expense by date range.</Paragraph>
      </div>
      <form
        onSubmit={updateQuery}
        className="mt-6 sm:flex sm:items-center"
        action="#"
      >
        <div className="relative rounded-md shadow-sm sm:min-w-0 sm:flex-1">
          <Input
            placeholder="Enter Group Name"
            value={dynamicQuery.groupId}
            required={true}
            onChange={(e) =>
              setDynamicQuery({ ...dynamicQuery, groupId: e.target.value })
            }
          />

          <Input
            placeholder="Enter start date"
            value={dynamicQuery.startDate}
            onChange={(e) => setDynamicQuery({ ...dynamicQuery, startDate: e.target.value })}
            type="date"
            required={true}
          />
          <Input
            placeholder="Enter end date"
            value={dynamicQuery.endDate}
            type="date"
            required={true}
            onChange={(e) => setDynamicQuery({ ...dynamicQuery, endDate: e.target.value })}
          />

        </div>
        <div className="mt-6 flex justify-center sm:mt-0 sm:ml-4 sm:flex-shrink-0">
          <Button disabled={!dynamicQuery} isLoading={isEditing}>
            Filter
          </Button>
        </div>
      </form>
    </div>
  );
}

export default GroupForm;
