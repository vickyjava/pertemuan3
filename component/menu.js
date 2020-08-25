import Link from 'next/link';

function Menu(){

    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="#">
                </a>

                <a role="button" className="navbar-burger burger" aria-label="menu" aria-expended="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
            <style jsx>
        {" a{ color: turquoise}"}
    </style>

            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-end">
                    <Link href="/home"><a className="navbar-item"><i className="fas fa-home fa-fw"></i>Home</a></Link>
                <div className="navbar-item">
                    <Link href="/projeck/Galeriproduk"><a className="navbar-item"><i className=" fas fa-camera fa-fw"></i>Galeri Produk</a></Link>
                <div className="navbar-item-dropdown"></div>
                    <Link href="/projeck/pemesanan"><a className="navbar-item"><i className="fas fa-shopping-cart fa-fw"></i>Pemesanan</a></Link>
                    </div>
                    </div>
                    </div>
                    </nav>
    );
   }

   export default Menu;