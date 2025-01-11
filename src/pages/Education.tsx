import React from 'react';
import { Book, Video, FileText, Download } from 'lucide-react';

export const Education = () => {
  return (
    <div className="min-h-screen bg-pink-50 py-12 mt-12 font-serif"> <br></br>
      <div className="max-w-7xl mx-auto px-4">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-pink-800 mb-4">
            Educational Resources
          </h1>
          <p className="text-pink-600 text-lg max-w-2xl mx-auto">
            Comprehensive guides and resources to support you through your motherhood journey
          </p>
        </section>

        {/* Featured Guides */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-pink-800 mb-8">Featured Guides</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guides.map((guide) => (
              <GuideCard key={guide.id} {...guide} />
            ))}
          </div>
        </section>

        {/* Video Tutorials */}
        <section className="bg-white py-16 -mx-4 px-4 mb-16">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-pink-800 mb-8">Video Tutorials</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {videos.map((video) => (
                <VideoCard key={video.id} {...video} />
              ))}
            </div>
          </div>
        </section>

        {/* Downloadable Resources */}
        <section>
          <h2 className="text-3xl font-bold text-pink-800 mb-8">Downloadable Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource) => (
              <ResourceCard key={resource.id} {...resource} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

const GuideCard = ({ title, description, topics, readTime }) => (
  <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
    <div className="flex items-start justify-between mb-4">
      <h3 className="text-xl font-semibold text-pink-800">{title}</h3>
      <Book className="w-6 h-6 text-pink-600" />
    </div>
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
    <div className="flex justify-between items-center text-pink-700">
      <span>{readTime} min read</span>
      <button className="text-pink-600 hover:text-pink-700">Read More →</button>
    </div>
  </div>
);

const VideoCard = ({ title, thumbnail, duration, instructor }) => (
  <div className="bg-pink-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
    <img
      src={thumbnail}
      alt={title}
      className="w-full h-48 object-cover"
    />
    <div className="p-6">
      <div className="flex items-start justify-between mb-2">
        <h3 className="text-xl font-semibold text-pink-800">{title}</h3>
        <Video className="w-6 h-6 text-pink-600" />
      </div>
      <div className="flex justify-between items-center text-pink-700">
        <span>{duration}</span>
        <span>By {instructor}</span>
      </div>
      <button className="w-full mt-4 bg-pink-600 text-white py-2 rounded-md hover:bg-pink-700 transition-colors">
        Watch Now
      </button>
    </div>
  </div>
);

const ResourceCard = ({ title, description, fileType, fileSize }) => (
  <div className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow">
    <div className="flex items-start justify-between mb-4">
      <h3 className="text-xl font-semibold text-pink-800">{title}</h3>
      <FileText className="w-6 h-6 text-pink-600" />
    </div>
    <p className="text-pink-600 mb-4">{description}</p>
    <div className="flex justify-between items-center">
      <div className="text-pink-700">
        <span>{fileType}</span>
        <span className="mx-2">•</span>
        <span>{fileSize}</span>
      </div>
      <button className="flex items-center text-pink-600 hover:text-pink-700">
        <Download className="w-4 h-4 mr-1" />
        Download
      </button>
    </div>
  </div>
);

// Sample guide data
const guides = [
  {
    id: 1,
    title: "First Month with Your Newborn",
    description: "Essential tips and guidance for the crucial first month of parenthood",
    topics: ["Sleep", "Feeding", "Recovery"],
    readTime: 15
  },
  {
    id: 2,
    title: "Postpartum Mental Health",
    description: "Understanding and managing your mental health after childbirth",
    topics: ["Mental Health", "Self-Care", "Support"],
    readTime: 20
  },
  {
    id: 3,
    title: "Nutrition Guide",
    description: "Complete guide to postpartum nutrition and meal planning",
    topics: ["Diet", "Recipes", "Supplements"],
    readTime: 25
  }
];

// Sample video data
const videos = [
  {
    id: 1,
    title: "Newborn Care Basics",
    thumbnail: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9",
    duration: "15 mins",
    instructor: "Dr. Sarah Johnson"
  },
  {
    id: 2,
    title: "Postpartum Exercise Guide",
    thumbnail: "https://images.unsplash.com/photo-1518611012118-696072aa579a",
    duration: "20 mins",
    instructor: "Emma Thompson"
  }
];

// Sample resource data
const resources = [
  {
    id: 1,
    title: "Meal Planning Template",
    description: "Weekly meal planning sheets with nutritional guidelines",
    fileType: "PDF",
    fileSize: "2.5 MB"
  },
  {
    id: 2,
    title: "Sleep Schedule Tracker",
    description: "Track your baby's sleep patterns and establish routines",
    fileType: "PDF",
    fileSize: "1.8 MB"
  },
  {
    id: 3,
    title: "Recovery Exercise Guide",
    description: "Safe exercises for postpartum recovery",
    fileType: "PDF",
    fileSize: "3.2 MB"
  }
];