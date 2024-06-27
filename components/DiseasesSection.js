const DiseasesSection = () => (
  <section id="disease" className="py-12 bg-gray-100">
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">Waterborne Diseases</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Example diseases cards */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-2">Cholera</h3>
          <p className="text-gray-700">Caused by contaminated water with Vibrio cholerae bacteria.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-2">Typhoid</h3>
          <p className="text-gray-700">Spread through water contaminated with Salmonella typhi bacteria.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-2">Hepatitis A</h3>
          <p className="text-gray-700">Caused by ingestion of water contaminated with the hepatitis A virus.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-2">Dysentery</h3>
          <p className="text-gray-700">Spread through contaminated water, often by bacteria like Shigella.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-2">Cryptosporidiosis</h3>
          <p className="text-gray-700">Caused by the parasite Cryptosporidium, commonly found in contaminated water.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-2">Giardiasis</h3>
          <p className="text-gray-700">Caused by the Giardia parasite, transmitted through contaminated water sources.</p>
        </div>
        {/* Add more diseases cards as needed */}
      </div>
    </div>
  </section>
);

export default DiseasesSection;
