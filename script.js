function createModal() {
    const modal = document.createElement('div');
    modal.id = 'welcomeModal';
    modal.innerHTML = `
        <div id="modalOverlay">
            <div id="modalBox">
                <h2>🎉 Welcome to ElectroTech Electronics!</h2>
                <p>📅 <strong>FIXTURE:</strong> New arrivals every Friday — Don't miss out!</p>
                <p>🔥 <strong>PROMO:</strong> 10% OFF on all Smartphones this week only!</p>
                <p>💥 <strong>PROMO:</strong> Buy any Laptop and get a FREE bag!</p>
                <hr>
                <h3>Fill in Your Details to Continue</h3>

                <label>Name:</label>
                <input type="text" id="popName" placeholder="Enter your full name" /><br><br>

                <label>Email:</label>
                <input type="email" id="popEmail" placeholder="e.g. cindy@gmail.com" /><br><br>

                <label>Phone Number:</label>
                <input type="tel" id="popPhone" placeholder="e.g. +254 700 123 456" /><br><br>

                <label>Gender:</label>
                <select id="popGender">
                    <option value="">-- Select Gender --</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                </select><br><br>

                <button id="submitBtn">Submit</button>
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

    // Email validation
    if (!email.includes('@') || (!email.includes('.com') && !email.includes('.co'))) {
        alert("⚠️ Please enter a valid email address!");
        return;
    }

    alert(`✅ Thank you, ${name}!\nGender: ${gender}\nWe will contact you at:\n📧 ${email}\n📞 ${phone}`);
    document.getElementById('welcomeModal').remove();
}

window.onload = function () {
    createModal();

    document.getElementById('submitBtn').addEventListener('click', handleSubmit);
    document.getElementById('closeBtn').addEventListener('click', function () {
        document.getElementById('welcomeModal').remove();
    });
};
