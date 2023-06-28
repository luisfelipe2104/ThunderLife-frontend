import React, { useState, useEffect, useContext } from 'react'
import { Text, View, Modal, StatusBar, StyleSheet } from 'react-native';
import HabitTrackerModal from '../../components/modals/HabitTrackerModal.js';
import { Container, Button, ButtonText } from "../../components/HabitTrackerComponents.js";

import { getLast7Days, getDayOfWeek } from '../../helpers/habitTrackerHelpers.js';

function HabitTracker() {
  const [last7Days, setLast7Days] = useState([])
  const [tasks, setTasks] = useState([1])
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    // const getTasks = async () => {
    //   const results = await axios.get('http://localhost:3333/task/get-tasks')
    //   console.log(results.data);
    //   setTasks(results.data)
    //   return results.data
    // } 
    // getTasks()
    setLast7Days(getLast7Days())
  }, [])

  return (
    <View style={styles.container}>
      {tasks.map((task, index) => {
        return (
          <Container key={index}>
          {last7Days.map((day, index) => {
            return (
              <Button key={index} onPress={() => setModalVisible(true)}>
                <ButtonText>{getDayOfWeek(day)}</ButtonText>
              </Button>
            )
          })}
          </Container>
        )
      })}
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <HabitTrackerModal 
          handleClose={() => setModalVisible(false)}
        />
      </Modal>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HabitTracker