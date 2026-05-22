"use client"
import { authClient } from '@/lib/auth-client';
import { Button, Card, FieldError, Input, Label, ListBox, TextArea, TextField,Select } from '@heroui/react';
// import toast from 'react-hot-toast';

const AddIdea = ({idea = {}}) => {
 const { data: session, } = authClient.useSession() 
        const user = session?.user;
        console.log(user);

//   const {_id,targetAudience,
// ideaTitle,
// imageUrl,
// proposedSolution,
// problemStatement,
// shortDescription} = idea;

// const handleMyIdea = async()=>{
// const myData = {
// userId:user?.id,
// userImage:user?.image,
// userName:user?.name,
// ideaId :_id,
// ideaTitle,
// targetAudience,
// imageUrl,
// proposedSolution,
// problemStatement,
// shortDescription
// }

// const res = await fetch('http://localhost:8000/newIdea',{

// })
// }



    const onSubmit =async(e)=>{
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const idea = Object.fromEntries(formData.entries())
    // console.log(idea);
idea.userId = user?.id;


       const res = await fetch('http://localhost:8000/idea',{
            method:'POST',
            headers:{
            'content-type' :'application/json'
            },
            body:JSON.stringify(idea)
        })
        const data = await res.json()    
        console.log(data);
    }
    
    return (
        <div className="p-5 max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold">Add Idea</h1>

        <Card>
            <form onSubmit={onSubmit}
            className="p-10 space-y-8 max-w-3xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Destination Name */}
              <div className="md:col-span-2">
                <TextField name="ideaTitle" isRequired>
                  <Label>Idea Title</Label>
                  <Input placeholder="" className="rounded-2xl" />
                  <FieldError />
                </TextField>
              </div>

              {/* S.description */}
              <TextField name="shortDescription" isRequired>
                <Label>Short Description</Label>
                <Input placeholder="Well" className="rounded-2xl" />
                <FieldError />
              </TextField>

              {/* Category - Updated Select Component */}
              <div>
                <Select
                  name="category"
                  isRequired
                  className="w-full"
                  placeholder="Select category"
                >
                  <Label>Category</Label>
                  <Select.Trigger className="rounded-2xl">
                    <Select.Value />
                    <Select.Indicator />
                  </Select.Trigger>
                  <Select.Popover>
                    <ListBox>
                      <ListBox.Item id="Tech" textValue="Tech">
                        Tech 
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                      <ListBox.Item id="Health" textValue="Health">
                        Health
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                      <ListBox.Item id="AI" textValue="AI">
                        AI
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                      <ListBox.Item id="Education" textValue="Education">
                        Education
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                      <ListBox.Item id="Productivity" textValue="Productivity">
                        Productivity
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                      <ListBox.Item id="Adventure" textValue="Adventure">
                        Adventure
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                    </ListBox>
                  </Select.Popover>
                </Select>
              </div>

              {/* Price */}
              <TextField name="targetAudience"  isRequired>
                <Label>Target Audience</Label>
                <Input
                //   type="number"
                  placeholder=""
                  className="rounded-2xl"
                />
                <FieldError />
              </TextField>

              {/* Duration */}
              <TextField name="problemStatement" isRequired>
                <Label>Problem Statement</Label>
                <Input
                  placeholder=""
                  className="rounded-2xl"
                />
                <FieldError />
              </TextField>

              {/* Departure Date */}
              <div className="md:col-span-2">
                <TextField name="proposedSolution"  isRequired>
                  <Label>Proposed Solution</Label>
                  <Input  className="rounded-2xl" />
                  <FieldError />
                </TextField>
              </div>

              {/* Image URL - Removed preview */}
              <div className="md:col-span-2">
                <TextField name="imageUrl" >
                  <Label>Image URL</Label>
                  <Input
                    type="url"
                    placeholder="https://example.com/bali-paradise.jpg"
                    className="rounded-2xl"
                  />
                  <FieldError />
                </TextField>
              </div>

              {/* Description */}
              <div className="md:col-span-2">
                <TextField name="description" isRequired>
                  <Label>Detailed Description</Label>
                  <TextArea
                    placeholder="Describe the idea-vault experience..."
                    className="rounded-3xl"
                  />
                  <FieldError />
                </TextField>
              </div>
            </div>

            {/* Buttons */}

            <Button
            //  onClick={handleMyIdea}
              type="submit"
              variant="outline"
              className=" rounded-none w-full bg-cyan-500 text-white"> Add Idea</Button>
          </form>
        </Card>
        </div>
    );
};

export default AddIdea;