import React from 'react';

interface certItem {
  type: 'education' | 'experience';
  title: string;
  organization: string;
  date: string;
  location?: string;
  description?: string;
  skills?: string[];
}

const certificateItems: certItem[] = [
  {
    type: 'education',
    title: 'Introduction to Generative AI for Data Analysis',
    organization: 'Microsoft',
    date: 'Feb 2025',
    description: 'Successfully completed an online course on Generative AI for Data Analysis, authorized by Microsoft and offered through Coursera. This course provided in-depth knowledge of how Generative AI can be leveraged to enhance data analysis, automation, and decision-making.',
    skills: ['Generative AI','Data Analysis', 'AI-driven Data Processing', 'Data Visualization', 'Trend Prediction', 'Insights Generation','Workflow integration','Prompt engineering']
  },
  {
    type: 'education',
    title: 'Python Data Structures ',
    organization: 'University of Michigan',
    date: 'Nov 2023',
    description: 'An online course on Python Data Structures, authorized by the University of Michigan and offered through Coursera. This course provided a deep understanding of core data structures in Python and their applications in real-world problem-solving.',
    skills: ['Python Programming','Statistical Programming','Data Management','Programming Principles','Database Application']
  },
  {
    type: 'education',
    title: 'Machine Learning for All',
    organization: 'University Of London',
    date: 'Nov 2023',
    description: 'Completed the Machine Learning for All course, authorized by the University of London and delivered via Coursera,provided a comprehensive introduction to machine learning, covering both theoretical foundations and practical applications.',
    skills: ['Algorithms','Statistical Machine Learning','Artificial Neural Networks','Deep Learning','Feature Engineering','Computer Vision' ]
  }
];

const CertItem: React.FC<{ item: certItem }> = ({ item }) => (
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

const Certificates: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto p-4 bg-[#F8FAFC] dark:bg-[#151B28] rounded-lg shadow">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-900 dark:text-white">Certificates</h1>
      <div className="grid grid-cols-1 md:grid-cols-0 gap-8">
        <div>
          {certificateItems.map((item, index) => (
            <CertItem key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certificates;