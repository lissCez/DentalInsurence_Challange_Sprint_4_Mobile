import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import 'react-native-reanimated';

export {
  ErrorBoundary
} from 'expo-router';

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {

  return (
    <Stack initialRouteName="login">
      <Stack.Screen name='login' options={{ headerShown: false }} />
      <Stack.Screen name='index' options={{ headerShown: false }} />
      <Stack.Screen name='menu' options={{ headerShown: false }} />
      <Stack.Screen name='perfil' options={{ headerShown: false }} />
      <Stack.Screen name='pacientes' options={{ headerShown: false }} />
      <Stack.Screen name='faq' options={{ headerShown: false }} />
      <Stack.Screen name='calendario' options={{ headerShown: false }} />
    </Stack>
  );
}
