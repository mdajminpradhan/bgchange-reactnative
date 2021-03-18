import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  StatusBar
} from 'react-native';

const App = () => {

  const [appbackground, setAppbackground] = useState('black');

  const changeBG = () => {
    setAppbackground('skyblue')
  }

  const resetBG = () => {
    setAppbackground('black');
  }

  return(
    <>
    <StatusBar backgroundColor={appbackground} />
    <View style={[styles.container, {backgroundColor: appbackground}]}>
      <TouchableOpacity onPress={changeBG}>
        <Text style={styles.text}>Change Background</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={resetBG}>
        <Text style={styles.text}>Reset Background</Text>
      </TouchableOpacity>
    </View>
    </>
  )
}

export default App;




const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: 'white',
    fontSize: 18,
    paddingVertical: 10,
    paddingHorizontal: 40,
    backgroundColor: 'dodgerblue',
    borderRadius: 5,
    marginBottom: 20
  }
})