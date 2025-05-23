import { usePaperTheme } from "@/utils";
import { Modal, Portal, Text } from "react-native-paper";

interface PlayerCardEditPlayerModalProps {
  visible: boolean;
  onClose: () => void;
}

const PlayerCardEditPlayerModal: React.FC<PlayerCardEditPlayerModalProps> = ({
  visible,
  onClose,
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
      </Modal>
    </Portal>
  );
};

export default PlayerCardEditPlayerModal;
