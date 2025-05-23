import { usePaperTheme } from "@/utils";
import { Modal, Portal, Text } from "react-native-paper";
import { PlayerCardEditPlayerForm } from "@/components";
import { Player } from "@/types";

interface PlayerCardEditPlayerModalProps {
  visible: boolean;
  onClose: () => void;
  player: Player;
}

const PlayerCardEditPlayerModal: React.FC<PlayerCardEditPlayerModalProps> = ({
  visible,
  onClose,
  player,
}) => {
  const paperTheme = usePaperTheme();
  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={onClose}
        contentContainerStyle={paperTheme.modal.modalContainer}
      >
        <Text variant="titleLarge">Edit Player</Text>
        <PlayerCardEditPlayerForm player={player} onCloseModal={onClose} />
      </Modal>
    </Portal>
  );
};

export default PlayerCardEditPlayerModal;
