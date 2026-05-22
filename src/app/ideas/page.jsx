"use client"
import IdeaCard from '@/component/IdeaCard';
import React, { useEffect, useState } from 'react';
import { Button, Card, FieldError, Input, Label, ListBox, TextArea, TextField,Select, SearchField } from '@heroui/react';

const AllIdea = () => {
const [ideas,setIdeas] = useState([]);
const [searchQuery,setSearchQuery] = useState("");
const [selectCategory,setSelectCategory] = useState("all");

useEffect(()=>{
    const fetchData = async ()=>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/idea`)
    const data = await res.json();
    setIdeas(data);
    }
    fetchData();
},[]);

const filterIdeas = ideas.filter((idea)=>{
const matchesSearch = idea.ideaTitle?.toLowerCase().includes(searchQuery.toLowerCase())||
 idea.description?.toLowerCase().includes(searchQuery.toLowerCase());

 const matchesCategory = selectCategory==="all"||idea.category?.toLowerCase()===selectCategory.toLowerCase();
 return matchesSearch && matchesCategory
})



    // const res = await fetch('http://localhost:8000/idea')
    // const ideas = await res.json()
    // console.log(ideas);
    return (
        <div className="mt-10 max-w-7xl mx-auto">
          <div className="flex justify-between">

              <div>
                <h1 className="font-bold text-2xl">All Idea</h1></div>
                <div>
                    <SearchField name="search">
      <Label>Search</Label>
      <SearchField.Group>
        <SearchField.SearchIcon />
        <SearchField.Input 
          className="w-[280px]" placeholder="Search..."
          value={searchQuery}
          onChange={(e)=>setSearchQuery(e.target.value)}
          />
        <SearchField.ClearButton />
      </SearchField.Group>
    </SearchField>
                </div>
               {/* Category */}
               <div className=" ">
                          <Select
  label="Category"
  selectedKeys={[selectCategory]}
  onChange={(e) => setSelectCategory(e.target.value)} 
>
  {/* <option value ="all">Select Category(All)</option>
  <option value ="Tech">Tech</option>
  <option value ="Health">Health</option>
  <option value ="AI">AI</option>
  <option value ="Education">Education</option>
  <option value ="Productivity">Productivity</option> */}

  <Label>Select Category</Label>
      <Select.Trigger>
        <Select.Value />
        <Select.Indicator />
      </Select.Trigger>
      <Select.Popover>
        <ListBox>
          <ListBox.Item id="florida" textValue="Tech">
            Tech
            <ListBox.ItemIndicator />
          </ListBox.Item>
          <ListBox.Item id="delaware" textValue="Health">
            Health
            <ListBox.ItemIndicator />
          </ListBox.Item>
          <ListBox.Item id="california" textValue="AI">
            AI
            <ListBox.ItemIndicator />
          </ListBox.Item>
          <ListBox.Item id="texas" textValue="Education">
            Education
            <ListBox.ItemIndicator />
          </ListBox.Item>
          <ListBox.Item id="new-york" textValue="Productivity">
            Productivity
            <ListBox.ItemIndicator />
          </ListBox.Item>
          <ListBox.Item id="washington" textValue="Adventure">
            Adventure
            <ListBox.ItemIndicator />
          </ListBox.Item>
        </ListBox>
      </Select.Popover>
</Select>


                          </div>
          </div>
            

            <div className=" p-6 grid grid-cols-1 md:grid-cols-3 gap-5">
                {
                    filterIdeas.map(idea=><IdeaCard key={idea._id} idea={idea}></IdeaCard>)
                    
                }
            </div>
        </div>
    );
};

export default AllIdea;


// import {Label, ListBox, Select} from "@heroui/react";

// export function Default() {
//   return (
//     <Select className="w-[256px]" placeholder="Select one">
      // <Label>State</Label>
      // <Select.Trigger>
      //   <Select.Value />
      //   <Select.Indicator />
      // </Select.Trigger>
      // <Select.Popover>
      //   <ListBox>
      //     <ListBox.Item id="florida" textValue="Florida">
      //       Florida
      //       <ListBox.ItemIndicator />
      //     </ListBox.Item>
      //     <ListBox.Item id="delaware" textValue="Delaware">
      //       Delaware
      //       <ListBox.ItemIndicator />
      //     </ListBox.Item>
      //     <ListBox.Item id="california" textValue="California">
      //       California
      //       <ListBox.ItemIndicator />
      //     </ListBox.Item>
      //     <ListBox.Item id="texas" textValue="Texas">
      //       Texas
      //       <ListBox.ItemIndicator />
      //     </ListBox.Item>
      //     <ListBox.Item id="new-york" textValue="New York">
      //       New York
      //       <ListBox.ItemIndicator />
      //     </ListBox.Item>
      //     <ListBox.Item id="washington" textValue="Washington">
      //       Washington
      //       <ListBox.ItemIndicator />
      //     </ListBox.Item>
      //   </ListBox>
      // </Select.Popover>
//     </Select>
//   );
// }