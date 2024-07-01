import { useAnimation, motion } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const articles = [
  {
    title: "The Importance of Clean Water",
    description: "Learn why clean water is vital for health and well-being.",
  },
  {
    title: "Tips for Improving Water Quality at Home",
    description: "Simple and effective tips to ensure the water in your home is safe and clean.",
  },
  {
    title: "Understanding Water Filtration Systems",
    description: "A comprehensive guide on different types of water filtration systems.",
  },
  {
    title: "Common Contaminants in Drinking Water",
    description: "An overview of common contaminants found in drinking water and how to remove them.",
  },
  {
    title: "How to Test Your Water Quality",
    description: "Step-by-step instructions on how to test your water quality at home.",
  },
];

const ArticlesSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);

  return (
    <motion.section
      id="articles"
      className="py-12 bg-gray-100"
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Water Quality Management
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 50 }}
              animate={controls}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <h3 className="text-xl font-bold mb-2">{article.title}</h3>
              <p className="text-gray-700">{article.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ArticlesSection;
