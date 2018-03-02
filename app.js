
import React, { Component } from 'react';
import { AppRegistry, Button, Text, TextInput, View } from 'react-native';

export default class HitungVolumeBalok extends Component {
  constructor(props) {
    super(props);
    this.state = { p: 0, l: 0, t: 0, volume: 0 };
  }
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#E0F7FA' }}>
        <View style={{ backgroundColor: '#00B8D4' }}>
           <Text style={{ padding: 10, fontSize: 20, color: 'white', textAlign: 'center' }}>
              Menghitung Volume Balok
          </Text>
         </View>
        <View style={{ margin: 20, padding: 10, backgroundColor: '#e3f2fd' }}>
            <TextInput
              style={{ height: 40 }}
                placeholder="Masukkan panjang"
                onChangeText={(p) => this.setState({ p })}
                keyboardType='numeric'
            />
            <TextInput
              style={{ height: 40 }}
                placeholder="Masukkan lebar"
                onChangeText={(l) => this.setState({ l })}
                keyboardType='numeric'
            />
            <TextInput
              style={{ height: 40 }}
                placeholder="Masukkan tinggi"
                onChangeText={(t) => this.setState({ t })}
                keyboardType='numeric'
            />

            <Button
              onPress={() => this.setState({
                volume: (this.state.p * this.state.l * this.state.t)
              })}
              title="Hitung"
              accessibilityLabel="Klik untuk menghitung"
            />
       </View>
        <View style={{ margin: 20, backgroundColor: '#B2EBF2' }}>
          <Text style={{ padding: 10, fontSize: 20 }} >
              Panjang Balok = {this.state.p} {'\n'}
              Lebar Balok = {this.state.l} {'\n'}
              Tinggi Balok = {this.state.t} {'\n'}
              Volume Balok = {this.state.volume}
          </Text>
         </View>
    </View>
    );
  }
}
AppRegistry.registerComponent('AppForm2', () => HitungVolumeBalok);
