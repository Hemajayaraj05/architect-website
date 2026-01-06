import { motion } from "framer-motion";
import { useState } from "react";
import { scaleIn } from "../../assets/animations/contact.animations";
import serv3 from "../../assets/serv4.png";

interface FormData {
  name: string;
  email: string;
  phone: string;
  date: string;
  timeSlot: string;
  meetingType: string;
}

interface AppointmentFormProps {
  timeSlots: string[];
  meetingTypes: string[];
}

const AppointmentForm: React.FC<AppointmentFormProps> = ({
  timeSlots,
  meetingTypes,
}) => {
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    date: "",
    timeSlot: "",
    meetingType: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed");
      setSubmitted(true);
    } catch {
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      {...scaleIn}
      className="relative max-w-4xl mx-auto rounded-3xl shadow-2xl overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center blur-sm"
        style={{ backgroundImage: `url(${serv3})` }}
      />

      <div className="relative bg-white/20 backdrop-blur-xl rounded-3xl p-10 border border-white/30 shadow-2xl">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-amber-900">
            Book an Appointment
          </h2>
          <p className="text-gray-700 text-sm mt-2">
            Fill in your details and we will get back to you.
          </p>
        </div>

        {submitted ? (
          <div className="text-center py-12">
            <h3 className="text-2xl font-semibold text-amber-600 mb-3">
              Details Submitted Successfully!
            </h3>
            <p className="text-gray-700">
              Our team will contact you shortly.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="grid md:grid-cols-2 gap-6"
          >
            <input
              required
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              className="glass-input"
            />

            <input
              required
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="glass-input"
            />

            <input
              required
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone / WhatsApp Number"
              className="glass-input"
            />

            <input
              required
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="glass-input"
            />

            <select
              required
              name="timeSlot"
              value={formData.timeSlot}
              onChange={handleChange}
              className="glass-input glass-select"
            >
              <option value="" disabled>
                Preferred Time Slot
              </option>
              {timeSlots.map((slot) => (
                <option key={slot}>{slot}</option>
              ))}
            </select>

            <select
              required
              name="meetingType"
              value={formData.meetingType}
              onChange={handleChange}
              className="glass-input glass-select"
            >
              <option value="" disabled>
                Preferred Meeting Type
              </option>
              {meetingTypes.map((type) => (
                <option key={type}>{type}</option>
              ))}
            </select>

            <div className="md:col-span-2 flex justify-center mt-4">
              <button
                disabled={loading}
                className="w-48 bg-amber-900 text-white py-3 rounded-xl font-medium hover:bg-amber-700 transition disabled:opacity-50 shadow-lg"
              >
                {loading ? "Submitting..." : "Submit Details"}
              </button>
            </div>
          </form>
        )}
      </div>
    </motion.div>
  );
};

export default AppointmentForm;
