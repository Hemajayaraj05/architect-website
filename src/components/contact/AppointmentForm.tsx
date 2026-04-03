import { motion } from "framer-motion";
import { useState } from "react";
import { scaleIn } from "../../assets/animations/contact.animations";

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
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

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
const API="https://architect-website-backend.onrender.com/api/contact";
//const API="http://localhost:5000/api/contact";
  try {
    const res = await fetch(
      API,
      {
        method: "POST",
        mode: "cors",              
        credentials: "omit",       
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    if (!res.ok) {
      const text = await res.text();
      console.error("Server error:", text);
      throw new Error("Request failed");
    }

    setSubmitted(true);
  } catch (err) {
    console.error(err);
    alert("Unable to submit. Please try again later.");
  } finally {
    setLoading(false);
  }
};

  return (
    <motion.div
      {...scaleIn}
      className="max-w-4xl mx-auto bg-gray-100 rounded-3xl border border-gray-300 p-12"
    >
     
      <div className="text-center mb-12">
        <h2 className="text-3xl font-light text-amber-900 tracking-tight">
          Book an Appointment
        </h2>
        <p className="text-gray-600 text-sm mt-3 max-w-md mx-auto">
          Share your details and we’ll connect with you to discuss your project.
        </p>
      </div>

      {submitted ? (
        <div className="text-center py-16">
          <h3 className="text-xl font-medium text-amber-800 mb-3">
            Thank you for reaching out
          </h3>
          <p className="text-gray-600 text-sm">
            Our team will get back to you shortly.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-8">
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
            type="text"
            name="date"
            value={formData.date}
            onChange={handleChange}
            placeholder="mm/dd/yyyy"
            inputMode="numeric"
            autoComplete="off"
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

          {/* Button */}
          <div className="md:col-span-2 flex justify-center mt-12">
            <button
              disabled={loading}
              className="px-10 py-3 border border-amber-900 text-amber-900
                         rounded-full text-sm tracking-wide
                         hover:bg-amber-900 hover:text-white transition
                         disabled:opacity-50"
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      )}
    </motion.div>
  );
};

export default AppointmentForm;
