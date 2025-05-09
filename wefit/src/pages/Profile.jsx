import { useState } from 'react';
import { User, Edit2, Save, X } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Profile = () => {
  const { user } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  
  const [profileData, setProfileData] = useState({
    name: 'Fitness Enthusiast',
    goal: 'Stay healthy',
    age: 28,
    weight: 75,
    height: 180,
    fitnessLevel: 'Intermediate',
    preferredWorkouts: ['Running', 'Weight Training', 'Yoga'],
    weeklyGoal: 4
  });
  
  const [formValues, setFormValues] = useState({ ...profileData });
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  
  const handleSave = () => {
    setProfileData(formValues);
    setIsEditing(false);
  };
  
  const handleCancel = () => {
    setFormValues({ ...profileData });
    setIsEditing(false);
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Profile</h1>
        {!isEditing ? (
          <button 
            onClick={() => setIsEditing(true)}
            className="flex items-center space-x-2 wf-button-secondary"
          >
            <Edit2 className="h-4 w-4" />
            <span>Edit Profile</span>
          </button>
        ) : (
          <div className="flex space-x-2">
            <button 
              onClick={handleCancel}
              className="flex items-center space-x-2 wf-button-secondary"
            >
              <X className="h-4 w-4" />
              <span>Cancel</span>
            </button>
            <button 
              onClick={handleSave}
              className="flex items-center space-x-2 wf-button-primary"
            >
              <Save className="h-4 w-4" />
              <span>Save</span>
            </button>
          </div>
        )}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="col-span-1">
          <div className="wf-card text-center">
            <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
              {!isEditing ? (
                <span className="text-4xl font-medium text-emerald-600">
                  {profileData.name.split(' ').map(n => n[0]).join('')}
                </span>
              ) : (
                <User className="h-12 w-12 text-emerald-600" />
              )}
            </div>
            
            {!isEditing ? (
              <>
                <h2 className="text-xl font-medium mb-1">{profileData.name}</h2>
                <p className="text-gray-500 text-sm mb-4">{profileData.goal}</p>
                
                <div className="grid grid-cols-3 gap-4 mt-6">
                  <div>
                    <p className="text-lg font-medium">{profileData.age}</p>
                    <p className="text-xs text-gray-500">Age</p>
                  </div>
                  <div>
                    <p className="text-lg font-medium">{profileData.weight} kg</p>
                    <p className="text-xs text-gray-500">Weight</p>
                  </div>
                  <div>
                    <p className="text-lg font-medium">{profileData.height} cm</p>
                    <p className="text-xs text-gray-500">Height</p>
                  </div>
                </div>
              </>
            ) : (
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formValues.name}
                    onChange={handleInputChange}
                    className="wf-input"
                  />
                </div>
                
                <div>
                  <label htmlFor="goal" className="block text-sm font-medium text-gray-700 mb-1">
                    Goal
                  </label>
                  <input
                    type="text"
                    name="goal"
                    id="goal"
                    value={formValues.goal}
                    onChange={handleInputChange}
                    className="wf-input"
                  />
                </div>
                
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-1">
                      Age
                    </label>
                    <input
                      type="number"
                      name="age"
                      id="age"
                      value={formValues.age}
                      onChange={handleInputChange}
                      className="wf-input"
                    />
                  </div>
                  <div>
                    <label htmlFor="weight" className="block text-sm font-medium text-gray-700 mb-1">
                      Weight (kg)
                    </label>
                    <input
                      type="number"
                      name="weight"
                      id="weight"
                      value={formValues.weight}
                      onChange={handleInputChange}
                      className="wf-input"
                    />
                  </div>
                  <div>
                    <label htmlFor="height" className="block text-sm font-medium text-gray-700 mb-1">
                      Height (cm)
                    </label>
                    <input
                      type="number"
                      name="height"
                      id="height"
                      value={formValues.height}
                      onChange={handleInputChange}
                      className="wf-input"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        
        <div className="col-span-1 md:col-span-2">
          <div className="wf-card h-full">
            <h2 className="text-lg font-medium mb-4">Fitness Details</h2>
            
            {!isEditing ? (
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500">Fitness Level</p>
                  <p className="font-medium">{profileData.fitnessLevel}</p>
                </div>
                
                <div>
                  <p className="text-sm text-gray-500">Preferred Workouts</p>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {profileData.preferredWorkouts.map((workout, index) => (
                      <span 
                        key={index} 
                        className="bg-emerald-100 text-emerald-800 text-xs px-2 py-1 rounded-md"
                      >
                        {workout}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <p className="text-sm text-gray-500">Weekly Workout Goal</p>
                  <p className="font-medium">{profileData.weeklyGoal} days per week</p>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div>
                  <label htmlFor="fitnessLevel" className="block text-sm font-medium text-gray-700 mb-1">
                    Fitness Level
                  </label>
                  <select
                    name="fitnessLevel"
                    id="fitnessLevel"
                    value={formValues.fitnessLevel}
                    onChange={handleInputChange}
                    className="wf-input"
                  >
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advanced">Advanced</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="weeklyGoal" className="block text-sm font-medium text-gray-700 mb-1">
                    Weekly Workout Goal (days per week)
                  </label>
                  <input
                    type="number"
                    name="weeklyGoal"
                    id="weeklyGoal"
                    min="1"
                    max="7"
                    value={formValues.weeklyGoal}
                    onChange={handleInputChange}
                    className="wf-input"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;