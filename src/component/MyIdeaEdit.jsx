import { Button } from '@heroui/react';
import Image from 'next/image';
import React from 'react';

const MyIdeaEdit = ({idea}) => {
    const {_id,targetAudience,description,ideaTitle,imageUrl,proposedSolution} = idea;
    return (
        <div>
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
                       <Button variant='outline' className="w-full">Edit
                        </Button>
                    
                        
                        </div>
        </div>
    );
};

export default MyIdeaEdit;