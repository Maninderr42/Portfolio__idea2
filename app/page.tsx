import { Encryption } from "@/components/main/encryption";
import { Hero } from "@/components/main/hero";
import { Projects } from "@/components/main/projects";
import { Skills } from "@/components/main/skills";
import { WorkExperience } from "@/components/main/WorkExperience";
import Testimonials from "@/components/main/Testimonials";
import Overview from "@/components/main/Overview";
import { ProjectCard } from "@/components/main/ProjectCard";
import { ContactForm } from "@/components/main/ContactForm";
import { PROJECTS } from "@/constants";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <Overview />

        <Skills />
        <section id="work-experience">
          <WorkExperience />
        </section>
        <Encryption />
        {/* <Projects /> */}
        
        {/* ProjectCard Section */}
        <section id="projects" className="px-6 md:px-16 lg:px-24 py-20">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10 mb-10 text-center">
              Featured Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {PROJECTS.map((project, index) => (
                <ProjectCard
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  projectLink={project.link}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>

        <Testimonials />
        <section id="contact-us">
          <ContactForm />
        </section>
      </div>
    </main>
  );
}
