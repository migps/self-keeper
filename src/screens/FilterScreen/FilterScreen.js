import React, { useState } from "react";
import { View, Text, Switch, StyleSheet, FlatList, Alert, Button } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { WebView } from 'react-native-webview'; // Import the WebView component

// Import your filters data
import filters from "./filters.js";

export default function FilterScreen() {
    const [filterStates, setFilterStates] = useState({});
    const [webViewUrl, setWebViewUrl] = useState(null); // State to hold WebView URL

    const toggleFilter = (filterId, filterName) => {
        setFilterStates((prevState) => ({
            ...prevState,
            [filterId]: !prevState[filterId],
        }));

        if (!filterStates[filterId]) {
            Alert.alert(
                "Filtro Activado",
                `${filterName} se ha activado. Contenido relacionado a ese tópico se ocultará!`
            );

            // Send a push notification
            sendPushNotification(filterName);
        }
    };

    // Function to send a push notification
    const sendPushNotification = async (filterName) => {
        // Implement push notification logic here, if needed
    };

    const openFacebookWebView = () => {
        setWebViewUrl('https://www.facebook.com');
    };

    const openInstagramWebView = () => {
        setWebViewUrl('https://www.instagram.com');
    };

    const openTwitterWebView = () => {
        setWebViewUrl('https://www.twitter.com');
    };

    return (
        <View style={{ flex: 1 }}>
            <LinearGradient
                colors={["#3498db", "#1abc9c"]}
                style={styles.container}
            >
                <Text style={styles.header}>Filtros</Text>

                {/* Render the filters using a FlatList */}
                <FlatList
                    data={filters}
                    renderItem={({ item }) => (
                        <View style={styles.filterContainer}>
                            <Text style={styles.filterText}>{item.name}</Text>
                            <Switch
                                value={filterStates[item.id] || false}
                                onValueChange={() => toggleFilter(item.id, item.name)}
                            />
                        </View>
                    )}
                    keyExtractor={(filter) => filter.id.toString()}
                />
            </LinearGradient>

            {/* Add WebView component */}
            {webViewUrl && (
                <WebView source={{ uri: webViewUrl }} />
            )}

            {/* Add buttons to open social media with WebView */}
            <View style={styles.buttonContainer}>
                <Button title="Abrir Facebook" onPress={openFacebookWebView} />
                <Button title="Abrir Instagram" onPress={openInstagramWebView} />
                <Button title="Abrir Twitter" onPress={openTwitterWebView} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    header: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
        color: "white",
    },
    filterContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10,
    },
    filterText: {
        fontSize: 18,
        marginRight: 10,
        color: "white",
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
    },
});
