import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import Pdf from 'react-native-pdf';

const PDFPage = () => {
  return (
    <View
        style={{
            alignItems: 'center',
            flex: 1,
            justifyContent: 'center',
            backgroundColor: '#696969'
        }}
    >
        <Text style={{color: '#fff', marginBottom: 10}}>
            My document project!
        </Text>
        <Button title="Open PDF Document" />
        <Pdf 
            source={{
                uri: 'http://samples.leanpub.com/thereactnativebook-sample.pdf',
            }}
            style={{height: 300, width: 300}}
        />
    </View>
  )
}

export default PDFPage

const styles = StyleSheet.create({})