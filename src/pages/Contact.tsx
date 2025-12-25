

function ContactUs() {
  return (
    <div className="bg-purple-100 pb-6">
      <div className="max-w-4xl mx-auto px-6 py-2 ">
        <h1 className="text-3xl font-bold mb-8 text-center text-purple-950">Contact Us</h1>

        <div className="grid md:grid-cols-3 gap-8 text-center">

          <div className="p-6 rounded-lg shadow-purple-200 hover:shadow-lg transition bg-white">
            <h2 className="text-xl font-semibold mb-2 text-purple-900">🏢 Visit Us</h2>
            <p className="text-gray-500">
              Our studio is always open to welcome you. <br />
              Drop by to discuss ideas, designs, and possibilities.
            </p><br />
            <p>123 Architecture Street,<br />City, State, 12345</p>
          </div>


          <div className="p-6 rounded-lg shadow-purple-200 hover:shadow-lg transition bg-white">
            <h2 className="text-xl font-semibold mb-2 text-purple-900">📲 Call Us</h2>
            <p className="text-gray-500">Connect with us to discuss your project and requirements.</p><br />
            <p>+91 98765 43210</p>
          </div>


          <div className="p-6  rounded-lg shadow-purple-200 hover:shadow-lg transition bg-white">
            <h2 className="text-xl font-semibold mb-2 text-purple-900">
              🗓️ Book an Appointment</h2>
            <p className="text-gray-500"> Reserve a one-on-one session with our design experts.</p><br />
           <a
  href="https://docs.google.com/forms/d/e/1FAIpQLSfDD6BVUKQepXtDfJcuIoiOAMgAwPLrt1BFfXID1RavSCLZnQ/viewform?usp=publish-editor"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block bg-purple-950 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-purple-700 transition"
>
  Click here to Schedule
</a>


          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
