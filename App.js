import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>


      <View style={{
        flex: 1,
        width: '100%',
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'flex-start',
        flexGrow: 1,
        flexShrink: 1,
        backgroundColor: 'yellow'
      }}>
        <View style={{
          flex: 1,
          width: '100%',
          height: '10%',
          flexGrow: 0.5,
          backgroundColor: 'black',
          

        }} >
          <Text style={{ color: 'white', fontSize: 25, alignItems: 'center', justifyContent: 'center'}}>Welcome to Animator-x!!</Text>
        </View>
      </View>
      <View style={{
        flex: 1,
        width: '100%',
        height: 90,
        flexGrow: 1,
        backgroundColor: 'blue'
      }} />
      <View style={{
        flex: 1,
        width: '100%',
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow: 1,
        backgroundColor: 'green'
      }}>
        <View style={{
          flex: 1,
          width: 150,
          height: 60,
          paddingTop: 0,
          marginVertical: 10,
          backgroundColor: 'pink'
        }} />
      </View>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
