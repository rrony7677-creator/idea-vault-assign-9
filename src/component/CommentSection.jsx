"use client";
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import toast from 'react-hot-toast';

const CommentSection = ({ ideaId, currentUser }) => {
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");
  const [editingCommentId, setEditingCommentId] = useState(null);
  const [editText, setEditText] = useState("");

  
  const fetchComments = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/comments/${ideaId}`);
      const data = await res.json();
      setComments(data);
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };

  useEffect(() => {
    if (ideaId) fetchComments();
  }, [ideaId]);

 
  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    if (!commentText.trim()) return;
    if (!currentUser) {
      toast.error("Please login to comment");
      return;
    }

    const commentData = {
      ideaId,
      commentText,
      userName: currentUser.name || "Anonymous",
      userEmail: currentUser.email,
      // userImage: currentUser.image || "https://placeholder.com/150",
      timestamp: new Date().toISOString()
    };

    try {
      const res = await fetch('${process.env.NEXT_PUBLIC_SERVER_URL}/comment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(commentData)
      });
      if (res.ok) {
        setCommentText("");
        fetchComments();
        toast.success("Comment posted!");
      }
    } catch (error) {
      toast.error("Failed to post comment");
    }
  };

  
  const handleDeleteComment = async (id) => {
    if (!window.confirm("Are you sure you want to delete this comment?")) return;
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/comment/${id}`, {
        method: 'DELETE'
      });
      if (res.ok) {
        fetchComments();
        toast.success("Comment deleted");
      }
    } catch (error) {
      toast.error("Failed to delete comment");
    }
  };

  
  const handleEditSubmit = async (id) => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/comment/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ updatedText: editText })
      });
      if (res.ok) {
        setEditingCommentId(null);
        fetchComments();
        toast.success("Comment updated");
      }
    } catch (error) {
      toast.error("Failed to update comment");
    }
  };

  return (
    <div className="mt-8 border-t pt-6 max-w-4xl mx-auto px-4">
      <h3 className="text-xl font-bold mb-4">Comments ({comments.length})</h3>

     
      <form onSubmit={handleCommentSubmit} className="mb-6">
        <textarea
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows="3"
          placeholder="Add your comment..."
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
        />
        <button type="submit" className="mt-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
          Post Comment
        </button>
      </form>

   
      <div className="space-y-4">
        {comments.map((comment) => (
          <div key={comment._id} className="p-4 border rounded-lg bg-gray-50 flex gap-3">
            <Image src={comment.userImage} alt={comment.userName} width={40} height={40} className="w-10 h-10 rounded-full object-cover" />
            
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-semibold text-sm">{comment.userName}</span>
                  <span className="text-xs text-gray-500 ml-2">
                    {new Date(comment.timestamp).toLocaleDateString()} {new Date(comment.timestamp).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                  </span>
                  {comment.isEdited && <span className="text-xs text-gray-400 italic ml-1">(edited)</span>}
                </div>
                
                
                {currentUser?.email === comment.userEmail && (
                  <div className="flex gap-2 text-xs text-gray-600">
                    <button onClick={() => { setEditingCommentId(comment._id); setEditText(comment.commentText); }} className="hover:text-blue-600">Edit</button>
                    <button onClick={() => handleDeleteComment(comment._id)} className="hover:text-red-600">Delete</button>
                  </div>
                )}
              </div>

              {/* এডিট মোড বনাম নরমাল টেক্সট মোড */}
              {editingCommentId === comment._id ? (
                <div className="mt-2">
                  <input 
                    type="text" 
                    className="w-full p-2 border rounded" 
                    value={editText} 
                    onChange={(e) => setEditText(e.target.value)} 
                  />
                  <div className="mt-2 flex gap-2 text-xs">
                    <button onClick={() => handleEditSubmit(comment._id)} className="bg-green-600 text-white px-3 py-1 rounded">Save</button>
                    <button onClick={() => setEditingCommentId(null)} className="bg-gray-400 text-white px-3 py-1 rounded">Cancel</button>
                  </div>
                </div>
              ) : (
                <p className="text-gray-700 mt-1 text-sm">{comment.commentText}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentSection;