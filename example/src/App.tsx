import * as React from 'react';

import { StyleSheet, View, Text, Button, Alert } from 'react-native';
import {
  startLiveness3d,
  resultFaceCaptcha,
} from '@oiti/liveness3d-react-native';

export default function App() {
  const appKey =
    'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJjZXJ0aWZhY2UiLCJ1c2VyIjoiQkQxRjg4QTJGN0U5NUJGQTZFNUFCMEU1OEQ5RUVBOUJEQUJCfHNhZnJhLmVwZi5obWwiLCJlbXBDb2QiOiIwMDAwMDAwNTc2IiwiZmlsQ29kIjoiMDAwMDAwMjY2MiIsImNwZiI6IjA4NjcwODMzOTU2Iiwibm9tZSI6IkQyMDdFMTI0OUIyOUQ4QkI4QTIyMUZGNTQ4QThEOUM4QzQ4REVCQjlBREQ3MEQwNUMyMkI1QUVDQkJDQzEzQ0RBRTA4RkVBQTU5RUFFQkY0MUVCRURCRDBGNzlFRUU5Mzg5NTc3NEFCMzJDRDk1NEYzQzc2OUNDNDVCNzBGN3xHQUJSSUVMIENBVEVMTEkgR09VTEFSVCIsIm5hc2NpbWVudG8iOiIwOC8xMC8xOTk2IiwiZWFzeS1pbmRleCI6IkFBQUFFckdldWEvZGRKcEdJaUlsWG8vY1ZDUmZwTWwvb3prQTdBTVh5SEZaWUIzWk5KaWN2SDVSS1Iwb0V3PT0iLCJrZXkiOiJUWFZqYUNCbGRtbHNJSE52YjI0Z2FHbG5hQ0JwYmlCb2IzQmxJR1J2SUhacFpYYz0iLCJleHAiOjE2NjM3Nzc3OTIsImlhdCI6MTY2Mzc3NTk5Mn0.L83z-WsGAyZYij6bRyUiOd1BEBT-hR7pGl-6SUb3wT0';

  async function getResult(appKey: string) {
    const resultLiveness3D = await resultFaceCaptcha(appKey);
    Alert.alert(JSON.stringify(resultLiveness3D));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.box}>Exemplo Oiti - React Native</Text>
      <View style={styles.button}>
        <Button
          onPress={() => {
            startLiveness3d(appKey).then(
              (result) => {
                result && getResult(appKey);
              },
              (error) => {
                console.log(error);
              }
            );
          }}
          title="Liveness 3D"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    marginVertical: 20,
  },
  button: {
    marginVertical: 5,
  },
  boxResult: {
    marginVertical: 10,
  },
});
