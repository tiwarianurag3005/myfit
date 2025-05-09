import { Flame, Clock, Footprints, Weight } from 'lucide-react';
import StatCard from '../components/StatCard';
import GoalCard from '../components/GoalCard';

const Dashboard = () => {
  // Mock data
  const dailyGoals = [
    { 
      icon: <Flame className="h-4 w-4" />, 
      label: 'Calories Burned', 
      value: 500, 
      target: 1000 
    },
    { 
      icon: <Footprints className="h-4 w-4" />, 
      label: 'Steps Taken', 
      value: 5834, 
      target: 10000 
    },
    { 
      icon: <Clock className="h-4 w-4" />, 
      label: 'Workout Time', 
      value: 45, 
      target: 60, 
      unit: 'min' 
    },
    { 
      icon: <Weight className="h-4 w-4" />, 
      label: 'Weight', 
      value: 75, 
      target: 70, 
      unit: 'kg' 
    }
  ];
  
  const weeklyGoals = [
    { 
      icon: <Flame className="h-4 w-4" />, 
      label: 'Calories Burned', 
      value: 3500, 
      target: 7000 
    },
    { 
      icon: <Footprints className="h-4 w-4" />, 
      label: 'Steps Taken', 
      value: 41834, 
      target: 70000 
    },
    { 
      icon: <Clock className="h-4 w-4" />, 
      label: 'Workout Time', 
      value: 180, 
      target: 300, 
      unit: 'min' 
    },
    { 
      icon: <Weight className="h-4 w-4" />, 
      label: 'Weight Loss', 
      value: 0.5, 
      target: 1, 
      unit: 'kg' 
    }
  ];
  
  const recentWorkouts = [
    { 
      date: '2023-04-28', 
      workout: 'Arms', 
      duration: 30, 
      calories: 150 
    },
    { 
      date: '2023-04-26', 
      workout: 'Legs', 
      duration: 45, 
      calories: 280 
    },
    { 
      date: '2023-04-24', 
      workout: 'Core', 
      duration: 25, 
      calories: 120 
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* User Summary */}
        <div className="wf-card col-span-1">
          <div className="flex flex-col items-center justify-center py-4">
            <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-4xl font-medium text-emerald-600">FE</span>
            </div>
            <h2 className="text-xl font-medium mb-1">Fitness Enthusiast</h2>
            <p className="text-gray-500 text-sm mb-4">Stay healthy</p>
            
            <div className="grid grid-cols-3 w-full text-center mt-2">
              <div>
                <p className="text-lg font-medium">28</p>
                <p className="text-xs text-gray-500">Age</p>
              </div>
              <div>
                <p className="text-lg font-medium">75 kg</p>
                <p className="text-xs text-gray-500">Weight</p>
              </div>
              <div>
                <p className="text-lg font-medium">180 cm</p>
                <p className="text-xs text-gray-500">Height</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Daily Goals */}
        <div className="col-span-1">
          <GoalCard 
            title="Daily Goals" 
            stats={dailyGoals}
          />
        </div>
        
        {/* Weekly Goals */}
        <div className="col-span-1">
          <GoalCard 
            title="Weekly Goals" 
            stats={weeklyGoals}
          />
        </div>
      </div>
      
      {/* Workout History */}
      <div className="mt-8">
        <h2 className="text-xl font-medium mb-4">Recent Workouts</h2>
        <div className="wf-card overflow-x-auto">
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
              {recentWorkouts.map((workout, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td>{workout.date}</td>
                  <td>{workout.workout}</td>
                  <td>{workout.duration} min</td>
                  <td>{workout.calories}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;