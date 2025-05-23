import { playerEditFormSchema } from "@/schema";
import { useStore } from "@/stores";
import { Player } from "@/types";
import { usePaperTheme } from "@/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { z } from "zod";

interface PlayerCardEditPlayerFormProps {
  player: Player;
  onCloseModal: () => void;
}

const PlayerCardEditPlayerForm: React.FC<PlayerCardEditPlayerFormProps> = ({
  player,
  onCloseModal,
}) => {
  const paperTheme = usePaperTheme();
  const { updatePlayerName } = useStore();

  const form = useForm<z.infer<typeof playerEditFormSchema>>({
    resolver: zodResolver(playerEditFormSchema),
    defaultValues: {
      playerName: player.name,
    },
  });

  const { errors } = form.formState;

  const onFormSubmit = (data: z.infer<typeof playerEditFormSchema>) => {
    updatePlayerName(player.id, data.playerName);
    onCloseModal();
  };

  return (
    <View>
      <TextInput
        label="Player Name"
        onChangeText={(text) => form.setValue("playerName", text)}
        value={form.watch("playerName")}
        error={!!errors.playerName}
        {...form.register("playerName")}
      />
      {errors.playerName && (
        <Text variant="bodySmall" style={{ color: paperTheme.colors.error }}>
          {errors.playerName.message}
        </Text>
      )}
      <Button mode="contained" onPress={form.handleSubmit(onFormSubmit)}>
        Done
      </Button>
    </View>
  );
};

export default PlayerCardEditPlayerForm;
