import { StyleSheet, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import Course from './screens/Course';
import About from './screens/About';
import Contact from './screens/Contact';
import UserData from './screens/UserData';
import CourseDetail from './screens/CourseDetail';
import { useFonts, JosefinSans_300Light, JosefinSans_400Regular, JosefinSans_500Medium, } from '@expo-google-fonts/josefin-sans'
import { Nunito_600SemiBold, Nunito_700Bold, } from '@expo-google-fonts/nunito'
import AppLoading from 'expo-app-loading';


export default function App() {


  // let [fontloading,error] = useFonts({
  //   JosefinSans_300Light,
  //   'heding': JosefinSans_400Regular,
  //   JosefinSans_500Medium,
  //   Nunito_600SemiBold,
  //   Nunito_700Bold,
  // });

  // if (!fontloading) {
  //   <AppLoading />;
  // }



  const Stack = createNativeStackNavigator();
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>

          {/* Home Screen */}
          <Stack.Screen name="Home" options={{ headerShown: false }}>
            {/* pass props */}
            {(props) => <Home  {...props} appname={"vishal Thakur"} />}
          </Stack.Screen>

          {/*Course Screen  */}
          <Stack.Screen name='Course' component={Course} options={{ headerTitleStyle: { fontSize: 25 }, headerTitleAlign: 'center' }} />

          {/*UserData Screen  */}
          <Stack.Screen name='Students' component={UserData} options={{ headerTitleStyle: { fontSize: 25 }, headerTitleAlign: 'center' }} />

          {/*About Screen  */}
          <Stack.Screen name='About' component={About} options={{ headerTitleStyle: { fontSize: 25 }, headerTitleAlign: 'center' }} />

          {/*Contact Screen  */}
          <Stack.Screen name='Contact' component={Contact} options={{ headerTitleStyle: { fontSize: 25 }, headerTitleAlign: 'center' }} />
         
         
          {/*Course Detail Screen  */}
          <Stack.Screen name='CourseDetail' component={CourseDetail} options={{ headerTitleStyle: { fontSize: 25 }, headerTitleAlign: 'center' }} />




        </Stack.Navigator>
      </NavigationContainer>
    </>
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
