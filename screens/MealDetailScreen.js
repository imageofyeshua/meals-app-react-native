import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const MealDetailScreen = ({route}) => {
  const mealId = route.params.mealId;

  return (
    <View>
      <Text>This is the Meal: {mealId}</Text>
    </View>
  )
}

export default MealDetailScreen

const styles = StyleSheet.create({})