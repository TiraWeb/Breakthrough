import React from 'react';
import { Dumbbell, Brain, Clock, Zap } from 'lucide-react';
import './Practice.css';

const practiceTypes = [
  {
    icon: Brain,
    title: 'Lesson Review',
    description: 'Practice previous lessons',
    color: 'var(--primary-color)',
  },
  {
    icon: Clock,
    title: 'Timed Challenge',
    description: 'Complete exercises against the clock',
    color: 'var(--secondary-color)',
  },
  {
    icon: Zap,
    title: 'Lightning Round',
    description: 'Quick-fire practice session',
    color: 'var(--tertiary-color)',
  },
];

function Practice() {
  return (
    <div className="practice-container">
      <h1>Practice Exercises</h1>
      <div className="practice-grid">
        {practiceTypes.map((type) => (
          <button
            key={type.title}
            className="practice-card"
            style={{ backgroundColor: type.color }}
          >
            <type.icon className="practice-icon" size={32} />
            <h3 className="practice-title">{type.title}</h3>
            <p className="practice-description">{type.description}</p>
          </button>
        ))}
      </div>
    </div>
  );
}

export default Practice;