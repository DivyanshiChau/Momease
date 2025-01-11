import React, { useState } from 'react';

const NutritionDetails = () => {
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



export default NutritionDetails;