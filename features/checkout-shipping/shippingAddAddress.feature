Feature: Checkout-shipping

   @TEST-6469 @POSITIVE
   Scenario: User able to add shipping address
       Given User has logged in and on shipping page
       When User click address list box
       When User click Tambah Alamat and form new address should open
       When User input nama lengkap <namaLengkap>
       When User input nomor ponsel <nomorPonsel>
       When User input kecamatan <kecamatan>
       When User click Pilih Kode Pos and select postal code <kodePos>
       When User input alamat lengkap <alamatLengkap>
       When User click Atur Titik Lokasi and Titik Lokasi should open
       When User input Titik Lokasi <titikLokasi>
       When User click save Titik Lokasi
       When User input pesan pengiriman <pesanPengiriman>
       When User input nama alamat <namaAlamat>
       When User tick checkbox Simpan Alamat
       When User click button Save
       Then Selected shipping address is <namaAlamat>
       Then Nama lengkap is <namaLengkap>
       Then Nomor ponsel is 62<nomorPonsel>
       Then Alamat lengkap is <alamatLengkap>
       Then Pesan pengiriman is <pesanPengiriman>


       Examples:
       | namaLengkap | nomorPonsel | kecamatan | kodePos | alamatLengkap                                                                            | pesanPengiriman                 | namaAlamat |    titikLokasi |
       | Sansan Cilandak | 80000000475 | Cilandak | 12410 | Jl. Raya Cilandak No.15 Blok D, Ciater, Kec. Serpong, Kota Tangerang Selatan, Banten 15310 | Cilandak town square cav 15 | Work Place | Cilandak town square |