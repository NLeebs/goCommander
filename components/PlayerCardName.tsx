import { PlayerCardEditPlayerModal } from "@/components";
import { Player } from "@/types";
import { usePaperTheme } from "@/utils";
import React, { useState } from "react";
import { Button, Text } from "react-native-paper";

interface PlayerCardNameProps {
  player: Player;
}

const PlayerCardName: React.FC<PlayerCardNameProps> = ({ player }) => {
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
        <Text variant="headlineMedium">{player.name}</Text>
      </Button>
      <PlayerCardEditPlayerModal
        visible={isEditPlayerModalVisible}
        onClose={handleEditPlayerModalClose}
        player={player}
      />
    </>
  );
};

export default PlayerCardName;
