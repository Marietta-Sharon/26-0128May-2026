// ===============================
// SUPABASE CONFIGURATION
// ===============================

const SUPABASE_URL = "https://ybunqlcevxopdfkayrxf.supabase.co";
const SUPABASE_KEY = "sb_publishable_mfMgA90hEANU1_4BYSCc6A_fuYJIc3I"; 

const { createClient } = supabase;
const db = createClient(SUPABASE_URL, SUPABASE_KEY);

// ===============================
// CREATE POPUP
// ===============================

function createModal() {
    const modal = document.createElement('div');
    modal.id = 'welcomeModal';
    modal.innerHTML = `
        <div id="modalOverlay">

            <div id="modalStep1" class="modalBox">
                <h2>🎉 Welcome to ElectroTech Electronics!</h2>

                <p>📅 <strong>FIXTURE:</strong> New arrivals every Friday!</p>

                <p>🔥 <strong>PROMO:</strong> 10% OFF on all Smartphones this week!</p>

                <p>💥 <strong>PROMO:</strong> Buy any Laptop and get a FREE bag!</p>

                <br>

                <button id="okBtn">OK — Continue ➡</button>

            </div>

            <div id="modalStep2" class="modalBox" style="display:none;">

                <h2>📋 Fill In Your Details</h2>

                <p>Please complete the form below to proceed.</p>

                <hr>

                <label>Name:</label>
                <input type="text" id="popName" placeholder="Enter your full name">

                <label>Email:</label>
                <input type="email" id="popEmail" placeholder="e.g. cindy@gmail.com">

                <label>Phone Number:</label>
                <input type="tel" id="popPhone" placeholder="e.g. +254700123456">

                <label>Gender:</label>

                <select id="popGender">

                    <option value="">-- Select Gender --</option>

                    <option value="Male">Male</option>

                    <option value="Female">Female</option>

                    <option value="Other">Other</option>

                </select>

                <br><br>

                <button id="submitBtn">✅ Submit</button>

                <button id="closeBtn">✖ Close</button>

            </div>

        </div>
    `;

    document.body.appendChild(modal);
}

// ===============================
// SAVE TO SUPABASE
// ===============================

async function handleSubmit() {

    const name = document.getElementById('popName').value.trim();
    const email = document.getElementById('popEmail').value.trim();
    const phone = document.getElementById('popPhone').value.trim();
    const gender = document.getElementById('popGender').value;

    if (!name || !email || !phone || !gender) {
        alert("⚠️ Please fill in ALL fields.");
        return;
    }

    const { error } = await db
        .from("records")
        .insert([
            {
                name: name,
                email: email,
                phone: phone,
                gender: gender
            }
        ]);

    if (error) {
        console.error(error);
        alert("❌ " + error.message);
        return;
    }

    alert("✅ Thank you! Your information has been saved successfully.");

    document.getElementById("welcomeModal").remove();
}

// ===============================
// EVENTS
// ===============================

window.onload = function () {

    createModal();

    document.getElementById('okBtn').addEventListener('click', function () {

        document.getElementById('modalStep1').style.display = 'none';

        document.getElementById('modalStep2').style.display = 'block';

    });

    document.getElementById('submitBtn').addEventListener('click', handleSubmit);

    document.getElementById('closeBtn').addEventListener('click', function () {

        document.getElementById('welcomeModal').remove();

    });

};
