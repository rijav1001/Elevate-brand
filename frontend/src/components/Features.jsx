const Features = () => {
    return (
      <section className="py-16 text-center">
        <h2 className="text-3xl font-semibold">Why Choose Elevate?</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 border rounded-lg">
            <h3 className="text-xl font-semibold">Brand Strategy</h3>
            <p className="mt-2 text-gray-600">Get expert guidance on crafting your brand.</p>
          </div>
          <div className="p-6 border rounded-lg">
            <h3 className="text-xl font-semibold">Content Creation</h3>
            <p className="mt-2 text-gray-600">Access professional content templates.</p>
          </div>
          <div className="p-6 border rounded-lg">
            <h3 className="text-xl font-semibold">Networking</h3>
            <p className="mt-2 text-gray-600">Connect with industry leaders and mentors.</p>
          </div>
        </div>
      </section>
    );
};
  
export default Features;  