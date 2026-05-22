"use client";

import {Envelope} from "@gravity-ui/icons";
import {Button, FieldError, Input, Label, ListBox, Modal, Surface, TextArea, TextField,Select} from "@heroui/react";

export function EditModal({_id}) {
      const onSubmit =async(e)=>{
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const idea = Object.fromEntries(formData.entries())
    console.log(idea);

       const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/idea/${_id}`,{
            method:'PATCH',
            headers:{
            'content-type' :'application/json'
            },
            body:JSON.stringify(idea)
        })
        const data = await res.json()
        console.log(data);
    }
  return (
    <Modal>
     {/* <div> */}
       <Button variant="outline" className={'border rounded-none'}>Edit</Button>
     {/* </div> */}
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-xl">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <Envelope className="size-5" />
              </Modal.Icon>
              <Modal.Heading>Edit your idea-vault</Modal.Heading>
              
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                 <form onSubmit={onSubmit}
                           className="overflow-hidden p-10 space-y-8 "
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
                                   placeholder=""
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
               <Modal.Footer>
              <Button slot="close" variant="secondary">
                Cancel
              </Button>
              <Button type="submit" slot="close">Save</Button>
            </Modal.Footer>
                         </form>
              </Surface>
            </Modal.Body>
            
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}