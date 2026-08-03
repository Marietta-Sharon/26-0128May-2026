// =======================
// SUPABASE CONNECTION
// =======================

const SUPABASE_URL = "https://ybunqlcevxopdfkayrxf.supabase.co";

const SUPABASE_KEY =
"sb_publishable_mfMgA90hEANU1_4BYSCc6A_fuYJIc3I";

const supabase = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);

// =======================
// CREATE POPUP
// =======================

function createModal() {

    const modal = document.createElement("div");

    modal.id = "welcomeModal";

    modal.innerHTML = `

<div id="modalOverlay">

<div id="modalStep1" class="modalBox">

<h2>🎉 Welcome to ElectroTech Electronics!</h2>

<p><strong>New arrivals every Friday!</strong></p>

<p>10% OFF all smartphones this week.</p>

<p>Buy any laptop and receive a FREE laptop bag.</p>

<br>

<button id="okBtn">Continue</button>

</div>



<div id="modalStep2" class="modalBox" style="display:none;">

<h2>Customer Details</h2>

<label>Name</label>

<input type="text" id="popName">

<label>Email</label>

<input type="email" id="popEmail">

<label>Phone Number</label>

<input type="tel" id="popPhone">

<label>Gender</label>

<select id="popGender">

<option value="">Select Gender</option>

<option>Male</option>

<option>Female</option>

<option>Other</option>

</select>

<br><br>

<button id="submitBtn">Submit</button>

<button id="closeBtn">Close</button>

</div>

</div>

`;

    document.body.appendChild(modal);
}

// =======================
// SAVE TO SUPABASE
// =======================

async function handleSubmit() {

    const name = document.getElementById("popName").value.trim();

    const email = document.getElementById("popEmail").value.trim();

    const phone = document.getElementById("popPhone").value.trim();

    const gender = document.getElementById("popGender").value;

    if (!name || !email || !phone || !gender) {

        alert("Please complete every field.");

        return;

    }

    const { error } = await supabase

        .from("records")

        .insert([

            {

                name: name,

                email: email,

                "phone": phone,

                gender: gender

            }

        ]);

    if (error) {

        console.error(error);

        alert("Supabase Error:\n" + error.message);

        return;

    }

    alert("Information saved successfully!");

    document.getElementById("welcomeModal").remove();

}

// =======================
// EVENTS
// =======================

window.onload = function () {

    createModal();

    document.getElementById("okBtn").onclick = function () {

        document.getElementById("modalStep1").style.display = "none";

        document.getElementById("modalStep2").style.display = "block";

    };

    document.getElementById("submitBtn").onclick = handleSubmit;

    document.getElementById("closeBtn").onclick = function () {

        document.getElementById("welcomeModal").remove();

    };

};
