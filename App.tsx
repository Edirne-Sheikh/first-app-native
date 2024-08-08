// import React, {useState} from 'react';
// import {
//   SafeAreaView,
//   View,
//   Text,
//   useColorScheme,
//   StyleSheet,
//   Button,
// } from 'react-native';
// const App = () => {
//   const isDarkMode = useColorScheme() === 'light';
//   const [darkMode, setDarkMode] = useState(isDarkMode);

//   return (
//     <SafeAreaView>
//       <View>
//         <Button
//           onPress={() => {
//             setDarkMode(!darkMode);
//           }}
//           title="Theme"
//           color="#841584"
//           accessibilityLabel="Learn more about this purple button"
//         />
//       </View>
//       <View style={style.view}>
//         {[0, 1, 2, 3, 4, 5, 6, 7]?.map(el => (
//           <Text
//             style={darkMode ? style.lightStyles : style.darkStyles}
//             key={el}>
//             Hello World!
//           </Text>
//         ))}
//       </View>
//     </SafeAreaView>
//   );
// };

// const style = StyleSheet.create({
//   view: {
//     display: 'flex',
//     padding: 15,
//     // justifyContent: 'center',
//     // alignItems: 'center',
//   },
//   darkStyles: {
//     backgroundColor: '#000',
//     color: '#fff',
//   },
//   lightStyles: {
//     backgroundColor: '#fff',
//     color: '#000',
//   },
// });

// export default App;




import { View, Text } from 'react-native'
import React from 'react'

const App = () => {
  return ( 
    <View>
      <Text>App</Text>
    </View>
  )
}

export default App