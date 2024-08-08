// script.js
function updateTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedTime = `${hours % 12 || 12}:${minutes} ${ampm}`;
    document.getElementById('current-time').textContent = formattedTime;
}

window.onload = function () {
    updateTime();
    setInterval(updateTime, 60000); // Update the time every minute
};
