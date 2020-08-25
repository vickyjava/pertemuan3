import React, { Component } from 'react'
import Menu from '../../components/menu';
import Header from '../../components/header';
import Cover from '../../components/cover'
import Footer from '../../components/footer'

export default class extends Component {
        constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
                nama:'',
                alamat:'',
                nomorhp:'',
                kodepos:''
                }
        }
handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value,
        });
        }
render() {
    return (
        <div>
            <center/>
            <Header judul="Form Pemesanan"/>
            <Cover/>
            <link rel="stylesheet" href="/css/bulma.css"/>
            <Menu />
            <div>
                <h1>Untuk Pemesanan Silahkan Isi Form di Bawah Ini</h1>
                <label>Nama:</label><input type="text"
                name="nama" value={this.state.nama} onChange={this.handleChange}/>
                <br/>
                <label>Alamat yang di tuju:</label><input type="text"
                name="alamat" value={this.state.alamatnya} onChange={this.handleChange}/>
                <br/>
                <label>Nomor hp:</label><input type="text"
                name="nomor" value={this.state.nomorhp} onChange={this.handleChange}/>
                <br/>
                <label>Kode Pos:</label><input type="text"
                name="kodepos" value={this.state.kodepos} onChange={this.handleChange}/>
                <br/>
            </div>
            <div>
                <h5>Data pribadi costumer:</h5>
                <label>Nama: {this.state.nama}</label><br/>
                <label>Alamat:
                {this.state.alamat}</label><br/>
                <label>Nomor Telepon:
                {this.state.nomor}</label><br/>
                <label>Kode Pos:
                {this.state.kodepos}</label><br/>
            </div>
            <center>
            <Footer/>
            </center>
            </div>
);
}
}
