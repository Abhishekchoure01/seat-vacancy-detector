function fetchData() {
    fetch("https://your-firebase-url.com/data.json")  // Replace with your Firebase URL
        .then(response => response.json())
        .then(data => {
            let status = document.getElementById("status");
            if (data.seat === "occupied") {
                status.textContent = "Occupied";
                status.className = "occupied";
            } else {
                status.textContent = "Available";
                status.className = "available";
            }
        })
        .catch(error => console.log("Error:", error));
}

setInterval(fetchData, 2000);  // Refresh every 2 seconds
