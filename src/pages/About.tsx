import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import SEO from "../seo/SEO";

import heroImage from "../assets/img01.jpeg";
import founder1 from "../assets/austin.jpeg";
import founder2 from "../assets/ajith.jpeg";

import company1 from "../assets/aboutimage/intro.jpg";
import company2 from "../assets/aboutimage/image2.jpg";
import company3 from "../assets/aboutimage/image3.jpg";
import company4 from "../assets/aboutimage/image5.jpg";
import company5 from "../assets/aboutimage/image4.jpg";
import company6 from "../assets/aboutimage/image6.jpg";
import company7 from "../assets/aboutimage/image7.jpg";
import company8 from "../assets/aboutimage/img38.jpg";

import FounderCard from "../components/about/FounderCard";
import FloatingImageCard from "../components/about/FloatingImageCard";
import SectionHeading from "../components/about/SectionHeading";
import ReviewCard from "../components/about/ReviewCard";
import { fetchReviews } from "../api/projects.api";
import type { Review } from "../api/projects.api";
import { LOCAL_BUSINESS_SCHEMA, SITE_URL } from "../seo/siteConfig";


// Toggle this to use mock data while backend is being deployed
const USE_MOCK_DATA = false;

const studioImages: string[] = [
  company1,
  company7,
  company2,
  company3,
  company4,
  company5,
  company6,
  company8,
];

const About: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [isLoadingReviews, setIsLoadingReviews] = useState(true);
  const [reviewsError, setReviewsError] = useState<string | null>(null);

  useEffect(() => {
    const loadReviews = async () => {
      try {
        if (USE_MOCK_DATA) {
          // Use mock data for preview
         
          setReviewsError(null);
        } else {
          // Fetch from API
          const data = await fetchReviews();
          setReviews(data);
          setReviewsError(null);
        }
      } catch (error) {
        console.error("Failed to fetch reviews:", error);
        setReviewsError(error instanceof Error ? error.message : "Failed to load reviews");
      } finally {
        setIsLoadingReviews(false);
      }
    };

    loadReviews();
  }, []);

  return (
    <>
      <SEO
        title="About LA Architects"
        description="Meet the team behind LA Architects and learn our approach to modern, sustainable, and human-centered architecture for projects across India."
        url={`${SITE_URL}/about`}
        keywords={[
          "about architecture firm India",
          "architecture studio team",
          "sustainable architecture India",
        ]}
        structuredData={[
          LOCAL_BUSINESS_SCHEMA,
          {
            "@context": "https://schema.org",
            "@type": "AboutPage",
            name: "About LA Architects",
            url: `${SITE_URL}/about`,
            description:
              "Learn about LA Architects, an architecture and interior design studio serving multiple locations across India.",
          },
        ]}
      />

      <section id="about" className="bg-gray-200 py-28">

        <div className="text-center mb-8 px-7">
          <h2 className="text-4xl font-light text-amber-900 tracking-tight">
            About Us
          </h2>
          <p className="mt-4 text-gray-700 max-w-2xl mx-auto leading-relaxed text-lg">
            We design spaces that feel calm, timeless, and deeply human.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-10 lg:px-20 grid md:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="flex justify-center"
          >
            <div className="w-full max-w-sm rounded-3xl bg-gray-150 shadow-2xl p-2">
              <div className="w-full aspect-square rounded-2xl overflow-hidden">
                <img
                  src={heroImage}
                  alt="Studio"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="max-w-xl"
          >
            <p className="text-lg uppercase tracking-widest text-amber-700 mb-4 text-center">
              Our Philosophy
            </p>

            <h3 className="text-3xl font-medium mb-6 leading-snug text-center text-gray-900">
              Crafting Inspired Spaces
            </h3>

            <p className="text-gray-700 leading-8 mb-6 text-center">
              We are a multidisciplinary architecture and design studio creating
              thoughtful environments for living, working, and gathering.
            </p>

            <p className="text-gray-700 leading-8 text-center">
              Our approach blends functionality, sustainability, and emotion —
              shaping spaces that feel intentional, efficient, and enduring.
            </p>

            <p className="text-gray-700 leading-8 text-center">
              We strive to create timeless spaces that inspire connection,
              innovation, and a lasting positive impact on communities.
            </p>
          </motion.div>
        </div>

{/* Replace the existing "Meet the Minds Behind the Design" block in About.tsx with this */}

<div className="mt-28">
  <SectionHeading title="Meet the Minds Behind the Design" />
  <p className="mt-5 mb-16 text-center text-gray-600 max-w-2xl mx-auto px-6">
    A collaborative team of architects and designers turning ideas into enduring spaces.
  </p>

  <div className="flex flex-wrap justify-center gap-10 sm:gap-16 px-6">
    <FounderCard
      image={founder2}
      name="Ar Austin Kingsly D"
      role="Managing Director"
      quote="Good architecture disappears into how naturally a family moves through their day."
      index={0}
    />

    <FounderCard
      image={founder1}
      name="Ar Ajith M"
      role="Director"
      quote="We don't hand over drawings — we hand over spaces we'd choose to live in ourselves."
      index={1}
    />
  </div>
</div>


        <div className="mt-32">
          <SectionHeading title="Inside Our Studio" />
          <p className="mb-15 text-center text-gray-600 max-w-2xl mx-auto px-6">
            A glimpse into the studio where concepts evolve into refined, build-ready realities.
          </p>

          <div className="max-w-6xl mx-auto px-8 grid grid-cols-2 md:grid-cols-4 gap-10">
            {studioImages.map((img, index) => (
              <FloatingImageCard
                key={index}
                image={img}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* Reviews Section */}
        <div className="mt-32">
          <SectionHeading title="What Our Clients Say" />

          {isLoadingReviews ? (
            <div className="max-w-6xl mx-auto px-6 text-center py-20">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-amber-600"></div>
              <p className="mt-4 text-gray-600">Loading reviews...</p>
            </div>
          ) : reviewsError ? (
            <div className="max-w-6xl mx-auto px-6 text-center py-12">
              <div className="bg-red-50 border border-red-200 rounded-2xl p-8 max-w-md mx-auto">
                <p className="text-red-600 text-lg font-medium mb-2">Unable to load reviews</p>
                <p className="text-red-500 text-sm">{reviewsError}</p>
                <p className="text-gray-600 text-sm mt-4">Please check your connection and try again later.</p>
              </div>
            </div>
          ) : reviews.length > 0 ? (
            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {reviews.map((review, index) => (
                <ReviewCard
                  key={review.id}
                  clientName={review.client_name}
                  projectName={review.project_name}
                  place={review.place}
                  review={review.review}
                  stars={review.stars}
                  index={index}
                />
              ))}
            </div>
          ) : (
            <div className="max-w-6xl mx-auto px-6 text-center py-12">
              <p className="text-gray-600 text-lg">No reviews yet. Check back soon!</p>
            </div>
          )}

          {/* Bottom Accent Line */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-1 bg-linear-to-r from-amber-400 via-amber-600 to-amber-400 max-w-sm mx-auto mt-16 rounded-full"
          />
        </div>
      </section>
    </>
  );
};

export default About;
