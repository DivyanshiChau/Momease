import React, { useState } from 'react';

const NutritionGuidance = () => {
  const [activeTab, setActiveTab] = useState('profile');

  const renderContent = () => {
    switch (activeTab) {
      case 'profile':
        return <UserProfile />;
      case 'dietChart':
        return <CustomizableDietChart />;
      case 'trackingTools':
        return <InteractiveTrackingTools />;
      case 'consultation':
        return <ConsultationWithDietician />;
      case 'aiRecommendations':
        return <AIRecommendations />;
      case 'education':
        return <EducationalContent />;
      case 'devices':
        return <HealthDeviceIntegration />;
      case 'community':
        return <CommunitySupport />;
      case 'gamification':
        return <GamificationFeatures />;
      case 'subscription':
        return <SubscriptionOptions />;
      default:
        return <UserProfile />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Nutrition Guidance</h1>

      {/* Tab Navigation */}
      <div className="tabs flex justify-center gap-4 mb-6">
        {[
          { id: 'profile', label: 'User Profile' },
          { id: 'dietChart', label: 'Diet Chart' },
          { id: 'trackingTools', label: 'Tracking Tools' },
          { id: 'consultation', label: 'Consultation' },
          { id: 'aiRecommendations', label: 'AI Suggestions' },
          { id: 'education', label: 'Educational Content' },
          { id: 'devices', label: 'Device Integration' },
          { id: 'community', label: 'Community' },
          { id: 'gamification', label: 'Gamification' },
          { id: 'subscription', label: 'Subscription' },
        ].map((tab) => (
          <button
            key={tab.id}
            className={`tab tab-bordered ${
              activeTab === tab.id ? 'tab-active text-blue-600' : ''
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content Rendering */}
      <div className="content bg-white shadow-md rounded-lg p-6">{renderContent()}</div>
    </div>
  );
};

const UserProfile = () => (
  <div>
    <h2 className="text-2xl font-semibold mb-4">User Profile Setup</h2>
    <form className="grid gap-4">
      <input type="text" placeholder="Name" className="input input-bordered" />
      <input type="number" placeholder="Age" className="input input-bordered" />
      <select className="select select-bordered">
        <option>Male</option>
        <option>Female</option>
        <option>Other</option>
      </select>
      <input type="number" placeholder="Height (cm)" className="input input-bordered" />
      <input type="number" placeholder="Weight (kg)" className="input input-bordered" />
      <select className="select select-bordered">
        <option>Sedentary</option>
        <option>Active</option>
        <option>Highly Active</option>
      </select>
    </form>
  </div>
);

const CustomizableDietChart = () => (
  <div>
    <h2 className="text-2xl font-semibold mb-4">Customizable Diet Chart</h2>
    <p>Dynamic meal plans, macros, and regional cuisine options will appear here.</p>
  </div>
);

const InteractiveTrackingTools = () => (
  <div>
    <h2 className="text-2xl font-semibold mb-4">Interactive Tracking Tools</h2>
    <p>Track your meals, progress, and hydration here.</p>
  </div>
);

const ConsultationWithDietician = () => (
  <div>
    <h2 className="text-2xl font-semibold mb-4">Consultation with a Dietician</h2>
    <p>Book appointments and chat with experts.</p>
  </div>
);

const AIRecommendations = () => (
  <div>
    <h2 className="text-2xl font-semibold mb-4">AI-Based Recommendations</h2>
    <p>Get smart meal suggestions and grocery lists here.</p>
  </div>
);

const EducationalContent = () => (
  <div>
    <h2 className="text-2xl font-semibold mb-4">Educational Content</h2>
    <p>Access articles and videos on nutrition and health.</p>
  </div>
);

const HealthDeviceIntegration = () => (
  <div>
    <h2 className="text-2xl font-semibold mb-4">Integration with Health Devices</h2>
    <p>Sync with your fitness trackers for more insights.</p>
  </div>
);

const CommunitySupport = () => (
  <div>
    <h2 className="text-2xl font-semibold mb-4">Community Support</h2>
    <p>Join forums, challenges, and webinars here.</p>
  </div>
);

const GamificationFeatures = () => (
  <div>
    <h2 className="text-2xl font-semibold mb-4">Gamification Features</h2>
    <p>Earn rewards and track your achievements.</p>
  </div>
);

const SubscriptionOptions = () => (
  <div>
    <h2 className="text-2xl font-semibold mb-4">Subscription Options</h2>
    <p>Explore free and premium plans with advanced features.</p>
  </div>
);

export default NutritionGuidance;