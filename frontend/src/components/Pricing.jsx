const Pricing = () => {
  return (
    <section className="py-5 text-center bg-light">
      <h2 className="h3 fw-semibold">Pricing Plans</h2>
      <div className="mt-4 row row-cols-1 row-cols-md-2 g-4">
        <div className="col">
          <div className="p-4 border rounded bg-white">
            <h3 className="h5 fw-semibold">Monthly Plan</h3>
            <p className="mt-2 text-secondary">$10/month</p>
            <button className="mt-3 btn btn-primary">Choose Plan</button>
          </div>
        </div>
        <div className="col">
          <div className="p-4 border rounded bg-white">
            <h3 className="h5 fw-semibold">Annual Plan</h3>
            <p className="mt-2 text-secondary">$100/year</p>
            <button className="mt-3 btn btn-primary">Choose Plan</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;