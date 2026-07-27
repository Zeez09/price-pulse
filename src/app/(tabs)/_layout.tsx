import { Tabs } from "expo-router";


export default function TabLayout () {
    return (
        <Tabs
        screenOptions={{
            tabBarActiveTintColor: "#9333EA",
            headerShown: false,
        }}
        >

        <Tabs.Screen name="index" options={{ title: "Home" }} />
        <Tabs.Screen name="search" options={{ title: "Search"}}/>
        <Tabs.Screen name="profile" options={{ title: "Profile" }} />
        </Tabs>
    );
    }
