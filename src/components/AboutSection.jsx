import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Who <span className="text-primary">I am?</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Final-Year CSE Student | Full Stack Developer | AI Enthusiast
            </h3>

            <p className="text-muted-foreground text-justify">
              I’m <strong>Dhanushkumar M</strong>, a final-year Computer Science and Engineering student at PSG College of Technology, passionate about building meaningful digital solutions.
              I specialize in full-stack development using React.js, Node.js, Express, and MongoDB.
            </p>

            <p className="text-muted-foreground text-justify">
              With hands-on experience in delivering projects like SpotWise, CampusConnect, and trackX, I blend technical skills with societal impact. I’ve also explored AI & ML through internships, integrating Azure services and intelligent document handling systems.
            </p>

            <p className="text-muted-foreground text-justify">
              I'm actively upskilling with AWS Cloud, UI/UX Design, and collaborating on open-source and college club activities. I believe in empathy-driven development and continuous learning.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>
            <a
              href="/projects/Dhanushkumar_M_Resume.pdf"
              target="_blank"
              className="cosmic-button">
              Download My Resume →
            </a>

            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Full Stack Development</h4>
                  <p className="text-muted-foreground text-justify">
                    Building scalable MERN stack web applications with real-world use cases and deployment.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">AI & Cloud Integration</h4>
                  <p className="text-muted-foreground text-justify">
                    Applied AI in academic platforms using Azure AI & Blob Storage. Learning AWS Cloud to scale apps.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Leadership & Collaboration</h4>
                  <p className="text-muted-foreground text-justify">
                    Core member in NSS, Cybersecurity, and EYE Club. Love collaborating in teams and driving initiatives.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
