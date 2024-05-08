$(document).ready(function() {
	// Retrieve flash data
	const flashData = $('.flash-data').data('flashdata');

	// Check if flash data exists
	if (flashData) {
		// Display SweetAlert2 success message
		Swal.fire({
			title: 'Data Mahasiswa',
			text: 'Berhasil ' + flashData,
			icon: 'success'
		});
	}

	// delete button
	$('.tombol-hapus').on('click', function (e) {

		e.preventDefault();
		const href = $(this).attr('href');

		Swal.fire({
			title: "Apakah anda yakin?",
			text: "data mahasiswa akan dihapus",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Hapus Data!"
		}).then((result) => {
			if (result.isConfirmed) {
				document.location.href = href;
			}
		});

	});
});
