"use client";
import {useState} from "react";
import GroupForm from "@/ui/GroupForm";
import {useRouter} from "next/navigation";
import {connect} from 'react-redux';
import {setExpenses} from "@/redux/action";
import {toast} from "@/ui/ToastComponent";


const GroupExpenses = ({setExpenses}) => {
    const [dynamicQuery, setDynamicQuery] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const router = useRouter();

    const updateQuery = async (e) => {
        e.preventDefault();
        setIsEditing(true);

        try {
            const res = await fetch(`/api/group/${dynamicQuery.startDate}/${dynamicQuery.endDate}/${dynamicQuery.groupId}`);
            const expenses = await res.json();


            if (expenses.length === 0) {
                toast({
                    title: "No expense/group found for the given input .",
                    message: "Please Select a valid date range or group.",
                    type: "error",
                })

                router.push('/dashboard');
                return;
            }

            if (res.status === 200) {

                setExpenses(expenses);

                router.push('/group-search');
            }

        } catch (error) {
            toast({
                title: "Something went wrong.",
                message: "Please try again later.",
                type: "error",
            })

        } finally {
            setIsEditing(false);
        }
    };

    return (

        <GroupForm
            dynamicQuery={dynamicQuery}
            setDynamicQuery={setDynamicQuery}
            isEditing={isEditing}
            updateQuery={updateQuery}
        />
    );
};

export default connect(null, {setExpenses})(GroupExpenses);