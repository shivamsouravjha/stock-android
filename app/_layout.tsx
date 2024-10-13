import React from "react";
import { StyleSheet, View } from "react-native";
import { WebView } from "react-native-webview";
import Constants from "expo-constants";

const WebViewCustom: React.FC = () => {
  const webViewUrl = "https://stocksight.online";
  return (
    <View style={styles.container}>
      <WebView
        style={styles.webview}
        source={{ uri: webViewUrl }}
        originWhitelist={["*"]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  webview: {
    flex: 1,
  },
});

export default WebViewCustom;
