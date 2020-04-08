import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
  TextInput,
  Text,
  Button,
} from 'react-native';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      panjang: 0,
      lebar: 0,
      tinggi: 0,
      hasil: 0,
    };
  }
  hitung = () => {
    let {panjang, lebar, tinggi} = this.state;
    this.setState({hasil: panjang * lebar * tinggi});
  };
  render() {
    return (
      <>
        <View style={styles.wrep}>
          <StatusBar backgroundColor="#043b81" />
          <SafeAreaView>
            <View style={styles.box}>
              <Text style={styles.hasil}>VOLUME BALOK</Text>
              <View style={styles.inputGroup}>
                <Text style={styles.label}>Panjang</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Panjang"
                  onChangeText={(panjang) => this.setState({panjang})}
                  keyboardType="number-pad"
                />
              </View>
              <View style={styles.inputGroup}>
                <Text style={styles.label}>Lebar</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Lebar"
                  onChangeText={(lebar) => this.setState({lebar})}
                  keyboardType="number-pad"
                />
              </View>
              <View style={styles.inputGroup}>
                <Text style={styles.label}>Tinggi</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Tinggi"
                  onChangeText={(tinggi) => this.setState({tinggi})}
                  keyboardType="number-pad"
                />
              </View>
              <View style={styles.boxHasil}>
                <Text style={styles.hasil}>HASIL : {this.state.hasil}</Text>
              </View>
              <Button title="HITUNG" onPress={this.hitung} />
            </View>
          </SafeAreaView>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    backgroundColor: '#a7b6cf',
    borderRadius: 5,
    paddingHorizontal: 15,
  },
  label: {
    color: '#bfbfbf',
    fontWeight: '400',
    textTransform: 'uppercase',
    marginBottom: 10,
  },
  inputGroup: {
    marginVertical: 10,
  },
  wrep: {
    backgroundColor: '#043b81',
    flex: 1,
  },
  box: {
    marginHorizontal: 50,
    marginTop: 40,
  },
  boxHasil: {
    backgroundColor: '#1e4e90',
    paddingHorizontal: 20,
    marginVertical: 20,
    height: 50,
    justifyContent: 'center',
    borderRadius: 5,
  },
  hasil: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
});

export default App;
