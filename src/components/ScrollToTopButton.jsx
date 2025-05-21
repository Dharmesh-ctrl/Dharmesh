import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp } from "lucide-react";

const ScrollToTopButton = ({ show, onClick }) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          onClick={onClick}
          className="fixed bottom-6 right-6 p-3 rounded-full bg-primary text-white shadow-lg z-50"
          aria-label="Scroll to top"
        >
          <ChevronUp className="h-6 w-6" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTopButton;