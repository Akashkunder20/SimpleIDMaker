function generateID() {
  document.getElementById("out-name").innerText = document.getElementById("name").value;
  document.getElementById("out-roll").innerText = document.getElementById("roll").value;
  document.getElementById("out-validity").innerText = document.getElementById("validity").value;
  document.getElementById("out-dob").innerText = document.getElementById("dob").value;
  document.getElementById("out-blood").innerText = document.getElementById("blood").value;
  document.getElementById("out-contact").innerText = document.getElementById("contact").value;
  document.getElementById("out-address").innerText = document.getElementById("address").value;

  let photo = document.getElementById("photo").files[0];
  if (photo) {
    let reader = new FileReader();
    reader.onload = function(e) {
      document.getElementById("id-photo").src = e.target.result;
    };
    reader.readAsDataURL(photo);
  }
}

function downloadID() {
  let idCard = document.getElementById("id-card");
  html2canvas(idCard).then(canvas => {
    let link = document.createElement("a");
    link.download = "id-card.png";
    link.href = canvas.toDataURL();
    link.click();
  });
}
