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
      const data = await checkPotability(formData);
      setResult(data);
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
            <div className="flex flex-col">
              <label
                htmlFor="pH"
                className="block text-sm font-medium text-gray-700"
              >
                pH
              </label>
              <input
                type="text"
                id="pH"
                name="pH"
                value={formData.pH}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-4 py-3 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="Hardness"
                className="block text-sm font-medium text-gray-700"
              >
                Hardness
              </label>
              <input
                type="text"
                id="Hardness"
                name="Hardness"
                value={formData.Hardness}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-4 py-3 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="Solids"
                className="block text-sm font-medium text-gray-700"
              >
                Solids
              </label>
              <input
                type="text"
                id="Solids"
                name="Solids"
                value={formData.Solids}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-4 py-3 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="Chloramines"
                className="block text-sm font-medium text-gray-700"
              >
                Chloramines
              </label>
              <input
                type="text"
                id="Chloramines"
                name="Chloramines"
                value={formData.Chloramines}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-4 py-3 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="Sulfate"
                className="block text-sm font-medium text-gray-700"
              >
                Sulfate
              </label>
              <input
                type="text"
                id="Sulfate"
                name="Sulfate"
                value={formData.Sulfate}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-4 py-3 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="Conductivity"
                className="block text-sm font-medium text-gray-700"
              >
                Conductivity
              </label>
              <input
                type="text"
                id="Conductivity"
                name="Conductivity"
                value={formData.Conductivity}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-4 py-3 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="Organic_carbon"
                className="block text-sm font-medium text-gray-700"
              >
                Organic Carbon
              </label>
              <input
                type="text"
                id="Organic_carbon"
                name="Organic_carbon"
                value={formData.Organic_carbon}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-4 py-3 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="Trihalomethanes"
                className="block text-sm font-medium text-gray-700"
              >
                Trihalomethanes
              </label>
              <input
                type="text"
                id="Trihalomethanes"
                name="Trihalomethanes"
                value={formData.Trihalomethanes}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-4 py-3 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="Turbidity"
                className="block text-sm font-medium text-gray-700"
              >
                Turbidity
              </label>
              <input
                type="text"
                id="Turbidity"
                name="Turbidity"
                value={formData.Turbidity}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-4 py-3 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>
          <button
            type="submit"
            className="mt-6 w-full inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Submit
          </button>
        </form>
        {result && (
          <ResultMessage result={result} />
        )}
      </div>
    </section>
  );
};

export default PotabilityForm;
