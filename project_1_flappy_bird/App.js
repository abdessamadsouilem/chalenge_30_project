import { StatusBar } from 'expo-status-bar';
import { View, Text, TouchableOpacity } from 'react-native';
import { GameEngine } from 'react-native-game-engine';
import entities from './entities';
import Physics from './physics';
import React, { useState, useEffect } from 'react';

export default function App() {
  const [running, setrunning] = useState(false)
  const [gameEngine, setgameEngine] = useState(null)
  const [currentPoints, setcurrentPoints] = useState(0)

  useEffect(() => {
    setrunning(true)
  }, [])

  return (
    <View style={{ flex: 1 }}>
      <Text
        style={{
          textAlign: "center",
          zIndex: 1,
          fontSize: 30,
          fontWeight: "bold",
          marginTop: 50,

        }}
      >{currentPoints}</Text>
      <GameEngine
        ref={(ref) => { setgameEngine(ref) }}
        onEvent={e => {
          switch (e.type) {
            case "game-over":
              setrunning(false)
              gameEngine.stop()
              setcurrentPoints(0)
              break;
            case "new_point":
              setcurrentPoints(currentPoints + 1)
              break;
          }
        }}
        systems={[Physics]}
        entities={entities()}
        running={running}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
      >
      </GameEngine>

      <StatusBar style="auto" hidden={true} />

      {!running &&
        <View style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}>
          <Text style={{
            color: "black",
            fontSize: 20,
          }}>Game Over



          </Text>
          <TouchableOpacity
            style={{
              backgroundColor: "black",
              padding: 10,
              borderRadius: 10,
            }}
            onPress={() => {
              setrunning(true)
              gameEngine.swap(entities())
            }}
          >
            <Text style={{
              color: "white",
              fontSize: 20,
            }}>Start Game



            </Text>
          </TouchableOpacity>
        </View>
      }
    </View>
  );
}





