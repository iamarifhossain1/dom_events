document
  .getElementById("text-update-btn")
  .addEventListener("click", function titleUpdate() {
    const pageTitleElement = document.getElementById("page-title");
    pageTitleElement.innerText = "Text has been updated";
  });

document
  .getElementById("login-btn")
  .addEventListener("click", function loginBtn() {
    const userInfo = document.getElementById("user-info");
    userInfo.innerText = "User Logged in Successfully";
  });

/**
 * 1. set eventListner
 * 2. get the value of input field
 * 3. set the name
 */
document
  .getElementById("update-btn")
  .addEventListener("click", function (updateBtn) {
    const nameInput = document.getElementById("input-name");
    const name = nameInput.value;
    const nameP = document.getElementById("name");
    nameP.innerText = name;
  });
