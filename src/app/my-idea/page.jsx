import { Delete } from "@/component/Delete";
import { EditModal } from "@/component/EditModal";
import IdeaCard from "@/component/IdeaCard";
import { auth } from "@/lib/auth";
import { Button } from "@heroui/react";
import { headers } from "next/headers";
import React from "react";

const MyIdea = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  // const res = await fetch(`/my-idea?userId=${session?.user?.id}`);
  const res = await fetch(
  `${process.env.NEXT_PUBLIC_SERVER_URL}/my-idea?userId=${session?.user?.id}`
);
  const myIdea = await res.json();
  console.log(myIdea);
  return (
    <div className="mt-10  flex justify-between max-w-7xl mx-auto">
      <div className="items-center">
        <div className=" p-6 grid grid-cols-1 md:grid-cols-3 gap-5">
          {myIdea.map((idea) => (
            <IdeaCard key={idea._id} idea={idea}></IdeaCard>
          ))}
        </div>
      </div>
      <div className="flex gap-3 justify-end">
        <EditModal></EditModal>
        <Delete></Delete>
      </div>
    </div>
  );
};

export default MyIdea;
