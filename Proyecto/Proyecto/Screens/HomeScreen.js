import React, { useState } from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity, Alert } from "react-native";

export default function HomeScreen({ navigation }) {
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const handleLogout = () => {
    setShowProfileMenu(false);
    Alert.alert("Cerrar sesión", "¿Deseas cerrar sesión?", [
      {
        text: "Cancelar",
        style: "cancel",
      },
      {
        text: "Aceptar",
        onPress: () => navigation.navigate("InicioSesion"),
      },
    ]);
  };

  const goInicioSesion = () => {
    navigation.navigate("InicioSesion");
  };

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <TouchableOpacity style={styles.headerButton} onPress={goInicioSesion}>
          <Text style={styles.headerButtonText}>Regresar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.headerButton}
          onPress={() => setShowProfileMenu((prev) => !prev)}
        >
          <Text style={styles.headerButtonText}>Perfil</Text>
        </TouchableOpacity>
      </View>

      {showProfileMenu && (
        <View style={styles.profileMenu}>
          <TouchableOpacity onPress={handleLogout}>
            <Text style={styles.menuItem}>Cerrar sesión</Text>
          </TouchableOpacity>
        </View>
      )}

      <Text style={styles.title}>Bienvenido</Text>

      <View style={styles.container2}>
        <Button
          color="black"
          title="Ingresos"
          onPress={() => navigation.navigate("Ingresos")}
        />
        <Button
          color="grey"
          title="Gastos"
          onPress={() => navigation.navigate("Gastos")}
        />
      </View>

      <Text style={styles.subtitulo}>Sus finanzas son:</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Saldo actual:</Text>
        <Text style={styles.balance}>$0.00</Text>
      </View>

      <Button
        color="grey"
        title="Ver transacciones"
        onPress={() => navigation.navigate("Transacciones")}
      />
      <Button
        color="grey"
        title="Presupuesto"
        onPress={() => navigation.navigate("Presupuestos")}
      />
      <Button
        color="grey"
        title="Ver gráficas"
        onPress={() => navigation.navigate("Graficas")}
      />
      <Button
        color="grey"
        title="Ver perfil"
        onPress={() => navigation.navigate("Perfil")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  background: {},
  container: {
    flex: 1,
    backgroundColor: "#ffffffff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  header: {
    position: "absolute",
    top: 40,
    left: 20,
    right: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerButton: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: "#e6e6e6",
    borderRadius: 8,
  },
  headerButtonText: {
    fontWeight: "bold",
    fontSize: 14,
  },
  profileMenu: {
    position: "absolute",
    top: 85,
    right: 20,
    backgroundColor: "#fff",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ddd",
    elevation: 4,
  },
  menuItem: {
    fontSize: 14,
    fontWeight: "600",
  },
  container2: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 20,
    padding: 20,
    fontSize: 50,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitulo: {
    fontSize: 16,
    color: "#333",
    marginBottom: 30,
  },
  card: {
    width: "90%",
    backgroundColor: "#f0f0f0",
    padding: 20,
    borderRadius: 10,
    marginBottom: 30,
    elevation: 4,
  },
  cardTitle: {
    fontSize: 19,
    fontWeight: "bold",
    marginBottom: 5,
    textAlign: "center",
  },
  balance: {
    fontSize: 22,
    color: "#009688",
    fontWeight: "bold",
    textAlign: "center",
  },
});
