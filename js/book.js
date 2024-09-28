// Step 1: Handle Date and Time Selection
document.getElementById('booking-date').addEventListener('change', function () {
    const selectedDate = this.value;
    document.getElementById('selected-date').textContent = selectedDate;

    // Dynamically populate available times based on opening hours
    const bookingTime = document.getElementById('booking-time');
    bookingTime.innerHTML = ''; // Clear existing options

    const openingTime = 10; // 10 AM
    const closingTime = 19; // 7 PM

    for (let i = openingTime; i <= closingTime; i++) {
        const timeOption = document.createElement('option');
        timeOption.value = i + ':00';
        timeOption.textContent = i + ':00';
        bookingTime.appendChild(timeOption);
    }
});

document.getElementById('booking-time').addEventListener('change', function () {
    document.getElementById('selected-time').textContent = this.value;
});

// Step 2: Enable Next Button After Terms Acceptance
document.getElementById('accept-terms').addEventListener('change', function () {
    document.getElementById('next-step-2').disabled = !this.checked;
});

// Step 3: Step Navigation
document.getElementById('next-step-1').addEventListener('click', function () {
    document.getElementById('step-1').style.display = 'none';
    document.getElementById('step-2').style.display = 'block';
});

document.getElementById('next-step-2').addEventListener('click', function () {
    document.getElementById('step-2').style.display = 'none';
    document.getElementById('step-3').style.display = 'block';
});
