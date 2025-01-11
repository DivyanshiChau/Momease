import React, { useState } from 'react';

// Import local images
import specialist1 from '../assets/doc.png';
import specialist2 from '../assets/doc.png';
import specialist3 from '../assets/doc.png';

const MentalHealthDetails = () => {
  const [selectedSpecialist, setSelectedSpecialist] = useState(null);
  const [subscribed, setSubscribed] = useState(false);

  const specialists = [
    {
      name: 'Dr. Arantha Shreya Gogoi',
      expertise: 'Psychologist - Postpartum care & Depression',
      price: '₹1500/session',
      image: specialist1, // Local image
    },
    {
      name: 'Dr. Divyanshi Chaudhary',
      expertise: 'Psychiatrist - Anxiety management & Therapy',
      price: '₹2000/session',
      image: specialist2, // Local image
    },
    {
      name: 'Dr. Shreyas B Reddy',
      expertise: 'Psychologist - Cognitive Therapy for Anxiety',
      price: '₹1800/session',
      image: specialist3, // Local image
    },
  ];

  const handleSpecialistClick = (specialist) => {
    setSelectedSpecialist(specialist);
  };

  const handleSubscription = () => {
    setSubscribed(true);
    alert('You have subscribed to our plan! Enjoy unlimited consultations.');
  };

  return (
    <div className="min-h-screen bg-pink-50 py-12">
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-pink-800 mb-4">
          Mental Health Support for Postpartum Care
        </h1>
        <p className="text-pink-600 text-lg max-w-2xl mx-auto px-4 mb-8">
          Our dedicated psychologists and psychiatrists are here to help you through your postpartum journey. Get the support you need.
        </p>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-pink-800 mb-12 text-center">
            Available Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ServiceCard
              title="One-on-One Counseling"
              description="Personalized therapy sessions to help you navigate emotional challenges during postpartum."
            />
            <ServiceCard
              title="Group Therapy Sessions"
              description="Join group therapy for shared experiences and mutual support from other women."
            />
            <ServiceCard
              title="Depression Screening"
              description="Professional screening to identify postpartum depression and recommend treatment options."
            />
            <ServiceCard
              title="Anxiety Management"
              description="Learn techniques to manage anxiety and stress during the postpartum period."
            />
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold text-pink-800 mb-8">Consult a Psychologist or Psychiatrist</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {specialists.map((specialist, index) => (
                <div
                  key={index}
                  className="transform transition duration-500 hover:scale-105 border-2 border-pink-300 rounded-lg p-6 cursor-pointer"
                  onClick={() => handleSpecialistClick(specialist)}
                >
                  <img
                    src={specialist.image}
                    alt={specialist.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4"
                  />
                  <h3 className="text-xl font-semibold text-pink-800">{specialist.name}</h3>
                  <p className="text-pink-600">{specialist.expertise}</p>
                  <p className="text-pink-600 mt-2">
                    {subscribed ? 'Included in your plan' : `Consultation Fee: ${specialist.price}`}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <button
                onClick={handleSubscription}
                className="bg-pink-600 text-white py-2 px-6 rounded-md hover:bg-pink-700 transition-colors"
              >
                Subscribe for Unlimited Consultation
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// ServiceCard component
const ServiceCard = ({ title, description }) => (
  <div className="bg-pink-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2 border-pink-200">
    <h3 className="text-xl font-semibold text-pink-800 mb-2">{title}</h3>
    <p className="text-pink-600">{description}</p>
  </div>
);

export default MentalHealthDetails;
