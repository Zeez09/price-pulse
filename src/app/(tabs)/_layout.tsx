import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Tabs } from "expo-router";


export default function TabLayout () {
    return (
        <Tabs
        screenOptions={{
            tabBarActiveTintColor: "#9333EA",
            tabBarInactiveTintColor: "#94A3B8",
            headerShown: false,

            tabBarStyle: {
                position: "absolute",
                bottom: 20,
                marginHorizontal: 20,
                height: 55,
                borderRadius: 30,
                backgroundColor: "#1e293b",
                borderTopWidth: 0,
                elevation: 10,
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.15,
                shadowRadius: 12,
            },

            tabBarShowLabel: false,


            tabBarItemStyle: {
              
              alignItems: "center",
              justifyContent: "center",
            }

        }}
        >

        <Tabs.Screen name="index" options={{ title: "Home",
            tabBarIcon: ({ color, focused }) => (
                <MaterialCommunityIcons name={focused ? "home" : "home-outline"} 
                color={color} size={28}/>
              )
         }}
        />


        <Tabs.Screen name="search" options={{ title: "Search",
            tabBarIcon: ({ color, focused }) => (
                <MaterialCommunityIcons name={focused ? "magnify" : "magnify"} 
                color={color} size={28}/>
         )
        }}/>

        <Tabs.Screen name="support" options={{ title: "Support",
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons name={focused ? "headset" : "headset"}
            size={28}
            color={color}/>
          ),
        }}
        />


        <Tabs.Screen name="profile" options={{ title: "Profile",
            tabBarIcon: ({ color, size, focused }) => (
                <MaterialCommunityIcons name={focused ? "account" : "account-outline"} 
                color={color} size={size}/>
         )
         }} />


        </Tabs>
    );
    }
