import CommentSection from '@/component/CommentSection';
// import { EditModal } from '@/component/EditModal';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import Image from 'next/image';
import React from 'react';

const DetailsIdea =async ({params}) => {
    const {id} = await params
    const {token} = await auth.api.getToken({
    headers:await headers()
    })
    console.log(token);

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/idea/${id}`,{
    headers:{
        authorization:`Bearer ${token}`
    }
    })
    const idea =await res.json()
    console.log(idea);
     const {targetAudience,category,description,
ideaTitle,
imageUrl,
proposedSolution,
problemStatement,
shortDescription} = idea;

const session = await auth.api.getSession({
headers:await headers()
});

const user = session?.user;

    // console.log(idea);
    return (
        <div className="max-w-7xl mx-auto mt-10">
            
           <Image
            className="w-400 h-80% object-cover"
            src={imageUrl}
            alt={ideaTitle}
            height={400}
            width={400}
           />

              <div className="p-3">
                    <h1 className="text-2xl font-bold">{ideaTitle}</h1>
                    <p className="text-sm text-muted">{description}</p>                    
                    <p className="text-sm text-muted">{proposedSolution}</p>
                    <p>{targetAudience}</p>
                    <p>{problemStatement}</p>
                    <p>{shortDescription}</p>
                </div>
<CommentSection ideaId={id} currentUser={user}></CommentSection>
        </div>
    );
};

export default DetailsIdea;