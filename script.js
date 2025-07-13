// ✅ Display welcome message (Requirement a)
document.getElementById("welcomeMessage").innerText =
  "🚴 Welcome rider! Get ready to roll with Gilman’s Urban Ride!";

// ✅ Unique JavaScript Function (Requirement c)
// Function: Mood selector — shows message based on selected mood
function showMood() {
  const mood = document.getElementById("mood").value;
  const output = document.getElementById("moodOutput");

  if (mood === "fast") {
    output.innerText = "💨 Speed demon mode activated!";
    output.style.color = "#e53935";
  } else if (mood === "relaxed") {
    output.innerText = "🌿 Chill ride vibes only.";
    output.style.color = "#43a047";
  } else if (mood === "explore") {
    output.innerText = "🧭 Adventure awaits – let’s go off-road!";
    output.style.color = "#1e88e5";
  } else {
    output.innerText = "❓ Please choose your biking mood.";
    output.style.color = "#ff6f00";
  }
}