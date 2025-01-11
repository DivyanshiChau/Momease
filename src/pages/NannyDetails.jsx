import React, { useState } from 'react';
import { Star, ArrowLeft } from 'lucide-react';

// Sample nanny data with 3 more nannies added
const nannies = [
  {
    id: 1,
    name: 'Priya Singh',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956',
    experience: 5,
    motherTongue: 'Hindi',
    rating: 4.8,
    specializations: ['Newborn Care', 'Sleep Training'],
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2',
    experience: 8,
    motherTongue: 'English',
    rating: 4.9,
    specializations: ['Twins', 'First Aid Certified'],
  },
  {
    id: 3,
    name: 'Meera Patel',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2',
    experience: 3,
    motherTongue: 'Gujarati',
    rating: 4.7,
    specializations: ['Special Needs', 'Early Development'],
  },
  {
    id: 4,
    name: 'Aisha Khan',
    image: 'https://images.unsplash.com/photo-1594700563599-5b97abebc170',
    experience: 6,
    motherTongue: 'Urdu',
    rating: 4.6,
    specializations: ['Multiple Children', 'Postpartum Care'],
  },
  {
    id: 5,
    name: 'Emily Clark',
    image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b',
    experience: 4,
    motherTongue: 'English',
    rating: 4.8,
    specializations: ['Early Child Development', 'First Aid'],
  },
  {
    id: 6,
    name: 'Neha Sharma',
    image: 'https://images.unsplash.com/photo-1524253482453-3fed8d2fe12b',
    experience: 7,
    motherTongue: 'Punjabi',
    rating: 4.9,
    specializations: ['Postpartum Care', 'Twins'],
  },
];

const NannyDetails = ({ onBack }) => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [selectedNanny, setSelectedNanny] = useState(null);
  const [meetingType, setMeetingType] = useState(null);
  const [meetingDate, setMeetingDate] = useState('');
  const [message, setMessage] = useState('');

  const handleMeeting = () => {
    if (meetingDate) {
      setMessage(`Meeting fixed with ${selectedNanny.name} on ${meetingDate}!`);
    } else {
      setMessage('Please select a date and time.');
    }
  };

  return (
    <div className="min-h-screen bg-pink-50 p-8 animate-fade-in">
      <button
        onClick={onBack}
        className="mb-8 flex items-center text-pink-600 hover:text-pink-700 transition-colors animate-slide-right"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Back to Services
      </button>

      <h2 className="text-4xl font-bold text-pink-800 mb-12 text-center animate-slide-down">
        Our Verified Nannies
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {nannies.map((nanny, index) => (
          <div
            key={nanny.id}
            className={`transform transition-all duration-500 hover:scale-105 animate-slide-up
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
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
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
              className="py-2 px-4 bg-pink-500 text-white rounded hover:bg-pink-600 w-full transition"
            >
              Confirm
            </button>

            {message && <p className="mt-4 text-pink-600">{message}</p>}
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
          animation: fadeIn 0.8s ease-out;
        }

        .animate-slide-down {
          animation: slideDown 0.8s ease-out;
        }

        .animate-slide-up {
          animation: slideUp 0.8s ease-out;
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
    className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-500"
    style={{
      transform: isHovered ? 'perspective(1000px) rotateX(2deg) rotateY(2deg) scale(1.05)' : 'perspective(1000px)',
      transformStyle: 'preserve-3d',
      boxShadow: isHovered
        ? '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
        : '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    }}
  >
    <div className="relative overflow-hidden">
      <img
        src={image}
        alt={name}
        className={`w-full h-48 object-cover transition-transform duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`}
      />
      <div
        className={`absolute inset-0 bg-gradient-to-t from-black/30 to-transparent transition-opacity duration-500 ${
          isHovered ? 'opacity-70' : 'opacity-0'
        }`}
      />
    </div>

    <div className="p-6">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold text-pink-900">{name}</h3>
        <div className="flex items-center">
          <Star className="w-5 h-5 text-yellow-500 mr-1" />
          <p className="text-sm font-medium text-pink-900">{rating}</p>
        </div>
      </div>

      <p className="text-sm text-pink-600 mb-2">{experience} years of experience</p>
      <p className="text-sm text-pink-600 mb-2">Mother Tongue: {motherTongue}</p>
      <p className="text-sm text-pink-600 mb-4">
        Specializations: {specializations.join(', ')}
      </p>

      <button
        onClick={onSelect}
        className="py-2 px-4 bg-pink-500 text-white rounded hover:bg-pink-600 transition w-full"
      >
        Book
      </button>
    </div>
  </div>
);

export default NannyDetails;
