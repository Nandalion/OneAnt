import { View, Text } from 'react-native'
import React from 'react'
import NavigationContainerdata from './src/navigators/Nativestack'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function App() {
  return (
    <SafeAreaView style={{flex:1}}>
      <NavigationContainerdata />
    </SafeAreaView>
  )
}