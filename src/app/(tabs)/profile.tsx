import { StatusBar, StyleSheet, Text, View } from 'react-native'

import { SafeAreaView } from 'react-native-safe-area-context'

export default function Profile () {
    return (
        <SafeAreaView>
            <StatusBar
            translucent
            backgroundColor="transparent"
            barStyle="dark-content"
                />

            <View style={styles.container}> 
            <Text style={styles.header}>Profile Screen</Text>
            </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        gap: 16,
    },

    header: {
        color: "red",
    }


})