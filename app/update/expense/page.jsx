"use client";
import Form from '@/components/ui/Form';
import { toast } from '@/components/ui/toast';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';


function UpdatePrompt() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const expenseId = searchParams.get("id");
   

    const [expense, setExpense] = useState({ description: "", amount: 0 , date: new Date()});
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        const getExpenseDetails = async () => {
          const response = await fetch(`/api/expense/${expenseId}`);
          const data = await response.json();
            
          setExpense({
            description: data.description,
            amount: data.amount,
            group: data.group,
            date: data.date,
          });
        };
       
        if (expenseId) getExpenseDetails();
        
      }, [expenseId]);
      
    async function updateExpense(e) {
        e.preventDefault();
        setIsEditing(true);
        try {
            fetch(`/api/expense/${expenseId}`, {
                method: "PATCH",
                body: JSON.stringify({
                    description: expense.description,
                    amount: (expense.amount),
                    date: (expense.date),
                }),
                headers: {
                    "Content-Type": "application/json",
                },
            })
            .then(() => {
                toast({
                    title: "Success",
                    message: "Expense updated successfully",
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
            setIsEditing(false);
           
        }
    }
 
  return (
    <Form 
    type='Edit'
    expense={expense}
    setExpense={setExpense}
    isEditing={isEditing}
    updateExpense={updateExpense}
    />
  )
}

export default UpdatePrompt