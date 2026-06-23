function createModal() {
    const modal = document.createElement('div');
    modal.id = 'welcomeModal';
    modal.innerHTML = `
        <div id="modalOverlay">

            <!-- STEP 1: Welcome + Promos -->
            <div id="modalStep1" class="modalBox">
                <h2>🎉 Welcome to ElectroTech Electronics!</h2>
                <p>📅 <strong>FIXTURE:</strong> New arrivals every Friday!</p>
                <p>🔥 <strong>PROMO:</strong> 10% OFF on all Smartphones this week!</p>
                <p>💥 <strong>PROMO:</strong> Buy any Laptop and get a FREE bag!</p>
                <br>
                <button id="okBtn">OK — Continue ➡</button>
            </div>

            <!-- STEP 2: Fill in Details -->
            <div id="modalStep2" class="modalBox" style="display:none;">
                <h2>📋 Fill In Your Details</h2>
                <p>Please complete the form below to proceed.</p>
                <hr>

                <label>Name:</label>
                <input type="text" id="popName" placeholder="Enter your full name" />

                <label>Email:</label>
                <input type="email" id="popEmail" placeholder="e.g. cindy@gmail.com" />

                <label>Phone Number:</label>
                <input type="tel" id="popPhone" placeholder="e.g. +254 700 123 456" />

                <label>Gender:</label>
                <select id="popGender">
                    <option value="">-- Select Gender --</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                </select>

                <br>
                <button id="submitBtn">✅ Submit</button>
                <button id="closeBtn">✖ Close</button>
            </div>

        </div>
    `;
    document.body.appendChild(modal);
}

function handleSubmit() {
    const name   = document.getElementById('popName').value.trim();
    const email  = document.getElementById('popEmail').value.trim();
    const phone  = document.getElementById('popPhone').value.trim();
    const gender = document.getElementById('popGender').value;

    if (!name || !email || !phone || !gender) {
        alert("⚠️ Please fill in ALL fields before submitting!");
        return;
    }

    if (!email.includes('@') || !email.includes('.')) {
        alert("⚠️ Please enter a valid email address!");
        return;
    }

    alert(`✅ Thank you, ${name}!\nGender: ${gender}\nWe will contact you at:\n📧 ${email}\n📞 ${phone}`);
    document.getElementById('welcomeModal').remove();
}

window.onload = function () {
    createModal();

    // OK button moves from Step 1 to Step 2
    document.getElementById('okBtn').addEventListener('click', function () {
        document.getElementById('modalStep1').style.display = 'none';
        document.getElementById('modalStep2').style.display = 'block';
    });

    document.getElementById('submitBtn').addEventListener('click', handleSubmit);

    document.getElementById('closeBtn').addEventListener('click', function () {
        document.getElementById('welcomeModal').remove();
    });
};
