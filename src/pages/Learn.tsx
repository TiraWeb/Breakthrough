import React from 'react';
import { Book, Star, Lock, Trophy } from 'lucide-react';
import './Learn.css';

const units = [
  {
    id: 1,
    title: 'Unit 1',
    description: 'Form basic sentences, greet people',
    color: '#58cc02',
    isLocked: false,
    lessons: [
      { type: 'start', completed: true },
      { type: 'lesson', completed: true },
      { type: 'practice', completed: true },
      { type: 'lesson', completed: true },
      { type: 'challenge', completed: false },
      { type: 'lesson', completed: false },
    ]
  },
  {
    id: 2,
    title: 'Unit 2',
    description: 'Get around in a city',
    color: '#ce82ff',
    isLocked: false,
    lessons: [
      { type: 'lesson', completed: false },
      { type: 'practice', completed: false },
      { type: 'lesson', completed: false },
      { type: 'challenge', completed: false },
      { type: 'lesson', completed: false },
    ]
  },
  {
    id: 3,
    title: 'Unit 3',
    description: 'Order food and drink',
    color: '#00cd9c',
    isLocked: true,
    lessons: [
      { type: 'lesson', completed: false },
      { type: 'practice', completed: false },
      { type: 'lesson', completed: false },
      { type: 'challenge', completed: false },
    ]
  }
];

function Learn() {
  return (
    <div className="learn-container">
      <div className="learn-content">
        <div className="learning-path">
          {units.map((unit) => (
            <div key={unit.id} className="unit-section">
              <div className="unit-header" style={{ backgroundColor: unit.color }}>
                <div className="unit-info">
                  <h2>{unit.title}</h2>
                  <p>{unit.description}</p>
                </div>
                <button className="guidebook-btn">
                  <Book size={16} />
                  GUIDEBOOK
                </button>
              </div>
              
              <div className="lesson-path">
                {unit.lessons.map((lesson, index) => (
                  <div key={index} className="lesson-item">
                    <div className={`lesson-node ${lesson.completed ? 'completed' : ''} ${unit.isLocked ? 'locked' : ''}`}>
                      {lesson.type === 'start' && <Star size={24} />}
                      {lesson.type === 'lesson' && <Book size={24} />}
                      {lesson.type === 'practice' && <Trophy size={24} />}
                      {lesson.type === 'challenge' && <Star size={24} />}
                      {unit.isLocked && <Lock size={16} className="lock-icon" />}
                    </div>
                    {index < unit.lessons.length - 1 && (
                      <div className={`lesson-connector ${lesson.completed ? 'completed' : ''}`} />
                    )}
                  </div>
                ))}
              </div>

              {unit.id < units.length && (
                <button className="jump-btn" disabled={unit.isLocked}>
                  JUMP HERE?
                </button>
              )}
            </div>
          ))}
        </div>

        <div className="progress-sidebar">
          <div className="progress-card">
            <h3>Unlock Leaderboards!</h3>
            <div className="unlock-info">
              <div className="unlock-icon">
                <Trophy size={24} />
              </div>
              <p>Complete 9 more lessons to start competing</p>
            </div>
          </div>

          <div className="progress-card">
            <div className="progress-header">
              <h3>XP Progress</h3>
              <button className="edit-goal-btn">EDIT GOAL</button>
            </div>
            <div className="daily-goal">
              <div className="goal-icon">📚</div>
              <div className="goal-info">
                <span>Daily Goal</span>
                <div className="goal-progress">
                  <div className="goal-bar">
                    <div className="goal-fill" style={{ width: '30%' }}></div>
                  </div>
                  <span>13/20 XP</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Learn;