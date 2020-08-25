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
                h1:"mie nyinyir : Rp7.000;",
                h2:" jam tangan : Rp100.000;",
                h3:" y banner : Rp300.000;",
                h4:"Set pakaian anak laki-laki : Rp95.000;",
                h5:"baju skyamo : Rp180.000;",
                h6:"lensa kacamata : Rp200.000;",
                
            
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
            <Header judul="List Harga"/>
            <Cover/>
            <link rel="stylesheet" href="/css/bulma.css"/>
            <Menu />
            <div>
                <h3>Cek Nama Produk dan Harga di bawah ini :</h3>
                <label>{this.state.h1}</label>
                <p/>
                <label>{this.state.h2}</label>
                <p/>
                <label>{this.state.h3}</label>
                <p/>
                <label>{this.state.h4}</label>
                <p/>
                <label>{this.state.h5}</label>
                <p/>
                <label>{this.state.h6}</label>
                <p/>
            </div>
            <center>
            <Footer/>
            </center>
            </div>
);
}
}
