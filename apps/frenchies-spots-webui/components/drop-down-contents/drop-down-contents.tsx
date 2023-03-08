import React, { ReactNode } from "react";
import { TouchableOpacity } from "react-native";
import { useTheme } from "../../hooks";
import { Container, Typography } from "../../materials";
import { Icon } from "../../materials/icon";
import { styles } from "./drop-down-contents-style";
import { Divider } from "@react-native-material/core";

type Props = {
  onClose: () => void;
  children: ReactNode;
  title: ReactNode;
};

export const DropDownContents = (props: Props) => {
  const { children, onClose, title } = props;
  const style = useTheme(styles);
  return (
    <Container ph={30} pv={30} center>
      <Container style={style.container}>
        <Container direction="row" justify="space-between">
          <Typography style={style.title}>{title}</Typography>
          <TouchableOpacity onPress={onClose}>
            <Icon name="close-circle-outline" style={style.close} />
          </TouchableOpacity>
        </Container>
        <Divider />
        {children}
      </Container>
    </Container>
  );
};
