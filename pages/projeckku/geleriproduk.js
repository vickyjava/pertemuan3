import Menu from '../../components/menu';
import Cover from '../../components/cover'
import Footer from '../../components/footer'
   export default () => (
   <div>
   <Cover/>
   <link rel="stylesheet" href="/css/bulma.css"/>
   <Menu/>
   <b>Galeri Produk</b>
   <p>Galeri Produk ini berisi semua produk yang tersedia</p>
   <header>
   <img src="/images/gambar 1.jpg" height="200px" width="200px"/>
    <img src="/images/gambar 2.jpg" height="200px" width="200px"/>
    <img src="/images/lensa.jpg" height="200px" width="200px"/>
   <img src="/images/banner.jpg" height="200px" width="200px"/>
   <img src="/images/2.jpg" height="200px" width="200px"/>
   <img src="/images/3.jpg" height="200px" width="200px"/>
</header>
   <p>klik dibawah ini untuk mengetahui daftar harga setiap produk/barang</p>
   <nav>
      <ul>
         <li><a href="/projeckku/ListHarga">List Harga Produk</a></li>
      </ul>
      <ul>
      <p>Jika anda tertarik maka silahkan saja lakukan pengisian form dalam pemesanan</p>
         <li><a href="/projeckku/pemesanan">Pemesanan</a></li>
      </ul>
   </nav>

   <br/>
   
 
 <p>Jika barang yang anda cari belum tersedia dalam galeri kami silahkan hubungi admin dibawah ini</p>
 <p>No Wa: 083897003417</p>
 <p>Email: vicky.karep@gmail.com</p>
 <p>instagram : @vicky_syahrosi</p>
    <hr />
    <center>
    <Footer/>
    </center>
    </div>
   )