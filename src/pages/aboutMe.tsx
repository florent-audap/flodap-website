import { SkillsIT } from "../components/about/skillsIT";
import { Timeline } from "../components/about/timiline";

export default function AboutMePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4">About Me</h1>
        <p>You will know a lot of things about my life until now</p>
      </div>
      {/* Timeline part */}
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">My life timeline</h1>
      </div>
      <Timeline />
      {/* Divider */}
      <div className="divider" />
      {/* Skills part */}
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">My IT skills</h1>
        <p>
          These experiences enabled me to gain extensive knowledge in
          mathematics, physics, and various other subjects. In this section, I
          will discuss IT tools and programming languages I am familiar with.
        </p>
      </div>
      <SkillsIT />
    </div>
  );
}
