import React from 'react';
import { Clock, Zap, Trophy, Medal } from 'lucide-react';
import './Profile.css';

const achievements = [
  {
    title: 'Wildfire',
    description: 'Reach a 3 day streak',
    progress: '1/3',
    icon: '🔥',
    level: 1,
    progressPercent: 33,
  },
  {
    title: 'Sage',
    description: 'Earn 100 XP',
    progress: '27/100',
    icon: '🧙‍♂️',
    level: 1,
    progressPercent: 27,
  },
  {
    title: 'Scholar',
    description: 'Learn 50 new words in a single course',
    progress: '17/50',
    icon: '📜',
    level: 1,
    progressPercent: 34,
  },
];

const stats = [
  { icon: Clock, value: '0', label: 'Day streak' },
  { icon: Zap, value: '27', label: 'Total XP' },
  { icon: Trophy, value: 'Bronze', label: 'Current league' },
  { icon: Medal, value: '0', label: 'Top 3 finishes' },
];

function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="profile-info">
          <div className="avatar">
            <span>D</span>
            <div className="avatar-edit">
              <Clock size={16} />
            </div>
          </div>
          <div className="user-details">
            <h1>Peter Griffin</h1>
            <p className="username">Peterdactyl2015</p>
            <p className="join-date">
              <Clock size={16} />
              Joined February 2023
            </p>
            <div className="language-flags">
              <span className="flag">🇪🇸</span>
            </div>
          </div>
        </div>
        <button className="edit-profile-btn">
          <Clock size={16} />
          EDIT PROFILE
        </button>
      </div>

      <section className="statistics-section">
        <h2>Statistics</h2>
        <div className="stats-grid">
          {stats.map((stat) => (
            <div key={stat.label} className="stat-card">
              <stat.icon size={24} className="stat-icon" />
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="achievements-section">
        <h2>Achievements</h2>
        <div className="achievements-list">
          {achievements.map((achievement) => (
            <div key={achievement.title} className="achievement-card">
              <div className="achievement-icon level-1">
                <span>{achievement.icon}</span>
                <div className="level-badge">LEVEL 1</div>
              </div>
              <div className="achievement-details">
                <div className="achievement-header">
                  <h3>{achievement.title}</h3>
                  <span className="achievement-progress">{achievement.progress}</span>
                </div>
                <p>{achievement.description}</p>
                <div className="progress-bar">
                  <div 
                    className="progress-fill"
                    style={{ width: `${achievement.progressPercent}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
          <button className="view-all-btn">
            View all
            <Clock size={16} />
          </button>
        </div>
      </section>
    </div>
  );
}

export default Profile;