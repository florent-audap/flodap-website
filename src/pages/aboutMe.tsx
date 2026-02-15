import { SkillsIT } from "../components/about/skillsIT";
import { Timeline } from "../components/about/timiline";

export default function AboutMePage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-5xl font-bold">About Me</h1>
        <p>You will know a lot of things about my life until now</p>
      </div>
      {/* Timeline part */}
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-3xl font-bold">My life timeline</h1>
      </div>
      <Timeline />
      {/* Divider */}
      <div className="divider" />
      {/* Skills part */}
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-3xl font-bold">My IT skills</h1>
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
