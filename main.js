let tanggal = new Date();
document.getElementById("date").innerHTML = tanggal;

function sweetAlert(event) {
    event.preventDefault(); // Prevent form submission
    Swal.fire({
        title: "Login Success",
        text: "Berhasil login ke dalam sistem",
        icon: "success"
    });
}
