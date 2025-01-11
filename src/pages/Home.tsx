import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Shield, Calendar } from 'lucide-react';

// Import local hero image
import heroImage from '../assets/pic2.jpg'; // Update with the correct path

export const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage} // Use local hero image
            alt="Mother and baby"
            className="w-full h-full object-cover opacity-90"
          />
        </div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-serif
           text-pink-200 mb-6">
            We care for you, so that you can care for others
          </h1>
          <p className="text-xl font-serif text-pink-300 mb-8">
            Comprehensive postpartum care tailored to your unique needs
          </p>
          <Link
            to="/register"
            className="inline-block bg-pink-600 text-white px-8 py-4 rounded-lg text-lg font-serif hover:bg-pink-700 transition-colors"
          >
            Start Your Journey
          </Link>
        </div>
      </section>

      {/* Services Overview */}
      <section className="container mx-auto px-6 font-serif">
        <h2 className="text-4xl font-bold text-pink-800 text-center mb-10"> <br>
        </br>
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Nanny Service */}
          <ServiceCard
            number="01"
            title="Nanny Service"
            description="Discover reliable and caring nannies tailored to your family's needs for stress-free childcare support."
          />
          {/* Mental Health Support */}
          <ServiceCard
            number="02"
            title="Mental Health Support"
            description="Access professional mental health support with compassionate and confidential virtual consultations."
          />
          {/* Nutrition Chart */}
          <ServiceCard
            number="03"
            title="Nutrition Chart"
            description="Receive personalized nutrition charts crafted by expert dietitians to match your health goals."
          />
          {/* Personalized Journey Tracker */}
          <ServiceCard
            number="04"
            title="Personalized Journey Tracker"
            description="Monitor your progress with a customized journey tracker designed to keep you motivated and informed."
          />
        </div>
      </section>

      {/* Features */}
      <section className="bg-pink-100 py-16">
        <div className="max-w-7xl mx-auto px-4 font-serif">
          <h2 className="text-4xl font-serif text-pink-800 text-center mb-12"><br>
          </br>
            Why Choose MomEase?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Shield />}
              title="Verified Professionals"
              description="All our nannies undergo thorough background checks and training"
            />
            <FeatureCard
              icon={<Calendar />}
              title="Flexible Plans"
              description="Choose from various subscription plans that fit your needs"
            />
            <FeatureCard
              icon={<Heart />}
              title="Holistic Care"
              description="Comprehensive support for both physical and mental well-being"
            />
            <br>
            </br>
          </div>
        </div>
      </section>
    </div>
  );
};

const ServiceCard = ({ number, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
    <div className="flex items-center space-x-4 mb-4">
      <div className="flex items-center justify-center w-12 h-12 bg-pink-200 text-pink-800 font-bold rounded-full">
        {number}
      </div>
      <h3 className="text-xl font-semibold text-pink-800">{title}</h3>
    </div>
    <p className="text-pink-700">{description}</p>
  </div>
);

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg">
    <div className="text-pink-600 w-12 h-12 mb-4">{icon}</div>
    <h3 className="text-xl font-semibold text-pink-800 mb-2">{title}</h3>
    <p className="text-pink-700">{description}</p>
  </div>
);

