# Rural-Rescue-Ride--2  
🩺 Overview 
Rural Rescue Rover is a web-based prototype that connects rural patients with nearby ambulance drivers in real time using AI, IoT, and GPS. It aims to solve the critical problem of delayed emergency response in rural areas by creating a simple, tech-powered coordination platform between patients, drivers, and hospitals

💡 Features

⚙️ AI + GPS-based Ambulance Request: Detects user location automatically and dispatches the nearest available driver.

📲 Real-Time Alerts: SMS and on-screen notifications for both drivers and patients.

👨‍⚕️ Driver Login & Registration System: Secure authentication for drivers to access their dashboards.

📊 Performance Analytics: Uses Chart.js to visualize response times and service coverage.

🌍 3D Globe Visualization: Integrated with Vanta.js and Three.js for an interactive hero background.

💬 Dynamic UI Components: Custom navbar and footer built with reusable JS components.

🎨 Modern UI/UX: Designed with TailwindCSS and responsive layouts for all screen sizes.

🧠 Tech Stack
Technology	Purpose
HTML5, CSS3, JavaScript (ES6)	Core structure and functionality
Tailwind CSS	Modern, responsive design
Chart.js	Data visualization
Vanta.js & Three.js	Interactive animated background
Feather Icons	Clean vector icons
Geolocation API	Fetching live location of the user
Simulated SMS API (console)	Notification simulation for demo purposes
📁 Project Structure
├── index.html             # Landing page with ambulance request system

├── about.html             # About page explaining project vision

├── driver-login.html      # Login page for ambulance drivers

├── driver-register.html   # Registration page for new drivers

├── style.css              # Shared styles across all pages

├── script.js              # Core JavaScript logic (alerts, geolocation, UI)

└── components/
    ├── navbar.js          # Custom navigation bar

    
 └── footer.js          # 
    Custom footer
    

🚀 How It Works

The user clicks “Request Ambulance Now” → the system fetches GPS coordinates.

A simulated backend identifies the nearest driver and shows a success alert.

Drivers log in via Driver Dashboard to accept or manage requests.

Data visualization showcases improved response times and coverage.

🧩 Future Scope

Real-time driver tracking using Google Maps API.

Integration with Twilio or AWS SNS for actual SMS alerts.

Hospital-side dashboard for coordination.

AI prediction for ambulance demand in specific zones.

Future Improvements 

Add Google Maps API to show driver location.

Add Firebase or MySQL backend to store registrations permanently.

Add SMS alerts for nearby drivers.

Add Admin dashboard for monitoring.
