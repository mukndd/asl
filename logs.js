document.addEventListener('DOMContentLoaded', () => {
    const logsContainer = document.getElementById('logs-container');
  
    for (let i = 1; i <= 4; i++) { // Adjust the number as needed
      const logBox = document.createElement('div');
      logBox.className = 'log-box';
      
      const logHeading = document.createElement('h2');
      logHeading.textContent = `Log ${i}`;
      
      logBox.appendChild(logHeading);
      logsContainer.appendChild(logBox);
    }
  });
  