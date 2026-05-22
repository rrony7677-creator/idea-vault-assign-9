// import React from "react";

import { Card } from "@heroui/react";

export default function Features() {
const tips = [
  {
    id: 1,
    title: "Capture Immediately",
    desc: "Inspiration fades fast. Log your raw thoughts in the vault the moment they strike, before the details slip away.",
    icon: "⚡"
  },
  {
    id: 2,
    title: "Refine and Expand",
    desc: "Revisit your stored ideas regularly to flesh out the technical details, target audience, and execution steps.",
    icon: "💎"
  },
  {
    id: 3,
    title: "Tag and Categorize",
    desc: "Keep your vault organized. Use specific tags like #SaaS, #AI, or #Design so you can easily filter and find them later.",
    icon: "🏷️"
  },
  {
    id: 4,
    title: "Seek Collaborator Feedback",
    desc: "Share select ideas with trusted peers or the community to get constructive criticism and validate market demand.",
    icon: "🤝"
  },
  {
    id: 5,
    title: "Track Project Progress",
    desc: "Move your concepts from 'Draft' to 'In Progress' or 'Launched' to monitor how your brainstorming translates into real projects.",
    icon: "📈"
  },
  {
    id: 6,
    title: "Protect Key Innovations",
    desc: "While sharing breeds collaboration, keep your core proprietary formulas or sensitive logic secure until you are ready to launch.",
    icon: "🔒"
  }
];

  return (
    <div className="py-10 px-6 mt-15.5">
      
      <div className="text-center mb-8">
        <h2 className="text-red-600 font-bold text-3xl mb-1">Idea Vault Tips</h2>
        <p className="text-gray-500 ">
         Follow these important guidelines to maximize your creative repository and manage your concepts effectively.
        </p>
      </div>

     
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
        {tips.map((tip) => (
          <Card 
            key={tip.id} 
            className="bg-[#0f172a]  hover:bg-purple-400 text-white border-none shadow-xl rounded-xl"
          >
            <Card className="p-5 flex flex-row items-start gap-4 hover:bg-green-300">
             
              <div className="text-xl ">
                {tip.icon}
              </div>
              
              <div>
                <h3 className="text-sm font-bold mb-1 text-purple-400">{tip.title}</h3>
                <p className="text-gray-400 text-[11px] leading-relaxed">
                  {tip.desc}
                </p>
              </div>
            </Card>
          </Card>
        ))}
      </div>
    </div>
  );
}