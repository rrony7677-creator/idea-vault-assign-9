import { Card } from "@heroui/react";


export default function ExtraSection() {
const ideasData = [
  {
    title: "Publish to the Public Feed",
    desc: "Take your concept public. Move your idea from your private vault straight to the community feed to spark open innovation and discussion."
  },
  {
    title: "Solve Real-World Problems",
    desc: "The best ideas address clear pain points. Detail the exact problem your concept solves so potential users and builders instantly see its value."
  },
  {
    title: "Explore Popular Trends",
    desc: "Browse the most upvoted and discussed concepts across booming industries like AI, SaaS, and FinTech to see what is capturing the market's interest."
  },
  {
    title: "Engage via Comments",
    desc: "Don't just share—interact. Use the comments section to answer questions, explain your technical stack, and collaborate with interested peers."
  },
  {
    title: "Build Your Audience",
    desc: "Establish yourself as an innovator. Consistently contributing high-quality startup concepts helps you attract a dedicated following of early adopters."
  },
  {
    title: "Find Your Next Co-Founder",
    desc: "Great things are rarely built alone. Use the collaborative space to connect with developers, designers, or marketers who match your vision."
  }
];
  return (
    <div className="py-12 px-6 bg-white">
     
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-green-700 mb-2">Platform Dynamics</h2>
        <p className="text-gray-500 max-w-xl mx-auto text-sm">
          Discover how our community validates concepts, tracks trending innovation, and solves real-world problems together.
        </p>
      </div>

      <div className="max-w-5xl mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {ideasData.map((item, index) => (
          <Card key={index} className="border-none shadow-sm bg-gray-500 hover:bg-black hover:shadow-md transition-all cursor-pointer">
            <Card className="p-6 hover:bg-green-400">
              <h3 className="text-green-700 font-bold text-lg mb-3">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </Card>
          </Card>
        ))}
      </div>
    </div>
  );
}