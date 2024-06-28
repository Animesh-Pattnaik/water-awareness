// components/PotabilityForm.js

import { useState } from "react";
import { checkPotability } from "../utils/api";
import ResultMessage from "./ResultMessage";

const PotabilityForm = () => {
  const [formData, setFormData] = useState({
    pH: "",
    Hardness: "",
    Solids: "",
    Chloramines: "",
    Sulfate: "",
    Conductivity: "",
    Organic_carbon: "",
    Trihalomethanes: "",
    Turbidity: "",
  });
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // console.log("Form data before submission:", formData);
      const data = await checkPotability(formData);
      console.log("Result received from API:", data);
      setResult(data.result);
      setError(null);
    } catch (error) {
      console.error("Error checking potability:", error);
      setResult(null);
      setError(error.message || "Error checking potability");
    }
  };

  return (
    <section id="form" className="py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Check Water Potability
        </h2>
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {Object.keys(formData).map((key) => (
              <div key={key}>
                <label
                  htmlFor={key}
                  className="block text-sm font-medium text-gray-700"
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
              </div>
            ))}
          </div>
          <button
            type="submit"
            className="mt-6 w-full inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Submit
          </button>
        </form>
        {result !== null && <ResultMessage result={result} />}
        {error && <p className="mt-4 text-center text-red-600">{error}</p>}
      </div>
    </section>
  );
};

export default PotabilityForm;
