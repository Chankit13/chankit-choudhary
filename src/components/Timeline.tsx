import React from 'react';

interface TimelineItem {
  type: 'education' | 'experience';
  title: string;
  organization: string;
  date: string;
  location?: string;
  description?: string;
  skills?: string[];
}

const educationItems: TimelineItem[] = [
  {
    type: 'education',
    title: 'B.E. CSE(HONS.) AIML',
    organization: 'Chandigarh University',
    date: 'Aug 2022 - June 2026',
    description: 'Pursuing a rigorous undergraduate program that blends core computer science principles with specialized AI and ML techniques',
    skills: ['Python','Machine learning', 'Deep Learning', 'NLP', 'SQL', 'Docker']
  },
  {
    type: 'education',
    title: 'Senior Secondary Education ',
    organization: 'Shatabdi Public School',
    date: 'April 2021 - April 2022',
    description: 'senior secondary education in Physics, Chemistry, and Mathematics (PCM) under CBSE, building a strong foundation in analytical and problem-solving skills.',
    skills: ['Mathematical Problem-Solving','Logical Reasoning','Computer Applications']
  },
  {
    type: 'education',
    title: 'Secondary Education',
    organization: 'Shatabdi Public School',
    date: 'Apr 2019 - Apr 2020',
    description: 'secondary education under cbse.',
    skills: ['Communication & Presentation','Mathematical Reasoning','Teamwork & Collaboration' ]
  }
];

const experienceItems: TimelineItem[] = [
  {
    type: 'experience',
    title: 'Training in Kotlin Development',
    organization: 'Chandigarh University',
    date: 'May 2023 - June 2023 ·6 weeks',
    location: 'Mohali, India',
    description: 'Completed an intensive summer training program focused on Kotlin programming and Android app development,  gaining hands-on experience in designing, developing, and deploying Android applications.',
    skills: ['Kotlin', 'Android Development', 'Git']
  },
  
];
const TimelineItem: React.FC<{ item: TimelineItem }> = ({ item }) => (
  <div className="mb-8 relative">
    <div className="absolute top-0 left-0 w-2 h-full bg-gray-200 dark:bg-gray-700" />
    <div className="ml-6 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <div className="absolute left-0 top-4 w-6 h-6 bg-blue-500 rounded-full border-4 border-white dark:border-gray-800" />
      <h3 className="text-lg font-medium text-gray-900 dark:text-white">{item.title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-400">{item.organization}</p>
      <p className="text-sm text-gray-500 dark:text-gray-500">{item.date}</p>
      {item.location && (
        <p className="text-sm text-gray-500 dark:text-gray-500">{item.location}</p>
      )}
      {item.description && (
        <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">{item.description}</p>
      )}
      {item.skills && (
        <div className="mt-2 flex flex-wrap gap-2">
          {item.skills.map((skill, index) => (
            <span key={index} className="px-2 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300">
              {skill}
            </span>
          ))}
        </div>
      )}
    </div>
  </div>
);

const Timeline: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto p-4 bg-[#F8FAFC] dark:bg-[#151B28] rounded-lg shadow">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-900 dark:text-white">Timeline</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Education</h2>
          {educationItems.map((item, index) => (
            <TimelineItem key={index} item={item} />
          ))}
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Experience/Training</h2>
          {experienceItems.map((item, index) => (
            <TimelineItem key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;