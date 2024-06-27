import Card from './Card';

const FactorsSection = () => (
  <section id="factor" className="py-12">
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">Factors Affecting Water Quality</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card title="pH" value="0-14" />
        <Card title="Hardness" value="Capacity of water to precipitate soap (mg/L)" />
        <Card title="Solids" value="Total dissolved solids (ppm)" />
        <Card title="Chloramines" value="Amount of Chloramines (ppm)" />
        <Card title="Sulfate" value="Amount of Sulfates dissolved (mg/L)" />
        <Card title="Conductivity" value="Electrical conductivity of water (μS/cm)" />
        <Card title="Organic Carbon" value="Amount of organic carbon (ppm)" />
        <Card title="Trihalomethanes" value="Amount of Trihalomethanes (μg/L)" />
        <Card title="Turbidity" value="Measure of light emitting property of water (NTU)" />
      </div>
    </div>
  </section>
);

export default FactorsSection;
