// "use client";
// import { useState, useEffect, use } from "react";
// import React from "react";
// import LargeHeading from "./ui/LargeHeading";
// import ExpenseOptions from "./ExpenseOptions";
// import Paragraph from "./ui/Paragraph";
// import Table from "./ui/Table";
// import { Input } from "./ui/Input";
// import { Button } from "./ui/Button";
// import { FilterIcon } from "lucide-react";
// import { authOptions } from "@/lib/auth";
// import { db } from "@/lib/db";
// import { getServerSession } from "next-auth";

// const  GroupFilter = async () => {
//     const [dynamicQuery, setDynamicQuery] = useState({
//         groupId: "",
//         startDate: "",
//         endDate: "",
//     });
//     const [isEditing, setIsEditing] = useState(false);

//    const user = await getServerSession(authOptions);

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         setIsEditing(true);
//     };

//   return (
//     <div className="container flex flex-col gap-6">
//       <LargeHeading>Welcome back, {user.user.name}</LargeHeading>
//       {/* {add filter input} */}
//       <div className="flex flex-col gap-6 items-center">
//         <FilterIcon className="mx-auto h-12 w-12 text-gray-400" />
//         {/* <LargeHeading className="text-center">
//           Please enter your search parameters
//         </LargeHeading> */}
//         <Paragraph>Please Enter search parameters</Paragraph>
//       </div>
//       <form
//         onSubmit={handleSubmit}
//         className="mt-6 sm:flex sm:items-center"
//         action="#"
//       >
//         <div className="relative rounded-md shadow-sm sm:min-w-0 sm:flex-1">
//           <Input
//             placeholder="Enter the group you belong to"
//             value={dynamicQuery.groupId}
//             onChange={(e) =>
//               setDynamicQuery({ ...dynamicQuery, groupId: e.target.value })
//             }
//           />

//           <Input
//             placeholder="Enter month in YYYY-MM format"
//             value={dynamicQuery.startDate}
//             type="date"
//             onChange={(e) =>
//               setDynamicQuery({ ...dynamicQuery, startDate: e.target.value })
//             }
//           />
//           <Input
//             placeholder="Enter end date for your search"
//             value={dynamicQuery.endDate}
//             type="date"
//             onChange={(e) =>
//               setDynamicQuery({ ...dynamicQuery, endDate: e.target.value })
//             }
//           />
//         </div>
//         <div className="mt-6 flex justify-center sm:mt-0 sm:ml-4 sm:flex-shrink-0">
//           <Button disabled={!dynamicQuery} isLoading={isEditing}>
//             Search
//           </Button>
//         </div>
//       </form>
//       <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start items-center">
//         <ExpenseOptions expenses={expenses} />
//       </div>

//       <Paragraph className="text-center md:text-left mt-4 -mb-4">
//         Your Expense history:
//       </Paragraph>

//       <Table expenses={expenses} />
//       <div className="text-center font-semibold md:text-left mt-4 -mb-4">
//         {Object.entries(userTotals).map(([userName, total]) => (
//           <Paragraph key={userName}>
//             Total for User {userName}: ${total.toFixed(2)}
//           </Paragraph>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default GroupFilter;
