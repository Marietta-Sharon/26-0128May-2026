const SUPABASE_URL = "https://ybunqlcevxopdfkayrxf.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_mfMgA90hEANU1_4BYSCc6A_fuYJIc3I";
const client = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

document.getElementById("contactForm").addEventListener("submit", async function (e) {
  e.preventDefault();
  const status = document.getElementById("status");

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const gender = document.getElementById("gender").value;

  if (!name || !email) {
    status.textContent = "Please fill in your name and email.";
    return;
  }

  status.textContent = "Submitting...";

  const { error } = await client.from("info").insert([
    { name, email, phone, gender }
  ]);

  if (error) {
    console.error(error);
    status.textContent = "Something went wrong: " + error.message;
    return;
  }

  status.textContent = "Thanks! Your details were submitted successfully.";
  document.getElementById("contactForm").reset();
});

document.getElementById("closeBtn").addEventListener("click", () => {
  document.getElementById("contactForm").reset();
  document.getElementById("status").textContent = "";
});
