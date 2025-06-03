document.getElementById('myForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Cegah submit form yang bikin halaman reload

    // Ambil nilai input Nama
    const nama = document.getElementById('inputName').value;
    // Ambil nilai input NIM
    const nim = document.getElementById('inputNIM').value;
    // Ambil nilai input Asal
    const asal = document.getElementById('inputAsal').value;
    // Ambil nilai pilihan Dosen
    const dosen = document.getElementById('selectDosen').value;
    // Ambil nilai input Tanggal Lahir
    const tanggalLahir = document.getElementById('inputTanggalLahir').value;
    // Ambil nilai input Teman Favorit
    const temanFavorit = document.getElementById('inputTemanFavorit').value;
    // Ambil nilai input AI Favorit
    const aiFavorit = document.getElementById('inputAiFavorit').value;

    // Tampilkan alert dengan SweetAlert2 berisi data input yang dikirim
    Swal.fire({
        title: 'Data Berhasil Dikirim!',   // Judul popup
        html: `                            // Isi popup dengan data user
            <p>Nama: ${nama}</p>
            <p>NIM: ${nim}</p>
            <p>Asal: ${asal}</p>
            <p>Dosen Favorit: ${dosen}</p>
            <p>Tanggal Lahir: ${tanggalLahir}</p>
            <p>Teman Favorit: ${temanFavorit}</p>
            <p>AI Favorit: ${aiFavorit}</p>
        `,
        icon: 'success',                  // Tampilkan icon sukses
        confirmButtonText: 'OK'           // Tombol OK untuk menutup popup
    });

    this.reset(); // Reset form supaya input jadi kosong setelah submit
});