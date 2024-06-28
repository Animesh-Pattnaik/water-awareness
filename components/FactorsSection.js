import { useAnimation, motion } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Card from './Card';

const FactorsSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);

  const factors = [
    { title: "pH", value: "0-14" },
    { title: "Hardness", value: "Capacity of water to precipitate soap (mg/L)" },
    { title: "Solids", value: "Total dissolved solids (ppm)" },
    { title: "Chloramines", value: "Amount of Chloramines (ppm)" },
    { title: "Sulfate", value: "Amount of Sulfates dissolved (mg/L)" },
    { title: "Conductivity", value: "Electrical conductivity of water (μS/cm)" },
    { title: "Organic Carbon", value: "Amount of organic carbon (ppm)" },
    { title: "Trihalomethanes", value: "Amount of Trihalomethanes (μg/L)" },
    { title: "Turbidity", value: "Measure of light emitting property of water" }
  ];

  return (
    <motion.section
      ref={ref}
      id="factor"
      className="py-12"
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Factors Affecting Water Quality</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {factors.map((factor, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 50 }}
              animate={controls}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card title={factor.title} value={factor.value} />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default FactorsSection;
