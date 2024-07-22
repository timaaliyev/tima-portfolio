// components
import { Footer, Navbar } from "@/components";

// sections
import Hero from "./hero";
// import Clients from "./clients";
import Projects from "./projects";
import Skills from "./skills";
// import Resume from "./resume";
// import PopularClients from "./popular-clients";
import Certificates from "./certificates";
import ContactForm from "./contact-form";

export default function Portfolio() {
  return (
    <>
      <Navbar />
      <Hero />
      {/* <Clients /> */}
      <Skills />
      <Projects />
      <Certificates />
      {/* <Resume /> */}
      {/* <Testimonial /> */}
      {/* <PopularClients /> */}
      <ContactForm />
      <Footer />
    </>
  );
}
