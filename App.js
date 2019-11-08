import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Input
            id="email"
            label="E-Mail"
            keyboardType="email-address"
            required
            email
            autoCapitalize="none"
            errorMessage="Please enter a valid email address."
            onInputChange={() => {}}
            initialValue=""
        />
        <Input
            id="password"
            label="Password"
            keyboardType="default"
            secureTextEntry
            required
            minLength={5}
            autoCapitalize="none"
            errorMessage="Please enter a valid password."
            onInputChange={() => {}}
            initialValue=""
        />
        <View style={styles.buttonContainer}>
          <Button title="Login" color={Colors.primary} onPress={() => {}} />
        </View>
        <View style={styles.buttonContainer}>
          <Button
              title="Register account"
              color={Colors.accent}
              onPress={() => {}}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
