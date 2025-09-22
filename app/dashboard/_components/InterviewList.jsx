"use client"
import { db } from '@/utils/db';
import { MockInterview } from '@/utils/schema';
import { useUser } from '@clerk/nextjs'
import { desc, eq } from 'drizzle-orm';
import React, { useEffect, useState } from 'react'
import InterviewItemCard from './InterviewItemCard';

function InterviewList() {

    const {user}=useUser();
    const [interviewList,setInterviewList]=useState([]);

    useEffect(()=>{
        user&&GetInterviewList();
    },[user]);

    useEffect(() => {
        console.log("Interview List:", interviewList);
    }, [interviewList]);

    const GetInterviewList=async()=>{
        const result = await db
        .select()
        .from(MockInterview)
        .where(eq(MockInterview.createdBy, user?.primaryEmailAddress?.emailAddress))
        .orderBy(desc(MockInterview.id));
        
        console.log(result);
        setInterviewList(result);
    }

    // Delete interview by mockId
    const handleDelete = async (mockId) => {
        await db.delete(MockInterview).where(eq(MockInterview.mockId, mockId));
        setInterviewList(prev => prev.filter(item => item.mockId !== mockId));
    }

    return (
    <div>
        <h2 className='font-medium text-xl'>Previous Mock Interviews</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-3'>
            {interviewList && interviewList.map((interview, index) => (
                <InterviewItemCard 
                    interview={interview}
                    key={interview.mockId || index}
                    onDelete={() => handleDelete(interview.mockId)}
                />
            ))}
        </div>
    </div>
    )
}

export default InterviewList