import React from 'react';
import { motion } from 'framer-motion';
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

const Header = ({ isScrolled, navItems, activeSection, scrollToSection, name }) => {
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-2"
          >
            <span className="text-xl font-bold text-primary">{name}</span>
            <span className="hidden md:inline-block text-sm text-muted-foreground">IT Professional</span>
          </motion.div>

          <nav className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <Button
                key={item}
                variant={activeSection === item ? "default" : "ghost"}
                size="sm"
                onClick={() => scrollToSection(item)}
                className="capitalize"
              >
                {item}
              </Button>
            ))}
          </nav>

          <div className="md:hidden">
            <Tabs defaultValue="home" value={activeSection} onValueChange={scrollToSection}>
              <TabsList className="grid grid-cols-3 w-[200px]">
                <TabsTrigger value="home">Home</TabsTrigger>
                <TabsTrigger value="experience">Work</TabsTrigger>
                <TabsTrigger value="contact">Contact</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;