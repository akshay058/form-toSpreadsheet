document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("myForm");
  const confirmation = document.getElementById("confirmation");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const age = document.getElementById("age").value;

    const response = await fetch("/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `name=${name}&email=${email}&age=${age}`,
    });

    if (response.ok) {
      confirmation.style.display = "block";
      form.reset();
    }
  });
});
