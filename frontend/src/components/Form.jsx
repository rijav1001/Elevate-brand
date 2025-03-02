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
    <section className="py-16 text-center">
      <h2 className="text-3xl font-semibold">Sign Up</h2>
      <form onSubmit={handleSubmit} className="mt-8 max-w-md mx-auto space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg"
          required
        />
        <select name="pricingPlan" value={formData.pricingPlan} onChange={handleChange} className="w-full p-3 border rounded-lg">
          <option value="Monthly">Monthly</option>
          <option value="Annual">Annual</option>
        </select>
        <button type="submit" className="w-full px-6 py-3 bg-blue-500 text-white rounded-lg">
          Submit
        </button>
      </form>
    </section>
  );
};

export default Form;