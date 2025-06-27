import { useState } from 'react';
import styles from './StatusDashboard.module.css';

const StatusDashboard = () => {
  const [statusText, setStatusText] = useState('');
  const [category, setCategory] = useState('Work');
  const [statusUpdates, setStatusUpdates] = useState([]);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Trim the status text
    const trimmedStatus = statusText.trim();
    
    // Validate input
    if (!trimmedStatus) {
      alert('Please enter a status update.');
      return;
    }
    
    // Create new status update
    const newStatus = {
      id: Date.now(),
      text: trimmedStatus.slice(0, 100), // Ensure max 100 characters
      category,
      timestamp: new Date(),
    };
    
    // Add to the beginning of the array and keep only the 5 most recent
    setStatusUpdates([newStatus, ...statusUpdates].slice(0, 5));
    
    // Clear form
    setStatusText('');
  };

  // Format timestamp
  const formatTimestamp = (date) => {
    return date.toLocaleString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
      month: 'short',
      day: 'numeric',
    });
  };

  // Get badge class based on category
  const getBadgeClass = (category) => {
    switch (category) {
      case 'Work':
        return styles.badgeWork;
      case 'Personal':
        return styles.badgePersonal;
      case 'Away':
        return styles.badgeAway;
      default:
        return '';
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Custom Status Dashboard</h1>
      
      {/* Status input form */}
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="status-text">
            What's your current status?
          </label>
          <input
            id="status-text"
            type="text"
            className={styles.input}
            value={statusText}
            onChange={(e) => setStatusText(e.target.value)}
            maxLength={100}
            placeholder="Enter your status update..."
          />
          <div className={styles.characterCount}>
            {statusText.length}/100 characters
          </div>
        </div>
        
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="category">
            Category
          </label>
          <select
            id="category"
            className={styles.select}
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="Work">Work</option>
            <option value="Personal">Personal</option>
            <option value="Away">Away</option>
          </select>
        </div>
        
        <button
          type="submit"
          className={styles.button}
        >
          Update Status
        </button>
      </form>
      
      {/* Status dashboard */}
      <div className={styles.dashboard}>
        <h2 className={styles.dashboardTitle}>Recent Status Updates</h2>
        
        {statusUpdates.length === 0 ? (
          <div className={styles.emptyMessage}>
            No updates yet
          </div>
        ) : (
          <div className={styles.statusList}>
            {statusUpdates.map((status) => (
              <div key={status.id} className={styles.statusItem}>
                <div className={styles.statusText}>{status.text}</div>
                <div className={styles.statusMeta}>
                  <span className={`${styles.badge} ${getBadgeClass(status.category)}`}>
                    {status.category}
                  </span>
                  <span className={styles.timestamp}>
                    {formatTimestamp(status.timestamp)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      
      {/* Footer */}
      <footer className={styles.footer}>
        Developed by Christian Cattani
      </footer>
    </div>
  );
};

export default StatusDashboard;
