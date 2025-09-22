"use client"
import { Button } from '@/components/ui/button'
import useSpeechToText from 'react-hook-speech-to-text';
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Webcam from 'react-webcam'
import { Mic, MicIcon, StopCircle } from 'lucide-react';
import { toast } from 'sonner';
import { chatSession } from '@/utils/GeminiAIModal';
import { db } from '@/utils/db';
import { UserAnswer } from '@/utils/schema';
import { useUser } from '@clerk/nextjs';
import moment from 'moment';

function RecordAnswerSection({mockInterviewQuestion,activeQuestionIndex,interviewData}) {
    
        useEffect(() => {
        console.log("Questions Updated:", mockInterviewQuestion); // Logs when questions change
    }, [mockInterviewQuestion]);
    
    const [userAnswer,setUserAnswer]=useState('');
    const {user}=useUser();
    const [loading,setLoading]=useState(false);
    const {
        error,
        interimResult,
        isRecording,
        results,
        startSpeechToText,
        stopSpeechToText,
        setResults
      } = useSpeechToText({
        continuous: true,
        useLegacyResults: false
      });

    useEffect(() => {
        results.map((result) => (
            setUserAnswer(prevAns => prevAns + result?.transcript)
        ));
    }, [results]);

    useEffect(() => {
        console.log("Results:", results);
        console.log("User Answer:", userAnswer);
    }, [results, userAnswer]);

    useEffect(() => {
        if (!isRecording && userAnswer.length > 10) {
            UpdateUserAnswer();
        }
    }, [userAnswer]);

    const StartStopRecording = async () => {
        try {
            if (isRecording) {
                stopSpeechToText();
            } else {
                await startSpeechToText();
            }
        } catch (error) {
            console.error("Error accessing microphone:", error);
            toast.error("Please allow microphone access to record your answer.");
        }
    };

    const UpdateUserAnswer = async () => {
        try {
            console.log("User Answer:", userAnswer);

            const feedbackPrompt = `Question: ${mockInterviewQuestion[activeQuestionIndex]?.question}, User Answer: ${userAnswer}, Please provide feedback in JSON format with rating and feedback fields.`;
            console.log("Feedback Prompt:", feedbackPrompt);

            const result = await chatSession.sendMessage(feedbackPrompt);
            console.log("Feedback Response:", result.response.text());

            setLoading(true);

            const mockJsonResp = (await result.response.text())
                .replace("```json", "")
                .replace("```", "");
            console.log(mockJsonResp);

            const JsonFeedbackResp = JSON.parse(mockJsonResp);

            const resp = await db.insert(UserAnswer).values({
                mockIdRef: interviewData?.mockId,
                question: mockInterviewQuestion[activeQuestionIndex]?.question,
                correctAns: mockInterviewQuestion[activeQuestionIndex]?.answer,
                userAns: userAnswer,
                feedback: JsonFeedbackResp?.feedback,
                rating: JsonFeedbackResp?.rating,
                userEmail: user?.primaryEmailAddress?.emailAddress,
                createdAt: moment().format("DD-MM-yyyy"),
            });

            console.log("DB Insert Response:", resp);
            console.log({
  mockIdRef: interviewData?.mockId,
  question: mockInterviewQuestion[activeQuestionIndex]?.question,
  correctAns: mockInterviewQuestion[activeQuestionIndex]?.answer,
  userAns: userAnswer,
  feedback: JsonFeedbackResp?.feedback,
  rating: JsonFeedbackResp?.rating,
  userEmail: user?.primaryEmailAddress?.emailAddress,
  createdAt: moment().format("DD-MM-yyyy"),
});

            if (resp) {
                toast('User answer recorded successfully');
                setUserAnswer('');
                setResults([]);
            }
            setResults([]);
        } catch (error) {
            console.error("Error updating user answer:", error);
            toast.error("Failed to record your answer. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='flex items-center justify-center flex-col'>
            <div className='flex flex-col mt-20 justify-center items-center bg-black rounded-lg p-5'>
                <Image src={'/webcam.png'} width={200} height={200}
                    className='absolute' />
                <Webcam
                    mirrored={true}
                    style={{
                        height: 300,
                        width: '100%',
                        zIndex: 10,
                    }}
                />
            </div>
            <Button disabled={loading} variant="outline" className="my-10" onClick={StartStopRecording}>
  {isRecording ? (
    <h2 className="text-red-600 flex gap-2">
      <StopCircle /> Stop Recording
    </h2>
  ) : (
    <h2 className="text-primary flex gap-2 items-center">
      <Mic /> {loading ? "Processing..." : "Record Answer"}
    </h2>
  )}
</Button>
        </div>
    )
}

export default RecordAnswerSection