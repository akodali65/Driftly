import { router } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Driftly</Text>
      <Text style={styles.subtitle}>Adaptive Focus Platform</Text>

      <View style={styles.card}>
        <Text style={styles.cardLabel}>Today's Focus</Text>
        <Text style={styles.bigNumber}>2h 45m</Text>
        <Text style={styles.smallText}>+18% better than yesterday</Text>
      </View>

      <View style={styles.row}>
        <View style={styles.smallCard}>
          <Text style={styles.cardLabel}>Streak</Text>
          <Text style={styles.metric}>5 days</Text>
        </View>

        <View style={styles.smallCard}>
          <Text style={styles.cardLabel}>Best Time</Text>
          <Text style={styles.metric}>7 PM</Text>
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardLabel}>Smart Insight</Text>
        <Text style={styles.insight}>
          You focus best in the evening. Try scheduling harder tasks after 7 PM.
        </Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          console.log("button pressed");
          router.navigate("/focus");
        }}
      >
        <Text style={styles.buttonText}>Start Focus Session</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F172A",
    padding: 24,
    paddingTop: 80,
  },
  logo: {
    color: "white",
    fontSize: 36,
    fontWeight: "800",
  },
  subtitle: {
    color: "#94A3B8",
    fontSize: 16,
    marginTop: 6,
    marginBottom: 28,
  },
  card: {
    backgroundColor: "#1E293B",
    borderRadius: 24,
    padding: 22,
    marginBottom: 18,
  },
  cardLabel: {
    color: "#94A3B8",
    fontSize: 14,
    marginBottom: 8,
  },
  bigNumber: {
    color: "white",
    fontSize: 42,
    fontWeight: "800",
  },
  smallText: {
    color: "#22C55E",
    marginTop: 8,
    fontSize: 14,
  },
  row: {
    flexDirection: "row",
    gap: 14,
    marginBottom: 18,
  },
  smallCard: {
    flex: 1,
    backgroundColor: "#1E293B",
    borderRadius: 22,
    padding: 18,
  },
  metric: {
    color: "white",
    fontSize: 22,
    fontWeight: "700",
  },
  insight: {
    color: "white",
    fontSize: 16,
    lineHeight: 24,
  },
  button: {
    backgroundColor: "#6366F1",
    padding: 18,
    borderRadius: 20,
    alignItems: "center",
    marginTop: 8,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "700",
  },
});
