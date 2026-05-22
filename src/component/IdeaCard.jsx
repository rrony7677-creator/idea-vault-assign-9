import { Button } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import { EditModal } from './EditModal';
import { Delete } from './Delete';
// import React from 'react';

const IdeaCard = ({idea}) => {
   
    const {_id,targetAudience,description,ideaTitle,imageUrl,proposedSolution} = idea;
    return (
        <div className=" border p-3 rounded-xl">
            <div >
                <Image
                className='rounded-xl'
                src={imageUrl} 
                alt={ideaTitle}                           
                height={400}
                width={400}
            />
            <div>
                <div className="p-3">
                    <h1 className="text-2xl font-bold">{ideaTitle}</h1>
                    <p className="text-sm text-muted">{description}</p>                    
                    <p className="text-sm text-muted">{proposedSolution}</p>
                    <p>{targetAudience}</p>
                </div>
            </div>
           <Link href={`/ideas/${_id}`}> 
           <Button variant='outline' className="w-full">View Details 
            </Button></Link>
        
            
            </div>
           
        </div>
    );
};

export default IdeaCard;