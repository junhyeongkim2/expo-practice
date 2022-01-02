import { StyleSheet, Text, View } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";

const statusBarHeight = getStatusBarHeight(true);
export default function App() {
  return (
    <View style={styles.Conainer}>
      <View style={styles.Header}>
        <Text style={styles.TextSize}>Header</Text>
      </View>

      <View style={styles.Body}>
        <Text style={styles.TextSize}>Body</Text>
      </View>
      <View style={styles.Footer}>
        <Text style={styles.TextSize}>Footer</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Conainer: {
    flex: 1,
    marginTop: statusBarHeight,
  },

  Header: { flex: 0.2 },
  TextSize: { fontSize: 50 },

  Body: { flex: 0.5 },

  Footer: { flex: 0.3 },
});
