import { Image, Pressable, Text, View } from 'react-native';

export default function WelcomeScreen({ navigation }) {
  return (
    <View className="flex-1 items-center justify-center bg-white px-6">
      <Text className="mb-2 text-center text-4xl font-bold">HdomeTask Organizer</Text>
      <Text className="mb-8 text-center text-gray-500">
        Effortlessly manage your household tasks.
      </Text>

      <Image
        source={require('../assets/calendar.png')} // replace with actual image path
        className="mb-8 h-40 w-40"
        resizeMode="contain"
      />

      <Pressable
        onPress={() => navigation.navigate('Onboarding')}
        className="mb-4 w-full rounded-lg bg-blue-600 px-6 py-3">
        <Text className="text-center font-semibold text-white">Get Started</Text>
      </Pressable>

      <Text className="text-gray-500">
        Already using the app?
        <Text onPress={() => navigation.navigate('SignIn')} className="font-medium text-blue-600">
          {' '}
          Sign in
        </Text>
      </Text>
    </View>
  );
}
