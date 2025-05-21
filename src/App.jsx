import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/components/ui/use-toast";
import Header from "@/components/sections/Header";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import SkillsSection from "@/components/sections/SkillsSection";
import EducationSection from "@/components/sections/EducationSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/sections/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";

const App = () => {
  const { toast } = useToast();
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
      setShowScrollTop(scrollPosition > 500);
      
      const sections = ["home", "about", "experience", "skills", "education", "contact"];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth"
      });
      setActiveSection(sectionId);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    e.target.reset();
  };

  const personalInfo = {
    name: "Dharmesh Patel",
    title: "IT Infrastructure & Cybersecurity Professional",
    profileImage: "https://storage.googleapis.com/hostinger-horizons-assets-prod/d0ccdc4a-1757-41bc-88c3-0dfb17a93aa0/c63ac9e27b3f20a4922dcb4e06c73505.png",
    heroSummary: "Experienced IT Executive with expertise in IT Infrastructure, Cloud, and Cybersecurity. Passionate about implementing robust solutions and providing exceptional technical support.",
    objective: "I am actively pursuing a challenging position within the IT industry where I can harness my expertise in IT Infrastructure, cloud and cybersecurity areas to accomplish assignments successfully. I aspire to take on a role that involves providing the team with technical support, learning opportunities, fostering creativity, and exercising sound technical judgment.",
    phone: "+91 8511441147",
    email: "dh523p@gmail.com",
    location: "Ahmedabad, Gujarat, India",
    address: "New Ranip, Ahmedabad 382480",
    linkedin: "https://www.linkedin.com/in/dharmeh-patel/",
    github: "https://github.com/Dharmesh-ctrl/",
    calendly: "https://calendly.com/patel_dharmesh/30min",
  };

  const expertiseAreas = [
    { title: "IT Infrastructure", description: "Expert in server management, storage solutions, and network infrastructure", icon: "Server" },
    { title: "Cybersecurity", description: "Implementing robust security strategies and incident response", icon: "Shield" },
    { title: "Data Management", description: "Expertise in backup, storage, and recovery solutions", icon: "Database" },
    { title: "User Support", description: "Providing end-user training and technical support", icon: "Users" },
  ];

  const experience = [
    {
      company: "Medwise Overseas Pvt. Ltd.",
      role: "IT Executive",
      duration: "Dec 2023 - Present",
      responsibilities: [
        "Oversee Microsoft 365 services, including mailbox management, email creation, and administration.",
        "Develop and implement robust network security strategies, monitor security events, and respond to incidents promptly.",
        "Manage Active Directory by creating, modifying, and deleting user accounts. Implement Group Policy Objects.",
        "Provide end-to-end IT support, troubleshooting issues efficiently to minimize disruptions.",
        "Oversee server management, including NAS storage and backup management, to ensure data integrity and availability."
      ],
      theme: "blue"
    },
    {
      company: "Kirti Telnet Private Limited",
      role: "End user IT & critical system IT support",
      client: "Client: Baxter pharmaceuticals India private limited",
      duration: "Dec 2021 - Dec 2023",
      responsibilities: [
        "Provided critical IT support for Baxter Pharmaceuticals' Ahmedabad manufacturing site, ensuring seamless operations for over 1000+ users.",
        "Administered Active Directory, Windows OS, file servers, NAS storage, and Audio-Visual systems.",
        "Managed Acronis Backup Server, ensuring the integrity of daily backups and troubleshooting related issues.",
        "Implemented Windows restriction policies using Winlock software to enhance security and comply with quality requirements.",
        "Collaborated with cross-functional teams and vendors to resolve issues and implement new projects."
      ],
      theme: "indigo"
    },
    {
      company: "Acute Informatics Private Limited",
      role: "Desktop Support Engineer",
      client: "Client: Axis Bank Virtual Center, Ahmedabad",
      duration: "Jun 2021 - Dec 2021",
      responsibilities: [
        "Delivered comprehensive technical support to end-users, effectively resolving hardware and software issues.",
        "Installed, configured, and maintained desktop systems, printers, and various peripherals.",
        "Managed a detailed inventory of hardware and software assets, ensuring accurate tracking and efficient resource utilization.",
        "Collaborated with cross-functional teams to troubleshoot and resolve complex technical issues.",
        "Conducted regular system maintenance and updates, prioritizing system security and stability."
      ],
      theme: "purple"
    }
  ];

  const skills = {
    infrastructure: [
      { name: "Active Directory and GPO", level: "95%" },
      { name: "Windows Server Configuration", level: "90%" },
      { name: "Data Backup & Recovery", level: "92%" },
      { name: "Microsoft 365 Administration", level: "88%" },
      { name: "Virtualization Management", level: "85%" },
    ],
    security: [
      { name: "Network & Endpoint Security", level: "90%" },
      { name: "Incident Response & Troubleshooting", level: "93%" },
      { name: "Data Center Operations", level: "87%" },
      { name: "Email Deliverability & DNS", level: "85%" },
      { name: "End-User Training & Support", level: "95%" },
    ],
    certifications: [
      "Fortinet Certified Associate in Cybersecurity",
      "Certified cPanel Professional (CPP)",
      "Career Essentials in Cybersecurity",
      "Career Essentials in System Administration",
      "Certified Oracle Cloud Infrastructure Foundation",
      "Certified AWS Services Fundamentals",
    ]
  };

  const education = [
    {
      degree: "Bachelor of Engineering (Computer)",
      institution: "Gujarat Technological University (GTU)",
      duration: "2016 - 2020",
      cgpa: "7.8",
      description: "Completed Bachelor's degree in Computer Engineering with a focus on computer networks, database management systems, and information security.",
      theme: "blue"
    },
    {
      degree: "Diploma in Computer Engineering",
      institution: "Gujarat Technological University (GTU)",
      duration: "2013 - 2016",
      cgpa: "8.6",
      description: "Completed Diploma in Computer Engineering with distinction, gaining foundational knowledge in programming, computer hardware, and networking technologies.",
      theme: "indigo"
    }
  ];
  
  const navItems = ["home", "about", "experience", "skills", "education", "contact"];

  return (
    <div className="min-h-screen bg-background">
      <Header 
        isScrolled={isScrolled} 
        navItems={navItems} 
        activeSection={activeSection} 
        scrollToSection={scrollToSection} 
        name={personalInfo.name}
      />
      <main>
        <HeroSection 
          scrollToSection={scrollToSection} 
          name={personalInfo.name}
          title={personalInfo.title}
          summary={personalInfo.heroSummary}
          profileImage={personalInfo.profileImage}
          calendlyLink={personalInfo.calendly}
        />
        <AboutSection 
          objective={personalInfo.objective} 
          expertiseAreas={expertiseAreas}
          contactInfo={{phone: personalInfo.phone, email: personalInfo.email, location: personalInfo.location}}
          address={personalInfo.address}
        />
        <ExperienceSection experience={experience} />
        <SkillsSection skills={skills} />
        <EducationSection education={education} />
        <ContactSection 
          contactInfo={{phone: personalInfo.phone, email: personalInfo.email, address: personalInfo.address, linkedin: personalInfo.linkedin, github: personalInfo.github }}
          onSubmit={handleContactSubmit} 
        />
      </main>
      <Footer 
        name={personalInfo.name}
        title={personalInfo.title}
        linkedin={personalInfo.linkedin}
        github={personalInfo.github}
        email={personalInfo.email}
      />
      <ScrollToTopButton show={showScrollTop} onClick={scrollToTop} />
      <Toaster />
    </div>
  );
};

export default App;