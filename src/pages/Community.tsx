import React from 'react';
import { Users, Calendar, MessageCircle } from 'lucide-react';

export const Community = () => {
  return (
    <div className="min-h-screen bg-pink-50 py-12 mt-12 font-serif">
      <div className="max-w-7xl mx-auto px-4">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-pink-800 mb-4"><br></br>
            Join Our Community
          </h1>
          <p className="text-pink-600 text-lg max-w-2xl mx-auto">
            You are not alone, Connect with other mothers, share experiences, and support each other through your journey
          </p>
        </section>

        {/* Discussion Forums */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-pink-800 mb-8">Discussion Forums</h2><br></br>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {forums.map((forum) => (
              <ForumCard key={forum.id} {...forum} />
            ))}
          </div>
        </section>

        {/* Upcoming Meetups */}
        <section className="bg-white py-16 -mx-4 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-pink-800 mb-8">Upcoming Meetups</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {meetups.map((meetup) => (
                <MeetupCard key={meetup.id} {...meetup} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

const ForumCard = ({ title, description, topics, members }) => (
  <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
    <h3 className="text-xl font-semibold text-pink-800 mb-2">{title}</h3>
    <p className="text-pink-600 mb-4">{description}</p>
    <div className="flex flex-wrap gap-2 mb-4">
      {topics.map((topic, index) => (
        <span
          key={index}
          className="px-2 py-1 bg-pink-100 text-pink-600 rounded-full text-sm"
        >
          {topic}
        </span>
      ))}
    </div>
    <div className="flex items-center text-pink-700">
      <Users className="w-4 h-4 mr-2" />
      <span>{members} members</span>
    </div>
  </div>
);

const MeetupCard = ({ title, date, location, description, attendees }) => (
  <div className="bg-pink-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
    <div className="flex justify-between items-start mb-4">
      <h3 className="text-xl font-semibold text-pink-800">{title}</h3>
      <span className="px-3 py-1 bg-pink-200 text-pink-700 rounded-full text-sm">
        {attendees} attending
      </span>
    </div>
    <div className="space-y-2 text-pink-700 mb-4">
      <p className="flex items-center">
        <Calendar className="w-4 h-4 mr-2" />
        {date}
      </p>
      <p className="flex items-center">
        <MessageCircle className="w-4 h-4 mr-2" />
        {location}
      </p>
    </div>
    <p className="text-pink-600 mb-4">{description}</p>
    <button className="w-full bg-pink-600 text-white py-2 rounded-md hover:bg-pink-700 transition-colors">
      Join Meetup
    </button>
  </div>
);

// Sample forum data
const forums = [
  {
    id: 1,
    title: "New Mothers Support",
    description: "Share experiences and get advice about the early days of motherhood",
    topics: ["Newborn Care", "Recovery", "Sleep"],
    members: 1250
  },
  {
    id: 2,
    title: "Mental Wellness",
    description: "A safe space to discuss mental health challenges and support",
    topics: ["Anxiety", "Depression", "Self-Care"],
    members: 890
  },
  {
    id: 3,
    title: "Working Moms",
    description: "Balancing career and motherhood - tips, tricks, and support",
    topics: ["Work-Life Balance", "Time Management", "Childcare"],
    members: 1100
  }
];

// Sample meetup data
const meetups = [
  {
    id: 1,
    title: "Morning Yoga for Moms",
    date: "March 15, 2024 - 9:00 AM",
    location: "Central Park, Mumbai",
    description: "Join us for a relaxing morning yoga session designed specifically for new mothers.",
    attendees: 15
  },
  {
    id: 2,
    title: "Postpartum Nutrition Workshop",
    date: "March 20, 2024 - 11:00 AM",
    location: "MomEase Center, Delhi",
    description: "Learn about proper nutrition during the postpartum period with our expert dietician.",
    attendees: 25
  }
];