import React, { useEffect, useState } from "react";
import { StyleSheet, View, TouchableOpacity, Button } from "react-native";
import CustomButton from "./CustomButton";

const TubeGame = () => {
  const rang = ["red", "green", "aqua", "yellow"];

  const [glass, setGlass] = useState([]);
  const [selectedColor, setSelectedColor] = useState(false);
  const [selected1Tube, setSelected1Tube] = useState(null);

  const initializeColor = () => {
    const randomColor = [1, 2, 3, 4];
    const tube = [
      [...randomColor].sort(() => Math.random() - 0.5),
      [...randomColor].sort(() => Math.random() - 0.5),
      [...randomColor].sort(() => Math.random() - 0.5),
      [...randomColor].sort(() => Math.random() - 0.5),
      [],
      [],
    ].map((value, index) => {
      return { id: index, value };
    });
    setGlass(tube);
  };

  const handleTransfer = (id) => {
    if (selectedColor) {
      const id1 = selected1Tube; 
      const id2 = id; 

      if (
        id1 !== null &&
        id1 !== id2 &&
        glass[id1].value.length > 0 &&
        glass[id2].value.length < 4 &&
        (glass[id1].value.at(-1) === glass[id2].value.at(-1) ||
          glass[id2].value.length === 0)
      ) {
        let first = [...glass[id1].value];
        let second = [...glass[id2].value];

        // Transfer the topmost color
        second.push(first.pop());

        // Transfer all consecutive matching colors
        while (
          first.at(-1) === second.at(-1) &&
          second.length < 4
        ) {
          second.push(first.pop());
        }

        const updatedGlass = [...glass];
        updatedGlass[id1].value = first;
        updatedGlass[id2].value = second;

        setGlass(updatedGlass);
      }
      setSelectedColor(false);
      setSelected1Tube(null);
    } else {
      setSelectedColor(true);
      setSelected1Tube(id);
    }
  };

  useEffect(() => {
    initializeColor();
  }, []);

  return (
    <View style={styles.main}>
      <View style={styles.container}>
        {glass.map((tube) => {
          return (
            <TouchableOpacity
              key={tube.id}
              style={[
                styles.glass,
                selected1Tube === tube.id && styles.selectedGlass,
              ]}
              onPress={() => handleTransfer(tube.id)}
            >
              {tube.value
                .map((color, index) => (
                  <View
                    key={index}
                    style={[
                      styles.color,
                      {
                        backgroundColor: rang[color - 1],
                        borderBottomLeftRadius: index === 0 ? 30 : 0,
                        borderBottomRightRadius: index === 0 ? 30 : 0,
                      },
                    ]}
                  />
                ))
                .reverse()}
            </TouchableOpacity>
          );
        })}
      </View>
      <CustomButton
        title="Reset"
        backgroundImage={require('../images/woodbtn1.png')}
        onPress={initializeColor}
        symbolIcon={require('../images/refresh.png')}
      />
 
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex:1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
    marginBottom: 20,
  },
  glass: {
    width: 45,
    height: 210,
    marginHorizontal: 10,
    borderWidth:1,
   borderTopWidth:0,
    borderColor: "#ccc",
    borderBottomEndRadius:30,
    borderBottomStartRadius:30,
    justifyContent: "flex-end",
    overflow: "hidden",
  },
  selectedGlass: {
    borderColor: "black",
    transform: [{ scale: 1.05 }],
  },
  color: {
    width: "100%",
    height: 50,
  },
});

export default TubeGame;
