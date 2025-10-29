// Shared JavaScript across all pages
// Request ambulance function
function requestAmbulance() {
    if (navigator.geolocation) {
        // Show loading state
        showLoading('Locating your position...');
        
        navigator.geolocation.getCurrentPosition(
            function(position) {
                const lat = position.coords.latitude;
                const lng = position.coords.longitude;
                
                // Simulate ambulance request
                setTimeout(() => {
                    hideLoading();
                    showSuccess('Ambulance requested! Nearest vehicle is on its way to your location.');
                    sendSMSNotification(lat, lng);
                }, 2000);
            },
            function(error) {
                hideLoading();
                showError('Unable to get your location. Please enable GPS or enter your location manually.');
            }
        );
    } else {
        showError('Geolocation is not supported by this browser.');
    }
}

// Mobile responsiveness helper
function checkMobile() {
    return window.innerWidth <= 768;
}
// SMS notification simulation
function sendSMSNotification(lat, lng) {
    // In a real implementation, this would connect to an SMS gateway API
    console.log(`SMS sent: Ambulance dispatched to coordinates ${lat}, ${lng}`);
    
    // Simulate SMS sending
    setTimeout(() => {
        showInfo('SMS confirmation sent to your registered mobile number.');
    }, 1000);
}

// Loading utilities
function showLoading(message = 'Loading...') {
    const loadingDiv = document.createElement('div');
    loadingDiv.id = 'loading-overlay';
    loadingDiv.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';
    loadingDiv.innerHTML = `
        <div class="bg-white p-6 rounded-lg shadow-xl text-center">
            <div class="loading-spinner mx-auto mb-4"></div>
            <p class="text-gray-700">${message}</p>
        </div>
    `;
    document.body.appendChild(loadingDiv);
}

function hideLoading() {
    const loadingDiv = document.getElementById('loading-overlay');
    if (loadingDiv) {
        loadingDiv.remove();
    }
}
// Notification utilities
function showSuccess(message) {
    showNotification(message, 'teal');
}

function showError(message) {
    showNotification(message, 'rose');
}

function showInfo(message) {
    showNotification(message, 'blue');
}

function showNotification(message, color) {
    const notification = document.createElement('div');
    const isMobile = checkMobile();
    notification.className = `fixed ${isMobile ? 'top-20 left-4 right-4' : 'top-4 right-4'} bg-${color}-500 text-white ${isMobile ? 'px-4 py-3' : 'px-6 py-4'} rounded-lg shadow-lg z-50 fade-in`;
    notification.innerHTML = `
        <div class="flex items-center">
            <i data-feather="${color === 'teal' ? 'check-circle' : color === 'rose' ? 'alert-circle' : 'info'}" class="mr-3"></i>
            <span class="text-sm ${isMobile ? '' : 'text-base'}">${message}</span>
        </div>
    `;
    document.body.appendChild(notification);
    
    feather.replace();
    
    setTimeout(() => {
        notification.remove();
    }, 5000);
}
// Form validation
function validateForm(formData) {
    const errors = [];
    
    if (!formData.phone || formData.phone.length < 10) {
        errors.push('Please enter a valid phone number');
    }
    
    if (!formData.password || formData.password.length < 6) {
        errors.push('Password must be at least 6 characters long');
    }
    
    return errors;
}

// GPS location helper
function getCurrentLocation() {
    return new Promise((resolve, reject) => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                position => resolve({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                }),
                error => reject(error)
            );
        } else {
            reject(new Error('Geolocation not supported'));
        }
    });
}

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
    console.log('Rural Rescue Rover App loaded');
});