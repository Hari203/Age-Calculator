function calculateAge() {
    const dob = document.getElementById('dob').value;
    const result = document.getElementById('result');

    if (dob) {
        const dobDate = new Date(dob);
        const currentDate = new Date();

        let years = currentDate.getFullYear() - dobDate.getFullYear();
        let months = currentDate.getMonth() - dobDate.getMonth();
        let days = currentDate.getDate() - dobDate.getDate();

        if (days < 0) {
            months--;
            days += new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
        }

        if (months < 0) {
            years--;
            months += 12;
        }

        result.innerText = `You are ${years} years, ${months} months, and ${days} days old`;
    } else {
        result.innerText = "Please select your date of birth.";
    }
}
