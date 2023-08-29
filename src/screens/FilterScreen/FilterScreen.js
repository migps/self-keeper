import React, { useState } from "react";
import { View, Text, Switch, StyleSheet, FlatList, Alert } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

// Se importan los filtros 
import filters from "./filters.js";

export default function FilterScreen() {
    // Se crea un estado de objeto para mantener el estado de cada filtro
    const [filterStates, setFilterStates] = useState({});

    // Función para seleccionar el estado de cada toggle
    const toggleFilter = (filterId, filterName) => {
        setFilterStates((prevState) => ({
            ...prevState,
            [filterId]: !prevState[filterId],
        }));

        // Alerta de activación de filtro 
        if (!filterStates[filterId]) {
            Alert.alert("Filtro activado", `${filterName} ha sido activado, a partir de ahora se bloqueara ese contenido!`);
        }
    };

    return (
        <LinearGradient
            colors={["#3498db", "#1abc9c"]} // Acá tengo que ir ajustando los colores del gradiente del bg
            style={styles.container}
        >
            <Text style={styles.header}>Tópicos</Text>

            {/* Renderiza los filtros usando un FlatList para poder hacer scroll por si se van agregando más */}
            <FlatList
                data={filters}
                renderItem={({ item }) => (
                    <View style={styles.filterContainer}>
                        <Text style={styles.filterText}>{item.name}</Text>
                        <Switch
                            value={filterStates[item.id] || false} // Guarda el estado del filtro para operaciones posteriores
                            onValueChange={() => toggleFilter(item.id, item.name)} // Cambia el estado del filtro
                        />
                    </View>
                )}
                keyExtractor={(filter) => filter.id.toString()} // Se otorga un id único a cada filtro para poder operar con ellos después
            />
        </LinearGradient>
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
        color: "white", // Color del texto en el bg del gradiente en header
    },
    filterContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10,
    },
    filterText: {
        fontSize: 18,
        marginRight: 10,
        color: "white", // Color del texto en los filtros
    },
});
