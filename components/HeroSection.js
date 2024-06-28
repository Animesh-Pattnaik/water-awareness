import { motion } from 'framer-motion';

const HeroSection = () => (
  <motion.section
    className="bg-blue-500 text-white py-20"
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className="container mx-auto text-center">
      <h1 className="text-4xl font-bold mb-4">Understanding Clean Water</h1>
      <p className="text-lg">Ensuring safe drinking water for a healthier future.</p>
    </div>
  </motion.section>
);

export default HeroSection;
