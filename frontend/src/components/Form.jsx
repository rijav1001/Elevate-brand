import { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({ name: "", email: "", pricingPlan: "Monthly" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/users/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      alert(data.message);
    } catch (error) {
      alert("Error submitting form");
    }
  };

  return (
    <section className="py-5 text-center">
      <h2 className="h3 fw-semibold">Sign Up</h2>
      <form onSubmit={handleSubmit} className="mt-4 mx-auto w-50">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="form-control mb-3"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="form-control mb-3"
          required
        />
        <select name="pricingPlan" value={formData.pricingPlan} onChange={handleChange} className="form-select mb-3">
          <option value="Monthly">Monthly</option>
          <option value="Annual">Annual</option>
        </select>
        <button type="submit" className="btn btn-primary w-100">
          Submit
        </button>
      </form>
    </section>
  );
};

export default Form;