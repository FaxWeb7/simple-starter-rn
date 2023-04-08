import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Image, Pressable, useColorScheme } from 'react-native';
import Colors from '../../constants/Colors';


const TabBarIcon = (props: {name: React.ComponentProps<typeof FontAwesome>['name']; color: string;}) => { return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />; }

const TabLayout = () => {
  const colorScheme = useColorScheme();

  return (
    <Tabs screenOptions={{tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,}}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Tab One',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <Image style={{ marginRight: 15, opacity: pressed ? 0.5 : 1, width: 24, height: 24, tintColor: Colors[colorScheme ?? 'light'].text }} source={{uri: 'https://cdn-icons-png.flaticon.com/512/471/471662.png'}} />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: 'Tab Two',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
    </Tabs>
  );
}

export default TabLayout;