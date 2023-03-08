import { Text, View } from "react-native";
import { Box, Container, Stack } from "../../../materials";
import { styles } from "./preview-card-styles";
import { useTheme } from "../../../hooks";
import React from "react";

type PreviewCardProps = {
  title: string;
  description: string;
  onClick: () => void;
};

export const PreviewCard = (props: PreviewCardProps) => {
  const { title, description, onClick } = props;
  const style = useTheme(styles);

  return (
    <Container style={style.container}>
      <Box style={style.background} />
      <Stack style={style.textContainer} pv={5} ph={15} spacing={5}>
        <Text style={style.title}>{title}</Text>
        <Text style={style.description}>{description.substring(0, 50)}...</Text>
        <Text style={style.link} onPress={onClick}>
          {"-> "}Lire plus
        </Text>
      </Stack>
    </Container>
  );
};

export default PreviewCard;
