import React, { useState } from 'react';
import { Star, Heart, Brain, Utensils } from 'lucide-react';
import NannyDetails from './NannyDetails'; // Importing NannyDetails.jsx file
import MentalHealthDetails from './MentalHealthDetails';
import NutritionDetails from './NutritionDetails';

export const Services = () => {
  const [showNannyDetails, setShowNannyDetails] = useState(false);
  const [showMentalHealthDetails, setShowMentalHealthDetails] = useState(false);
  const [showNutritionDetails, setShowNutritionDetails] = useState(false);
  const [showHolisticCareDetails, setShowHolisticCareDetails] = useState(false);
  const [holisticCareComingSoon, setHolisticCareComingSoon] = useState(false); // New state for "Coming Soon"

  const handleButtonClick = (setState, serviceType) => {
    if (serviceType === 'holisticCare') {
      setHolisticCareComingSoon(true); // Set "Coming Soon" for Holistic Care
    } else {
      setState(true); // Show details for other services
    }
  };

  // Conditional rendering for NannyDetails
  if (showNannyDetails) {
    return <NannyDetails />;
  }

  if (showMentalHealthDetails) {
    return <MentalHealthDetails />;
  }

  if (showNutritionDetails) {
    return <NutritionDetails />;
  }

  return (
    <div className="min-h-screen bg-pink-50 py-20 mt-12 font-serif">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-pink-800 mb-10">
          MOMEASE is built for every woman
        </h1>
        <p className="text-pink-600 text-lg max-w-2xl mx-auto px-4 mb-8">
          Our bodies are beautifully complex. What you need doesn’t always fit into neat categories of care. No matter which service you pick, MOMEASE cares for the whole you.
        </p>
      </section>

      {/* Service Cards Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-pink-800 mb-12 text-center">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Verified Nannies */}
            <div className="transform transition duration-500 hover:scale-105 border-2 border-pink-300 rounded-lg p-6">
              <ServiceCard
                icon={<Star className="w-12 h-12 text-pink-600" />}
                title="Verified Nannies"
                description="Top-quality nanny services, verified and trained for your peace of mind."
                features={['Newborn care', 'Early child development', 'First aid certified','Fully secure']}
                showDetails={showNannyDetails}
                onButtonClick={() => handleButtonClick(setShowNannyDetails)}
              />
            </div>

            {/* Mental Health Support */}
            <div className="transform transition duration-500 hover:scale-105 border-2 border-pink-300 rounded-lg p-6">
              <ServiceCard
                icon={<Brain className="w-12 h-12 text-pink-600" />}
                title="Mental Health Support"
                description="Access to specialized psychologists & psychiatrists for postpartum care."
                features={['One-on-one counseling', 'Group therapy sessions', 'Depression screening', 'Anxiety management']}
                showDetails={showMentalHealthDetails}
                onButtonClick={() => handleButtonClick(setShowMentalHealthDetails)}
              />
            </div>

            {/* Nutrition Guidance */}
            <div className="transform transition duration-500 hover:scale-105 border-2 border-pink-300 rounded-lg p-6">
              <ServiceCard
                icon={<Utensils className="w-12 h-12 text-pink-600" />}
                title="Nutrition tracker"
                description="Personalized diet plans from expert dieticians."
                features={['Customized meal plans', 'Dietary consultations', 'Nutritional workshops', 'Recipe suggestions']}
                showDetails={showNutritionDetails}
                onButtonClick={() => handleButtonClick(setShowNutritionDetails)}
              />
            </div>

            {/* Holistic Care */}
            <div className="transform transition duration-500 hover:scale-105 border-2 border-pink-300 rounded-lg p-6">
              <ServiceCard
                icon={<Heart className="w-12 h-12 text-pink-600" />}
                title="Personalized journey tracker"
                description="Comprehensive wellness programs for mothers."
                features={['Yoga sessions', 'Meditation guides', 'Physical therapy', 'Sleep consulting']}
                showDetails={showHolisticCareDetails}
                onButtonClick={() => handleButtonClick(setShowHolisticCareDetails, 'holisticCare')}
              />
              {/* Show "Coming Soon" message if state is true */}
              {holisticCareComingSoon && (
                <div className="absolute top-4 right-4 bg-red-600 text-white p-2 rounded-md text-sm">
                  Coming Soon...
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Service Card component
const ServiceCard = ({ icon, title, description, features, showDetails, onButtonClick }) => (
  <div className="bg-pink-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2 border-pink-200 relative">
    <div className="mb-4">{icon}</div>
    <h3 className="text-xl font-semibold text-pink-800 mb-2">{title}</h3>
    <p className="text-pink-600 mb-4">{description}</p>
    <ul className="space-y-2">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center text-pink-700">
          <span className="mr-2">•</span>
          {feature}
        </li>
      ))}
    </ul>
    {/* More button inside the same div */}
    {!showDetails && (
      <button
        onClick={onButtonClick}
        className="mt-4 bg-pink-600 text-white py-2 px-6 rounded-md hover:bg-pink-700 transition-colors"
      >
        More
      </button>
    )}
  </div>
);

export default Services;
