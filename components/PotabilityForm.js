import { useState, useEffect } from "react";
import { checkPotability } from "../utils/api";
import ResultMessage from "./ResultMessage";
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const PotabilityForm = () => {
  const initialFormData = {
    pH: "",
    Hardness: "",
    Solids: "",
    Chloramines: "",
    Sulfate: "",
    Conductivity: "",
    Organic_carbon: "",
    Trihalomethanes: "",
    Turbidity: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [progress, setProgress] = useState(0);

  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);

  useEffect(() => {
    if (result !== null) {
      const timer = setTimeout(() => {
        setResult(null);
      }, 5000); // Hide result message after 5 seconds
      return () => clearTimeout(timer); // Cleanup timer if component unmounts
    }
  }, [result]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProgress(10);
    try {
      const data = await checkPotability(formData);
      setProgress(100);
      console.log("Result received from API:", data);
      setResult(data.result);
      setError(null);
      setFormData(initialFormData);
      setTimeout(() => setProgress(0), 1000);  // Hide progress bar after some time
    } catch (error) {
      console.error("Error checking potability:", error);
      setResult(null);
      setError(error.message || "Error checking potability");
      setProgress(0);
    }
  };

  return (
    <motion.section
      id="form"
      className="py-12"
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Check Water Potability
        </h2>
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {Object.keys(formData).map((key, index) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 50 }}
                animate={controls}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <label
                  htmlFor={key}
                  className="block text-md font-medium text-gray-700"
                >
                  {key.replace("_", " ")}
                </label>
                <input
                  type="text"
                  id={key}
                  name={key}
                  value={formData[key]}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-4 py-3 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </motion.div>
            ))}
          </div>
          <motion.button
            type="submit"
            className="mt-6 w-full inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Submit
          </motion.button>
          {progress > 0 && (
            <motion.div
              className="mt-4 w-full bg-gray-200 rounded-full h-4"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-indigo-600 h-4 rounded-full"></div>
            </motion.div>
          )}
        </form>
        {result !== null && <ResultMessage result={result} />}
        {error && <p className="mt-4 text-center text-red-600">{error}</p>}
      </div>
    </motion.section>
  );
};

export default PotabilityForm;
