import React, { useEffect, useState } from "react";
import { StyleSheet, View, TouchableOpacity, Image, Text, Modal, FlatList } from "react-native";
import CustomButton from "./CustomButton";
import { mmkvStorage } from "../state/storage";
import gameLevels from "../utils/gameLevels";

const TubeGame = () => {
  const rang = ["red", "green", "aqua", "yellow"];
  const totalLevels = gameLevels.length;

  const [glass, setGlass] = useState([]);
  const [selectedColor, setSelectedColor] = useState(false);
  const [selected1Tube, setSelected1Tube] = useState(null);
  const [currentLevel, setCurrentLevel] = useState(1);
  const [unlockedLevels, setUnlockedLevels] = useState([1]);
  const [isLevelMenuVisible, setLevelMenuVisible] = useState(false); // Control level menu visibility

  const initializeLevel = (level) => {
    const levelData = gameLevels.find((lvl) => lvl.id === level);
    if (levelData) {
      const tubes = levelData.tubes.map((value, index) => ({ id: index, value }));
      setGlass(tubes);
      setCurrentLevel(level);
    }
  };

  const checkLevelCompletion = () => {
    const isCompleted = glass.every(
      (tube) =>
        tube.value.length === 0 || tube.value.every((color) => color === tube.value[0])
    );

    if (isCompleted) {
      const nextLevel = currentLevel + 1;
      if (nextLevel <= totalLevels && !unlockedLevels.includes(nextLevel)) {
        const updatedUnlockedLevels = [...unlockedLevels, nextLevel];
        setUnlockedLevels(updatedUnlockedLevels);

        mmkvStorage.setItem("unlockedLevels", JSON.stringify(updatedUnlockedLevels));
      }
      if (nextLevel <= totalLevels) {
        initializeLevel(nextLevel);
      }
    }
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

        second.push(first.pop());

        while (first.at(-1) === second.at(-1) && second.length < 4) {
          second.push(first.pop());
        }

        const updatedGlass = [...glass];
        updatedGlass[id1].value = first;
        updatedGlass[id2].value = second;

        setGlass(updatedGlass);
        checkLevelCompletion();
      }
      setSelectedColor(false);
      setSelected1Tube(null);
    } else {
      setSelectedColor(true);
      setSelected1Tube(id);
    }
  };

  const loadProgress = () => {
    const savedLevels = mmkvStorage.getItem("unlockedLevels");
    if (savedLevels) {
      setUnlockedLevels(JSON.parse(savedLevels));
    }
  };

  useEffect(() => {
    loadProgress();
    initializeLevel(currentLevel);
  }, []);

  return (
    <View style={styles.main}>
      <Text style={styles.levelText}>Level {currentLevel}</Text>
      <View style={styles.container}>
        {glass.map((tube) => (
          <TouchableOpacity
            key={tube.id}
            style={[
              styles.tubeContainer,
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
                      bottom: index * 30,
                      borderBottomLeftRadius: index === 0 ? 30 : 0,
                      borderBottomRightRadius: index === 0 ? 30 : 0,
                    },
                  ]}
                />
              ))
              .reverse()}
            <Image
              source={require("../images/tube.png")}
              style={styles.tubeImage}
              resizeMode="contain"
            />
          </TouchableOpacity>
        ))}
      </View>
      <CustomButton
        title="Reset"
        backgroundImage={require("../images/woodbtn1.png")}
        onPress={() => initializeLevel(currentLevel)}
        symbolIcon={require("../images/refresh.png")}
      />
      <CustomButton
        title="Select Level"
        backgroundImage={require("../images/woodbtn1.png")}
        onPress={() => setLevelMenuVisible(true)}
        symbolIcon={require("../images/level.png")}
      />
      <Modal
        visible={isLevelMenuVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setLevelMenuVisible(false)}
      >
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Select Level</Text>
          <FlatList
            data={unlockedLevels}
            keyExtractor={(item) => item.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.levelButton}
                onPress={() => {
                  initializeLevel(item);
                  setLevelMenuVisible(false);
                }}
              >
                <Text style={styles.levelButtonText}>Level {item}</Text>
              </TouchableOpacity>
            )}
          />
          <CustomButton
            title="Close"
            onPress={() => setLevelMenuVisible(false)}
            backgroundImage={require("../images/woodbtn1.png")}
            symbolIcon={require("../images/close.png")}
          />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  levelText: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
    marginBottom: 20,
  },
  tubeContainer: {
    width: 60,
    height: 210,
    justifyContent: "flex-end",
    position: "relative",
    overflow: "hidden",
  },
  selectedGlass: {
    borderWidth: 1,
    transform: [{ scale: 1.05 }],
  },
  color: {
    width: 50,
    left: 5,
    opacity: 0.6,
    height: 30,
    position: "absolute",
    zIndex: 1,
  },
  tubeImage: {
    width: "100%",
    height: "100%",
    position: "absolute",
    zIndex: 2,
    top: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "white",
  },
  levelButton: {
    backgroundColor: "#fff",
    padding: 10,
    margin: 5,
    borderRadius: 5,
    alignItems: "center",
  },
  levelButtonText: {
    fontSize: 18,
    fontWeight: "bold",
  },

});

export default TubeGame;
