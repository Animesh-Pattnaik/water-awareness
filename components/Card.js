const Card = ({ title, value }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-700">{value}</p>
  </div>
);

export default Card;
