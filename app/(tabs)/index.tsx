import {
  Image,
  StyleSheet,
  Platform,
  ImageBackground,
  View,
} from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function HomeScreen() {
  return (
    <ThemedView style={{ flex: 1 }}>
      <ImageBackground
        style={{ flex: 0.35 }}
        source={require("@/assets/images/codeBg.gif")}
      >
        <View
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.8)",
          }}
        />

        <View style={styles.titleContainer}>
          <ThemedText type="title">GitHub Search</ThemedText>
          <ThemedText type="defaultSemiBold">Ready to get inspired?</ThemedText>
        </View>
      </ImageBackground>

      <View style={{marginHorizontal: 20, marginTop: 30}}>
        <ThemedView style={styles.stepContainer}>
          <ThemedText>
            Find the GitHub repositories and users of your choice. You'll surely
            find something interesting!
          </ThemedText>
        </ThemedView>

        <ThemedView style={styles.stepContainer}>
          <ThemedText type="subtitle">Users</ThemedText>
          <ThemedText>
            Search for users by typing in the search bar. Tap on a user to see
            their details.
          </ThemedText>
        </ThemedView>

        <ThemedView style={styles.stepContainer}>
          <ThemedText type="subtitle">Repos</ThemedText>
          <ThemedText>
            Search for repositories by typing in the search bar. Tap on a
            repository to see its details.
          </ThemedText>
        </ThemedView>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    top: 25,
    color: "white",
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
