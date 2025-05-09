import { useState } from 'react';
import { Calendar, Download, Filter, ChevronLeft, ChevronRight } from 'lucide-react';

const History = () => {
  const [activeTab, setActiveTab] = useState('workout');
  const [dateFilter, setDateFilter] = useState('This Week');
  
  const workoutHistory = [
    { date: '2023-04-28', workout: 'Arms', duration: 30, calories: 150 },
    { date: '2023-04-26', workout: 'Legs', duration: 45, calories: 280 },
    { date: '2023-04-24', workout: 'Core', duration: 25, calories: 120 },
    { date: '2023-04-21', workout: 'Cardio', duration: 40, calories: 350 },
    { date: '2023-04-19', workout: 'Full Body', duration: 60, calories: 420 },
  ];
  
  const weightHistory = [
    { date: '2023-04-28', current: 74.8, target: 70 },
    { date: '2023-04-25', current: 75.0, target: 70 },
    { date: '2023-04-22', current: 75.2, target: 70 },
    { date: '2023-04-19', current: 75.5, target: 70 },
    { date: '2023-04-16', current: 75.8, target: 70 },
  ];
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
        <h1 className="text-2xl font-bold mb-4 sm:mb-0">History</h1>
        
        <div className="flex space-x-2">
          <div className="relative">
            <button className="wf-button-secondary flex items-center space-x-2">
              <Calendar className="h-4 w-4" />
              <span>{dateFilter}</span>
              <ChevronDown className="h-4 w-4" />
            </button>
          </div>
          
          <button className="wf-button-secondary flex items-center space-x-2">
            <Filter className="h-4 w-4" />
            <span>Filter</span>
          </button>
          
          <button className="wf-button-secondary flex items-center space-x-2">
            <Download className="h-4 w-4" />
            <span>Export</span>
          </button>
        </div>
      </div>
      
      <div className="flex space-x-4 mb-6">
        <button
          className={`pb-2 font-medium ${
            activeTab === 'workout'
              ? 'text-emerald-600 border-b-2 border-emerald-600'
              : 'text-gray-500 hover:text-gray-700'
          }`}
          onClick={() => setActiveTab('workout')}
        >
          Workout History
        </button>
        <button
          className={`pb-2 font-medium ${
            activeTab === 'weight'
              ? 'text-emerald-600 border-b-2 border-emerald-600'
              : 'text-gray-500 hover:text-gray-700'
          }`}
          onClick={() => setActiveTab('weight')}
        >
          Weight History
        </button>
      </div>
      
      {activeTab === 'workout' && (
        <div className="wf-card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="wf-table">
              <thead className="bg-gray-50">
                <tr>
                  <th>Date</th>
                  <th>Workout</th>
                  <th>Duration</th>
                  <th>Calories</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {workoutHistory.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td>{formatDate(item.date)}</td>
                    <td>{item.workout}</td>
                    <td>{item.duration} min</td>
                    <td>{item.calories}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="flex items-center justify-between p-4 border-t border-gray-200">
            <button className="flex items-center space-x-1 text-gray-600 hover:text-gray-900">
              <ChevronLeft className="h-4 w-4" />
              <span>Previous</span>
            </button>
            <div className="text-sm text-gray-500">
              Showing 5 of 24 entries
            </div>
            <button className="flex items-center space-x-1 text-gray-600 hover:text-gray-900">
              <span>Next</span>
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}
      
      {activeTab === 'weight' && (
        <div className="wf-card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="wf-table">
              <thead className="bg-gray-50">
                <tr>
                  <th>Date</th>
                  <th>Current Weight (kg)</th>
                  <th>Target Weight (kg)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {weightHistory.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td>{formatDate(item.date)}</td>
                    <td>{item.current}</td>
                    <td>{item.target}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="flex items-center justify-between p-4 border-t border-gray-200">
            <button className="flex items-center space-x-1 text-gray-600 hover:text-gray-900">
              <ChevronLeft className="h-4 w-4" />
              <span>Previous</span>
            </button>
            <div className="text-sm text-gray-500">
              Showing 5 of 15 entries
            </div>
            <button className="flex items-center space-x-1 text-gray-600 hover:text-gray-900">
              <span>Next</span>
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

const ChevronDown = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
);

export default History;