"use client";
import { authClient } from '@/lib/auth-client'; 
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const MyInteractions = () => {
  const [interactions, setInteractions] = useState([]);
  const [loading, setLoading] = useState(true);

  const { data: session, isPending } = authClient.useSession();
  const currentUser = session?.user;


  useEffect(() => {
    const fetchInteractions = async () => {
      if (!currentUser?.email) return;

      try {
        const res = await fetch(`http://localhost:8000/user-interactions/${currentUser.email}`);
        if (res.ok) {
          const data = await res.json();
          setInteractions(data);
        }
      } catch (error) {
        console.error("Error fetching interactions:", error);
      } finally {
        setLoading(false);
      }
    };

    if (!isPending) {
      fetchInteractions();
    }
  }, [currentUser, isPending]);


  if (isPending || (currentUser && loading)) {
    return <div className="p-10 text-center font-medium text-gray-500">Loading your interactions...</div>;
  }

 
  if (!currentUser) {
    return (
      <div className="max-w-4xl mx-auto mt-10 p-6 text-center">
        <p className="text-red-500 font-semibold text-lg">Please log in to view your interactions.</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto mt-10 px-4">
      {/* হেডার সেকশন */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">My Interactions</h1>
        <p className="text-gray-500 text-sm mt-1">View Ideas you have liked and comments you have made</p>
      </div>

      {/* ট্যাব বা কাউন্টার */}
      <div className="border-b border-gray-200 mb-6">
        <div className="text-blue-600 font-semibold pb-2 border-b-2 border-blue-600 inline-block text-sm">
          Comments ({interactions.length})
        </div>
      </div>

      {/* কমেন্টের কার্ড লিস্ট */}
      {interactions.length === 0 ? (
        <div className="text-center py-10 text-gray-400 italic">
          You have not commented on any ideas yet!
        </div>
      ) : (
        <div className="space-y-4">
          {interactions.map((item) => (
            <div 
              key={item._id} 
              className="p-5 border border-gray-100 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex justify-between items-start">
                {/* যে আইডিয়ায় কমেন্ট করা হয়েছে তার লিংক ও টাইটেল */}
                <Link href={`/ideas/${item.ideaId}`}>
                  <h3 className="text-lg font-bold text-blue-600 hover:underline cursor-pointer">
                    {item.ideaTitle}
                  </h3>
                </Link>
                
                {/* টাইমস্ট্যাম্প */}
                <span className="text-xs text-gray-400">
                  {new Date(item.timestamp).toLocaleDateString()} at{' '}
                  {new Date(item.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
              </div>

              {/* কমেন্ট টেক্সট */}
              <div className="mt-3 bg-gray-50 p-3 rounded-lg border-l-4 border-blue-400">
                <p className="text-gray-700 text-sm italic">
                  {item.commentText}
                </p>
              </div>

              {/* ইউজার ইনফো (নিচে ছোট করে দেখানোর জন্য) */}
              <div className="mt-3 flex items-center gap-2">
               
                <span className="text-xs text-gray-500 font-medium">{item.userName}</span>
                {item.isEdited && (
                  <span className="text-xs text-gray-400 italic ml-1">(edited)</span>
                )}
              </div>

            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyInteractions;