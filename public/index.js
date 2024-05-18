function Nav() {
    let Accessories = document.getElementById("Accessories");
    let dropdown_menu = document.getElementById("dropdown-menu");
    dropdown_menu.classList.add('hidden');
    Accessories.addEventListener("mouseenter", function () {
        dropdown_menu.classList.remove('hidden')
    });

    Accessories.addEventListener("mouseleave", function () {
        dropdown_menu.classList.add('hidden');
    });
};





function Admin_Pannel() {
    let admin = document.getElementById("Admin");
    let Admin_Pannel = document.getElementById("Admin_Pannel");
    let Admin_Pannel_Close = document.getElementById("Admin_Pannel_Close");
    let Admin_Pannel_Form = document.getElementById("Admin_Pannel_Form");

    Admin_Pannel_Form.addEventListener("submit", function (e) {
        e.preventDefault();
        let admin_pannel_username = document.getElementById('admin_pannel_username').value.toLowerCase().replace(/\s/g, "");
        let admin_pannel_password = document.getElementById('admin_pannel_password').value.toLowerCase().replace(/\s/g, "");
        if (admin_pannel_username != "admin123") {
            let admin_pannel_username_error_message = document.getElementById("admin_pannel_username_error_message");
            admin_pannel_username_error_message.innerText = "Invalid Username ...";
            setTimeout(() => {
                admin_pannel_username_error_message.innerText = "";
            }, 2000);
        }
        else if (admin_pannel_password != "admin123") {
            let admin_pannel_password_error_message = document.getElementById("admin_pannel_password_error_message");
            admin_pannel_password_error_message.innerText = "Invalid Password ...";
            setTimeout(() => {
                admin_pannel_password_error_message.innerText = "";

            }, 2000);
        } else {
            location.href = "admin.html";
        }
    });


    Admin_Pannel.classList.add("hidden");
    admin.addEventListener("click", function () {
        Admin_Pannel.classList.remove("hidden");
        User_Registration_Page.classList.add("hidden");

    });
    Admin_Pannel_Close.addEventListener("click", function () {
        Admin_Pannel.classList.add("hidden");
    });
};



function User_Registration_Handling() {
    let User_Registration_Form_Close_Btn = document.getElementById("User_Registration_Form_Close_Btn");
    let User_Navigating_to_User_Registration_Page = document.getElementById("User_Navigating_to_User_Registration_Page");
    let User_Registration_Page = document.getElementById('User_Registration_Page');
    User_Registration_Page.classList.add("hidden");
    User_Navigating_to_User_Registration_Page.addEventListener("click", function () {
        User_Registration_Page.classList.remove("hidden");
    });
    User_Registration_Form_Close_Btn.addEventListener("click", function () {
        User_Registration_Page.classList.add("hidden");

    });
}


function User_Registration() {
    let User_Registration_Form = document.getElementById("User_Registration_Form");
    User_Registration_Form.addEventListener("submit", function (e) {
        let User_Name = document.getElementById('User_Name').value.toLowerCase();
        let User_Number = document.getElementById('User_Number').value;
        let User_Create_Password = document.getElementById('User_Create_Password').value.toLowerCase();
        let User_Confirm_Password = document.getElementById('User_Confirm_Password').value.toLowerCase();
        e.preventDefault();
        if (User_Name.length < 3) {
            document.getElementById("Error_User_Name").innerText = "Create Valid User_Name;";
        } else {
            document.getElementById("Error_User_Name").innerText = "";
        }
        if (User_Number.length !== 10) {
            document.getElementById("Error_User_Number").innerText = "Invalid Number;"
        } else {
            document.getElementById("Error_User_Number").innerText = "";
        }
        if (!/[!@#$%^&*0-9]/.test(User_Create_Password)) {
            document.getElementById("Error_User_Create_Password").innerText = "Create a Strong Password;"
        } else {
            document.getElementById("Error_User_Create_Password").innerText = "";
        }
        if (User_Confirm_Password !== User_Create_Password) {
            document.getElementById("Error_User_Confirm_Password").innerText = "Password Doesn't Match;"
        } else {
            document.getElementById("Error_User_Confirm_Password").innerText = "";
        }
    })
};



async function Check_Role() {
    try {
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();
        const ipAddress = data.ip;
        console.log('Your IP address is:', ipAddress);

        let User = ipAddress;
        let Admin  ='103.211.115.223';
        if (Admin !== User) {
            document.getElementById('Admin').style.color = 'grey';
            document.getElementById('Admin').style.pointerEvents = 'none';
        } else {
            document.getElementById('Admin').style.color = '';
            document.getElementById('Admin').style.pointerEvents = '';
        }
    } catch (error) {
        console.error('Error fetching IP address:', error);
    }
};


Nav();
Check_Role();
Admin_Pannel();
User_Registration();
User_Registration_Handling();



