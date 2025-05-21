import React from 'react';
import { Linkedin, Github, Mail } from "lucide-react";

const Footer = ({ name, title, linkedin, github, email }) => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <span className="text-2xl font-bold text-blue-400">{name}</span>
            <p className="mt-2 text-gray-400">{title}</p>
          </div>

          <div className="flex space-x-6">
            <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href={github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Github className="h-6 w-6" />
            </a>
            <a href={`mailto:${email}`} className="text-gray-400 hover:text-white transition-colors">
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} {name}. All rights reserved.
          </p>

          <div className="flex space-x-4">
            <span className="text-gray-400 text-sm cursor-pointer hover:text-white transition-colors">
              Privacy Policy
            </span>
            <span className="text-gray-400 text-sm cursor-pointer hover:text-white transition-colors">
              Terms of Service
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;