import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ExperienceSection = ({ experience }) => {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Experience</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
        </motion.div>

        <div className="timeline-container">
          {experience.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="timeline-item"
            >
              <div className="timeline-content">
                <Card className="shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader className={`bg-gradient-to-r from-${job.theme}-500 to-${job.theme}-600 text-white`}>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>{job.company}</CardTitle>
                        <p className="text-white font-medium">{job.role}</p>
                        {job.client && (
                          <p className="text-white text-sm font-medium">{job.client}</p>
                        )}
                      </div>
                      <Badge className="bg-gray-800 text-white font-medium">
                        {job.duration}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <ul className="space-y-2 list-disc pl-5">
                      {job.responsibilities.map((resp, i) => (
                        <li key={i}>{resp}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
