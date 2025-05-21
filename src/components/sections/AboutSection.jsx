import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Server, Shield, Database, Users } from "lucide-react";

const IconMap = {
  Server,
  Shield,
  Database,
  Users,
};

const AboutSection = ({ objective, expertiseAreas, contactInfo, address }) => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            <Card className="glass-card bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
              <CardHeader>
                <CardTitle className="text-primary">Professional Objective</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  {objective.split('. ')[0]}.
                </p>
                <p>
                  {objective.split('. ').slice(1).join('. ')}
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:w-1/2 grid grid-cols-2 gap-4"
          >
            {expertiseAreas.map((area, index) => {
              const IconComponent = IconMap[area.icon];
              return (
                <Card key={index} className={`bg-gradient-to-br ${index % 2 === 0 ? 'from-blue-500 to-blue-600' : 'from-indigo-500 to-indigo-600'} text-white`}>
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    {IconComponent && <IconComponent className="h-10 w-10 mb-4" />}
                    <h3 className="text-lg font-semibold mb-2">{area.title}</h3>
                    <p className="text-sm text-blue-100">{area.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12 flex justify-center"
        >
          <Card className="max-w-3xl w-full bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-100">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-primary mb-3">Contact Information</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-primary" />
                      <span>{contactInfo.phone}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-primary" />
                      <span>{contactInfo.email}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span>{contactInfo.location}</span>
                    </li>
                  </ul>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-primary mb-3">Address</h3>
                  <p>
                    {address.split(',')[0].trim()}<br />
                    {address.split(',').slice(1).join(',').trim()}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;