import { FONTS } from '@/constants/fonts'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { StatusBar, StyleSheet, Text, TextInput, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Search () {
    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar
            translucent
            barStyle="dark-content"
            backgroundColor="transparent"/>


        <View style={styles.container}>

            <View style={styles.searchBar}>
                <MaterialCommunityIcons name='magnify' size={20} color="#6B7280"/>
                <TextInput style={styles.input}
                placeholder='Food, drinks, groceries.....'>

                </TextInput>

            </View>


            <View style={styles.searchesSection}>
                <View style={styles.searchHeader}>
                    <Text style={styles.txt}>
                        Recent searches
                    </Text>
                    <MaterialCommunityIcons name= "history" size={24} color="#C8A2C8"/>

                </View>
            </View>


            <View style={styles.searchesSection}>
                <View style={styles.searchHeader}>
                    <Text style={styles.txt}>
                        Trending
                    </Text>
                    <MaterialCommunityIcons name='trending-up' size={24} color="#C8A2C8"/>
                </View>

            </View>


            </View>
        </SafeAreaView>
    )
}



const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },

    container: {
        padding: 16,
        gap: 16,
    },

    searchBar: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#D1D5DB",
        borderRadius: 14,
        paddingHorizontal: 12,
        height: 60,
        borderColor: "#6666",
        borderWidth: 1,

    },

    input: {
        width: "100%",
        flex: 1,
        marginLeft: 12,
        fontSize: 14,
        fontFamily: FONTS.regular

    },


    searchesSection: {
        marginTop: 20,

    },

    searchHeader: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"

    },

    txt: {
        fontFamily: FONTS.regular,
        fontSize: 18,

    },






})