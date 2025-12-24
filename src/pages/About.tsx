
import heroImage from "../assets/Gemini_Generated_Image_7uj5kq7uj5kq7uj5.png";
function About() {
  return (
    <div className="bg-purple-100">
    

      <section className="py-10 px-6 md:px-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">

          
          <div>
            <img
              src={heroImage}
              alt="Architect studio"
              className="rounded-xl border-purple-500 object-cover w-full h-120"
            />
          </div>

      
          <div className="flex flex-col">
            <p className="text-xl font-bold uppercase tracking-widest text-purple-600 mb-3 text-center">
              About Us
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 leading-tight text-center">
              Crafting Spaces That Inspire Living
            </h2>

            <p className="text-gray-700 leading-relaxed mb-8">
              We are an architectural studio focused on designing meaningful
              environments that balance aesthetics, function, and innovation.
              Every project is shaped by people, purpose, and place.
            </p>

            <div className="space-y-5">
              <div className="flex gap-4">
                <span className="text-purple-600 text-xl">🏛️</span>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Modern Design Approach
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Clean lines, thoughtful materials, and timeless aesthetics.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="text-purple-600 text-xl">🏗️</span>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Sustainable Solutions
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Environmentally responsible design for future generations.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="text-purple-600 text-xl">👤</span>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Client-Focused Process
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Every space is tailored to real human needs.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}

export default About;
