import { PlayerCardEditPlayerModal } from "@/components";
import { usePaperTheme } from "@/utils";
import React, { useState } from "react";
import { Button, Text } from "react-native-paper";

interface PlayerCardNameProps {
  name: string;
}

const PlayerCardName: React.FC<PlayerCardNameProps> = ({ name }) => {
  const paperTheme = usePaperTheme();
  const [isEditPlayerModalVisible, setIsEditPlayerModalVisible] =
    useState(false);

  const handleEditPlayerModalOpen = () => {
    setIsEditPlayerModalVisible(true);
  };

  const handleEditPlayerModalClose = () => {
    setIsEditPlayerModalVisible(false);
  };

  return (
    <>
      <Button
        mode="contained"
        onPress={handleEditPlayerModalOpen}
        buttonColor={paperTheme.colors.surface}
      >
        <Text variant="headlineMedium">{name}</Text>
      </Button>
      <PlayerCardEditPlayerModal
        visible={isEditPlayerModalVisible}
        onClose={handleEditPlayerModalClose}
      />
    </>
  );
};

export default PlayerCardName;
