import { useAnimation, motion } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const DiseasesSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);

  return (
    <motion.section
      ref={ref}
      id="disease"
      className="py-12 bg-gray-100"
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Waterborne Diseases</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: 'Cholera', description: 'Caused by contaminated water with Vibrio cholerae bacteria.' },
            { title: 'Typhoid', description: 'Spread through water contaminated with Salmonella typhi bacteria.' },
            { title: 'Hepatitis A', description: 'Caused by ingestion of water contaminated with the hepatitis A virus.' },
            { title: 'Dysentery', description: 'Spread through contaminated water, often by bacteria like Shigella.' },
            { title: 'Cryptosporidiosis', description: 'Caused by the parasite Cryptosporidium, commonly found in contaminated water.' },
            { title: 'Giardiasis', description: 'Caused by the Giardia parasite, transmitted through contaminated water sources.' }
          ].map((disease, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 50 }}
              animate={controls}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <h3 className="text-xl font-bold mb-2">{disease.title}</h3>
              <p className="text-gray-700">{disease.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default DiseasesSection;
