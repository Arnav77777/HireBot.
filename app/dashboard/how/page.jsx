// /pages/dashboard/how/page.jsx

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FiCheckCircle } from "react-icons/fi"; // For icons in steps

const How = () => {
  return (
    <div className="container mx-auto p-6 rounded-lg">
      <h2 className="text-3xl font-extrabold mb-8">How It Works</h2>
      
      <p className="text-lg text-gray-700 mb-6">
        Welcome to our platform! Our project is designed to help you quickly prepare for technical interviews by providing tailored questions, study materials, and helpful insights. Here’s how it works:
      </p>

      {/* Step 1 */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-2xl font-semibold text-primary flex items-center gap-2 mb-4">
          <FiCheckCircle size={24} className="text-green-500" />
          Step 1: Create an Account
        </h2>
        <p className="text-gray-600 text-lg">
          Start by signing up and creating your account. Once you're logged in, you’ll be able to access the dashboard, which provides an overview of all the resources available.
        </p>
      </div>

      {/* Step 2 */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-2xl font-semibold text-primary flex items-center gap-2 mb-4">
          <FiCheckCircle size={24} className="text-green-500" />
          Step 2: Explore Questions
        </h2>
        <p className="text-gray-600 text-lg">
          Our system offers a curated list of questions and answers for a range of topics. You can search through different sections such as "DevOps", "Machine Learning", "Cybersecurity", and more. Each section contains frequently asked questions, explanations, and relevant examples.
        </p>
      </div>

      {/* Step 3 */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-2xl font-semibold text-primary flex items-center gap-2 mb-4">
          <FiCheckCircle size={24} className="text-green-500" />
          Step 3: Track Your Progress
        </h2>
        <p className="text-gray-600 text-lg">
          As you study, you can mark questions as completed and track your progress. The dashboard will show which sections you have covered and which ones need more attention.
        </p>
      </div>

      {/* Step 4 */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-2xl font-semibold text-primary flex items-center gap-2 mb-4">
          <FiCheckCircle size={24} className="text-green-500" />
          Step 4: Upgrade for More Features
        </h2>
        <p className="text-gray-600 text-lg">
          If you want to access advanced features like personalized question recommendations, detailed analytics, and more, consider upgrading your account. Our upgrade options are designed to fit your learning needs.
        </p>
      </div>

      {/* Step 5 */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-2xl font-semibold text-primary flex items-center gap-2 mb-4">
          <FiCheckCircle size={24} className="text-green-500" />
          Step 5: Get Interview Ready
        </h2>
        <p className="text-gray-600 text-lg">
          With our interactive resources and tailored practice materials, you’ll be well-prepared for your interviews. We help you not only prepare theoretically but also guide you through how to approach real-world scenarios.
        </p>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-semibold text-primary mb-4">Why Choose Us?</h2>
        <p className="text-lg text-gray-600">
          We provide an all-in-one platform that ensures you get the right resources at the right time. Whether you're a beginner or an experienced professional, our platform helps you prepare effectively for technical interviews and ace them with confidence!
        </p>
      </div>

      {/* Button to Dashboard */}
      <div className="flex justify-center">
        <Link href="/dashboard">
          <Button className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-all">
            Go to Dashboard
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default How;
