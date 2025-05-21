import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const SkillBar = ({ name, level, delay }) => (
  <div>
    <div className="flex justify-between mb-1">
      <span className="font-medium">{name}</span>
      <span>{level}</span>
    </div>
    <div className="skill-bar">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: level }}
        transition={{ duration: 1, delay }}
        viewport={{ once: true }}
        className="skill-progress"
      ></motion.div>
    </div>
  </div>
);

const SkillsSection = ({ skills }) => {
  const getThemeColor = (index, type) => {
    const themes = {
      infrastructure: ["blue", "indigo", "purple"],
      security: ["blue", "indigo", "purple"],
      certifications: ["blue", "indigo", "purple", "green", "teal", "cyan"]
    };
    const colorList = themes[type] || themes.certifications;
    return colorList[index % colorList.length];
  };
  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-primary">Infrastructure & Systems</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {skills.infrastructure.map((skill, index) => (
                  <SkillBar key={index} name={skill.name} level={skill.level} delay={0.1 * (index + 1)} />
                ))}
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-primary">Security & Support</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {skills.security.map((skill, index) => (
                  <SkillBar key={index} name={skill.name} level={skill.level} delay={0.1 * (index + 1)} />
                ))}
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-primary">Certifications</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {skills.certifications.map((cert, index) => {
                  const theme = getThemeColor(index, 'certifications');
                  return (
                    <div key={index} className={`bg-${theme}-50 p-4 rounded-lg border border-${theme}-100`}>
                      <h3 className={`font-semibold text-${theme}-700 mb-2`}>{cert}</h3>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;