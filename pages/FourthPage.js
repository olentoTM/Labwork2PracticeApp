import * as React from 'react';
import { Button, View, Text, SafeAreaView, Image } from 'react-native';
 
const FourthPage = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#BFFFCD" }}>
      <View style={{ flex: 1, padding: 16 }}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 40,
              textAlign: 'center',
              marginBottom: 10,
              color: "black"
            }}>
            Look at this cat
          </Text>
          <Image 
            source={require('../imgs/img01.jpg')} 
            style={{
                maxWidth: "50%",
                maxHeight: "50%",
                marginBottom: 10
            }}
          />
          <Text
            style={{
                fontSize: 10,
                extAlign: 'center',
                marginBottom: 10,
                color: "black"
            }}>
            I hope you enjoyed this image
            </Text>
            <View style={{ marginTop: 10}}>
                <Button
                    title='Take me back to the first page'
                    onPress={() => navigation.goBack()}
                />
            </View> 
        </View>
        <Text
          style={{
            fontSize: 18,
            textAlign: 'center',
            color: 'grey'
          }}>
          This page was made by Markus Jäntti
        </Text>
      </View>
    </SafeAreaView>
  );
}
 
export default FourthPage;