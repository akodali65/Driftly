import { router } from "expo-router";
import { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function FocusScreen() {
  const [seconds, setSeconds] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    if (!isRunning) return;

    const timer = setInterval(() => {
      setSeconds((prev) => Math.max(prev - 1, 0));
    }, 1000);

    return () => clearInterval(timer);
  }, [isRunning]);

  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Focus Session</Text>
      <Text style={styles.subtitle}>Stay locked in. Driftly is tracking your flow.</Text>

      <View style={styles.timerCard}>
        <Text style={styles.timer}>
          {minutes}:{secs.toString().padStart(2, "0")}
        </Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => setIsRunning(!isRunning)}
      >
        <Text style={styles.buttonText}>{isRunning ? "Pause" : "Resume"}</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.endButton}
        onPress={() => router.back()}
      >
        <Text style={styles.endButtonText}>End Session</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F172A",
    padding: 24,
    paddingTop: 90,
  },
  title: {
    color: "white",
    fontSize: 34,
    fontWeight: "800",
  },
  subtitle: {
    color: "#94A3B8",
    fontSize: 16,
    marginTop: 8,
    marginBottom: 40,
  },
  timerCard: {
    backgroundColor: "#1E293B",
    borderRadius: 32,
    paddingVertical: 60,
    alignItems: "center",
    marginBottom: 24,
  },
  timer: {
    color: "white",
    fontSize: 64,
    fontWeight: "800",
  },
  button: {
    backgroundColor: "#6366F1",
    padding: 18,
    borderRadius: 20,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 17,
    fontWeight: "700",
  },
  endButton: {
    padding: 18,
    borderRadius: 20,
    alignItems: "center",
    marginTop: 14,
  },
  endButtonText: {
    color: "#94A3B8",
    fontSize: 16,
    fontWeight: "700",
  },
});
