// ===============================
// SUPABASE CONFIGURATION
// ===============================

const SUPABASE_URL = "https://ybunqlcevxopdfkayrxf.supabase.co";
const SUPABASE_KEY = "sb_publishable_mfMgA90hEANU1_4BYSCc6A_fuYJIc3I";

const { createClient } = supabase;
const db = createClient(SUPABASE_URL, SUPABASE_KEY);

// ===============================
// CONTACT FORM
// ===============================

document.getElementById("contactForm").addEventListener("submit", async function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
        alert("Please complete all the fields.");
        return;
    }

    const { error } = await db
        .from("contact_messages")
        .insert([
            {
                name: name,
                email: email,
                message: message
            }
        ]);

    if (error) {
        console.error(error);
        alert("Sorry! Your message could not be sent.\n\n" + error.message);
        return;
    }

    alert("✅ Thank you! Your message has been sent successfully. We will get back to you soon.");

    document.getElementById("contactForm").reset();
});
