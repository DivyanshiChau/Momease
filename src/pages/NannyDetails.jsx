import React, { useState } from 'react';
import { Star, ArrowLeft, X } from 'lucide-react';
import priyaImage from '../assets/n1.jpg';
import sarahImage from '../assets/n2.jpg';
import raniImage from '../assets/n3.jpg';

<br>
</br>
const nannies = [
  {
    id: 1,
    name: 'Priya Singh',
    image: raniImage,
    experience: 5,
    motherTongue: 'Hindi',
    rating: 4.8,
    specializations: ['Newborn Care', 'Sleep Training'],
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    image: sarahImage,
    experience: 8,
    motherTongue: 'English',
    rating: 4.9,
    specializations: ['Twins', 'First Aid Certified'],
  },
  {
    id: 3,
    name: 'Rani Sharma',
    image: priyaImage,
    experience: 18,
    motherTongue: 'Hindi',
    rating: 4.7,
    specializations: ['Infant Care', 'Child Nutrition'],
  },
];
const NannyList = () => {
    return (
      <div>
        {nannies.map((nanny) => (
          <div key={nanny.id} className="nanny-card">
            <h2>{nanny.name}</h2>
            <img
              src={nanny.image}
              alt={nanny.name}
              style={nanny.id === 3 ? { transform: 'translateY(20px)', width: '100%', height: 'auto' } : { width: '100%', height: 'auto' }}
            />
            <p>Experience: {nanny.experience} years</p>
            <p>Mother Tongue: {nanny.motherTongue}</p>
            <p>Rating: <Star /> {nanny.rating}</p>
            <p>Specializations: {nanny.specializations.join(', ')}</p>
          </div>
        ))}
      </div>
    );
  };

const NannyDetails = ({ onBack }) => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [selectedNanny, setSelectedNanny] = useState(null);
  const [meetingType, setMeetingType] = useState(null);
  const [meetingDate, setMeetingDate] = useState('');
  const [showMessage, setShowMessage] = useState(false);

  const handleMeeting = () => {
    if (meetingDate) {
      // Show notification and close modal
      setShowMessage(true);
      setSelectedNanny(null);
      setMeetingType(null);
      setMeetingDate('');
      setTimeout(() => setShowMessage(false), 5000); // Hide notification after 5 seconds
    }
  };

  const closeModal = () => {
    setSelectedNanny(null);
    setMeetingType(null);
    setMeetingDate('');
  };

  return (
    <div className="min-h-screen bg-pink-50 p-8 animate-fade-in relative">
      {showMessage && (
        <div className="fixed top-5 right-4 bg-pink-600 text-white py-2 px-4 rounded shadow-lg z-50 font-serif">
          Meeting fixed on {meetingDate}. More details will be shared shortly.
        </div>
      )}

<button
  onClick={() => window.history.back()} // Use browser history to go back
  className="mb-8 flex items-center text-pink-600 hover:text-pink-700 transition-colors animate-slide-right"
>
  <ArrowLeft className="w-5 h-5 mr-2" />
  Back to Services
</button>

      <h2 className="text-4xl font-serif text-pink-800 mb-12 text-center animate-slide-down mt-12">
        Our Verified Nannies
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {nannies.map((nanny, index) => (
          <div
            key={nanny.id}
            className={`transform transition-all duration-300 hover:scale-102 animate-slide-up
              ${index === 0 ? 'delay-0' : index === 1 ? 'delay-100' : 'delay-200'}`}
            onMouseEnter={() => setHoveredCard(nanny.id)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <NannyCard
              {...nanny}
              isHovered={hoveredCard === nanny.id}
              onSelect={() => setSelectedNanny(nanny)}
            />
          </div>
        ))}
      </div>

      {selectedNanny && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full relative">
            {/* Cross button to close modal */}
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-pink-600 hover:text-pink-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-2xl font-bold mb-4">{`Book a Meeting with ${selectedNanny.name}`}</h3>
            <div className="flex justify-between mb-4">
              <button
                onClick={() => setMeetingType('virtual')}
                className={`py-2 px-4 bg-pink-100 rounded ${meetingType === 'virtual' && 'bg-pink-200'}`}
              >
                Virtual Meet
              </button>
              <button
                onClick={() => setMeetingType('physical')}
                className={`py-2 px-4 bg-pink-100 rounded ${meetingType === 'physical' && 'bg-pink-200'}`}
              >
                Physical Meet
              </button>
            </div>

            {meetingType && (
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2">Select Date and Time</label>
                <input
                  type="datetime-local"
                  value={meetingDate}
                  onChange={(e) => setMeetingDate(e.target.value)}
                  className="w-full p-2 border rounded"
                />
              </div>
            )}

            <button
              onClick={handleMeeting}
              className="py-1 px-2 bg-pink-500 text-white rounded-full hover:bg-pink-600 w-full transition"
            >
              Confirm
            </button>
          </div>
        </div>
      )}

      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideDown {
          from { transform: translateY(-40px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        @keyframes slideUp {
          from { transform: translateY(40px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        .animate-fade-in {
          animation: fadeIn 0.5s ease-out;
        }

        .animate-slide-down {
          animation: slideDown 0.5s ease-out;
        }

        .animate-slide-up {
          animation: slideUp 0.5s ease-out;
        }

        .delay-0 { animation-delay: 0s; }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
      `}</style>
    </div>
  );
};

const NannyCard = ({ name, image, experience, motherTongue, rating, specializations, isHovered, onSelect }) => (
  <div
    className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-200 p-4"
    style={{
      transform: isHovered ? 'scale(1.02)' : 'scale(1)',
      boxShadow: isHovered
        ? '0 10px 15px -5px rgba(0, 0, 0, 0.1), 0 6px 10px -5px rgba(0, 0, 0, 0.05)'
        : '0 8px 12px -3px rgba(0, 0, 0, 0.1), 0 3px 5px -2px rgba(0, 0, 0, 0.05)',
    }}
  >
    <div className="relative overflow-hidden">
      <img
        src={image}
        alt={name}
        className={`w-full h-36 object-cover transition-transform duration-200 ${isHovered ? 'scale-102' : 'scale-100'}`}
      />
      <div
        className={`absolute inset-0 bg-gradient-to-t from-black/30 to-transparent transition-opacity duration-200 ${
          isHovered ? 'opacity-70' : 'opacity-0'
        }`}
      />
    </div>

    <div className="p-4">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-lg font-bold text-pink-900">{name}</h3>
        <div className="flex items-center">
          <Star className="w-4 h-4 text-yellow-500 mr-1" />
          <p className="text-sm font-medium text-pink-800">{rating}</p>
        </div>
      </div>

      <p className="text-sm text-pink-600 mb-2">{`Experience: ${experience} years`}</p>
      <p className="text-sm text-pink-600 mb-4">{`Mother Tongue: ${motherTongue}`}</p>
      <div className="text-sm text-pink-600 mb-4">
        Specializations:
        <ul className="list-disc pl-5">
          {specializations.map((spec, index) => (
            <li key={index}>{spec}</li>
          ))}
        </ul>
      </div>

      <button
        onClick={onSelect}
        className="py-1 px-2 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition"
      >
        Book
      </button>
    </div>
  </div>
);

export default NannyDetails;
