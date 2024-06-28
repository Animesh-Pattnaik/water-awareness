import { useAnimation, motion } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const AboutSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, scale: 1 });
    }
  }, [controls, inView]);

  return (
    <motion.section
      ref={ref}
      id="about"
      className="py-12"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={controls}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Why Safe Drinking Water Matters</h2>
        <p className="text-lg text-center">
          Safe drinking water is essential for human health as it prevents waterborne diseases and ensures overall well-being. Access to clean water reduces the risk of illnesses such as cholera, dysentery, and typhoid, which can be fatal. It supports proper hygiene and sanitation, contributing to healthier communities. Ensuring safe drinking water is a fundamental step towards improving public health and quality of life.
        </p>
      </div>
    </motion.section>
  );
};

export default AboutSection;
