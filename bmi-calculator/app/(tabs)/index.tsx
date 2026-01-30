import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";

export default function Index() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState<string | null>(null);
  const [status, setStatus] = useState("");

  const calculateBMI = () => {
    const w = parseFloat(weight);
    const h = parseFloat(height) / 100;

    if (isNaN(w) || isNaN(h) || h === 0) {
      Alert.alert("Error", "Please enter valid weight and height");
      return;
    }

    const result = w / (h * h);
    setBmi(result.toFixed(2));

    if (result < 18.5) setStatus("Underweight");
    else if (result < 25) setStatus("Normal");
    else if (result < 30) setStatus("Overweight");
    else setStatus("Obese");
  };

  const getColor = () => {
    if (status === "Underweight") return "#facc15";
    if (status === "Normal") return "#22c55e";
    if (status === "Overweight") return "#fb923c";
    return "#ef4444";
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
        <View style={styles.card}>
          {/* Header */}
          <Text style={styles.title}>BMI Calculator</Text>
          <Text style={styles.subtitle}>Body Mass Index Checker</Text>

          {/* Weight Input */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Weight</Text>
            <View style={styles.inputRow}>
              <TextInput
                style={styles.input}
                placeholder="70"
                keyboardType="numeric"
                value={weight}
                onChangeText={setWeight}
                placeholderTextColor="#6b7280"
              />
              <Text style={styles.unit}>kg</Text>
            </View>
          </View>

          {/* Height Input */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Height</Text>
            <View style={styles.inputRow}>
              <TextInput
                style={styles.input}
                placeholder="170"
                keyboardType="numeric"
                value={height}
                onChangeText={setHeight}
                placeholderTextColor="#6b7280"
              />
              <Text style={styles.unit}>cm</Text>
            </View>
          </View>

          {/* Button */}
          <TouchableOpacity style={styles.button} onPress={calculateBMI}>
            <Text style={styles.buttonText}>Calculate BMI</Text>
          </TouchableOpacity>

          {/* Result */}
          {bmi && (
            <View style={styles.resultBox}>
              <Text style={styles.bmiLabel}>Your BMI</Text>
              <Text style={styles.bmiText}>{bmi}</Text>
              <Text style={[styles.statusText, { color: getColor() }]}>
                {status}
              </Text>
            </View>
          )}
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#0a0f1f",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  card: {
    width: "100%",
    backgroundColor: "#121826",
    padding: 26,
    borderRadius: 28,
    shadowColor: "#000",
    shadowOpacity: 0.6,
    shadowRadius: 25,
    elevation: 15,
  },

  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "white",
    letterSpacing: 0.5,
  },

  subtitle: {
    color: "#9ca3af",
    fontSize: 13,
    marginBottom: 20,
  },

  inputGroup: {
    marginBottom: 14,
  },

  label: {
    color: "#9ca3af",
    fontSize: 13,
    marginBottom: 6,
  },

  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1f2937",
    borderRadius: 16,
    paddingHorizontal: 14,
  },

  input: {
    flex: 1,
    color: "white",
    fontSize: 16,
    paddingVertical: 12,
  },

  unit: {
    color: "#9ca3af",
    fontSize: 14,
    marginLeft: 6,
  },

  button: {
    backgroundColor: "#2563eb",
    padding: 14,
    borderRadius: 16,
    marginTop: 12,
    alignItems: "center",
  },

  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },

  resultBox: {
    marginTop: 26,
    alignItems: "center",
  },

  bmiLabel: {
    color: "#9ca3af",
    fontSize: 14,
  },

  bmiText: {
    fontSize: 52,
    fontWeight: "800",
    color: "white",
    marginVertical: 4,
  },

  statusText: {
    fontSize: 20,
    fontWeight: "700",
  },
});
