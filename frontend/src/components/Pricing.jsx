const Pricing = () => {
    return (
      <section className="py-16 text-center bg-gray-100">
        <h2 className="text-3xl font-semibold">Pricing Plans</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 border rounded-lg bg-white">
            <h3 className="text-xl font-semibold">Monthly Plan</h3>
            <p className="mt-2 text-gray-600">$10/month</p>
            <button className="mt-4 px-6 py-3 bg-blue-500 text-white rounded-lg">Choose Plan</button>
          </div>
          <div className="p-6 border rounded-lg bg-white">
            <h3 className="text-xl font-semibold">Annual Plan</h3>
            <p className="mt-2 text-gray-600">$100/year</p>
            <button className="mt-4 px-6 py-3 bg-blue-500 text-white rounded-lg">Choose Plan</button>
          </div>
        </div>
      </section>
    );
};
  
export default Pricing;  