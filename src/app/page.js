import Banner from "@/component/Banner";
import ExtraSection from "@/component/ExtraSection";
import Features from "@/component/Features";
import IdeaCard from "@/component/IdeaCard";
import Image from "next/image";

export default async function  Home () {
    const res = await fetch('http://localhost:8000/idea')
    const ideas = await res.json();
    const newIdea = ideas.slice(0,3)
  return (
    <div>
  <Banner></Banner>
            <h1 className=" mt-20 font-bold text-4xl text-green-500 max-w-7xl mx-auto">Trending Ideas</h1>
            <div className=" p-6 grid grid-cols-1 md:grid-cols-3 gap-5">
             
                {
                    newIdea.map(idea=><IdeaCard key={idea._id} idea={idea}></IdeaCard>)
                    
                }
            </div>
  <Features></Features>
  <ExtraSection></ExtraSection>
    </div>
  );
}
