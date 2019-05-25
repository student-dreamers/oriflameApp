import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import { BarcodeScanner }  from '@components/BarcodeScanner/BarcodeScanner';
import { NavBar } from '@components/NavBar';
import { Categories } from '@components/Categories';
import { Products } from '@components/Products/Products';

export default class App extends Component {
  state = {
    barcodeScannerOpen: false,
    productsOpen: false,
  }

  openBarcodeScanner = () => {
    this.setState({
      barcodeScannerOpen: true,
    })
  }

  closeBarcodeScanner = () => {
    this.setState({
      barcodeScannerOpen: false,
    })
  }

  openProducts = () => {
    this.setState({
      productsOpen: true,
    })
  }

  closeProducts = () => {
    this.setState({
      productsOpen: false,
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <NavBar style={styles.navBar} openBarcodeScanner={this.openBarcodeScanner}/>
        <View style={styles.main}>
        <Categories style={styles.categories} openProducts={this.openProducts}/>
        <Products modalOpen={this.state.productsOpen} closeProducts={this.closeProducts}/>
        </View>
        <BarcodeScanner modalOpen={this.state.barcodeScannerOpen}
        closeBarcodeScanner={this.closeBarcodeScanner}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    width: '100%',
  },
  navBar: {
    height: '20%',
  },
  main: {
    height: '80%',
  },
  categories: {
    flex: 1,
  },
});
