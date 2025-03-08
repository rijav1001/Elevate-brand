const Features = () => {
  return (
    <section className="py-5 text-center">
      <h2 className="h3 fw-semibold">Why Choose Elevate?</h2>
      <div className="mt-4 row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <div className="p-4 border rounded">
            <h3 className="h5 fw-semibold">Brand Strategy</h3>
            <p className="mt-2 text-secondary">Get expert guidance on crafting your brand.</p>
          </div>
        </div>
        <div className="col">
          <div className="p-4 border rounded">
            <h3 className="h5 fw-semibold">Content Creation</h3>
            <p className="mt-2 text-secondary">Access professional content templates.</p>
          </div>
        </div>
        <div className="col">
          <div className="p-4 border rounded">
            <h3 className="h5 fw-semibold">Networking</h3>
            <p className="mt-2 text-secondary">Connect with industry leaders and mentors.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;