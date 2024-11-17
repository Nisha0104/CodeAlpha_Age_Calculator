const ageDisplay = document.querySelector(".ageDisplay");
const retryBtn = document.getElementById("retry");
const submitButton = document.getElementById("submit");

submitButton.addEventListener("click", function () {
  const dateValue = document.getElementById("birthdate").value;
  if (!dateValue) {
    ageDisplay.textContent = "Please enter a valid date.";
    return;
  }

  const birthDate = new Date(dateValue);
  const today = new Date();

  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  let days = today.getDate() - birthDate.getDate();
  console.log(years);
  console.log(months);
  console.log(days);
  // Display the result
  if (years > 0 && months > 0 && days > 0) {
    ageDisplay.textContent = `Your Current Age: ${years} year${
      years > 1 ? "s" : ""
    }, ${months} month${months > 1 ? "s" : ""}, and ${days} day${
      days > 1 ? "s" : ""
    }`;
  } else if (years > 0 && months > 0 && days === 0) {
    ageDisplay.textContent = `Your Current Age: ${years} year${
      years > 1 ? "s" : ""
    } and ${months} month${months > 1 ? "s" : ""}`;
  } else if (years > 0 && months === 0 && days > 0) {
    ageDisplay.textContent = `Your Current Age: ${years} year${
      years > 1 ? "s" : ""
    } and ${days} day${days > 1 ? "s" : ""}`;
  } else if (years > 0 && months === 0 && days === 0) {
    ageDisplay.textContent = `Your Current Age: ${years} year${
      years > 1 ? "s" : ""
    }`;
  } else if (years === 0 && months > 0 && days > 0) {
    ageDisplay.textContent = `You are ${months} month${
      months > 1 ? "s" : ""
    } and ${days} day${days > 1 ? "s" : ""} old.`;
  } else if (years === 0 && months > 0 && days === 0) {
    ageDisplay.textContent = `You are ${months} month${
      months > 1 ? "s" : ""
    } old.`;
  } else if (years === 0 && months === 0 && days > 0) {
    ageDisplay.textContent = `You are ${days} day${days > 1 ? "s" : ""} old.`;
  } else if (years === 0 && months === 0 && days <= 0) {
    ageDisplay.textContent = "Please enter a valid birthdate.";
  } else if (years === 0 && months >= 0 && days < 0) {
    ageDisplay.textContent = `You are ${30 - days} days old.`;
  } else {
    ageDisplay.textContent =
      "Error: Unable to calculate age. Please try again.";
  }

  // Disable input and hide the submit button
  document.getElementById("birthdate").disabled = true;
  submitButton.style.display = "none";
  retryBtn.style.display = "flex";
});

// Reset functionality
retryBtn.addEventListener("click", function () {
  document.getElementById("birthdate").disabled = false;
  document.getElementById("birthdate").value = "";
  ageDisplay.textContent = "";
  submitButton.style.display = "flex";
  retryBtn.style.display = "none";
});
