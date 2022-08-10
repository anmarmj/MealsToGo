import { Text } from "../typography/text.component";
import { IconPNG, ErrorContainer } from "./error.styles";
import { Spacer } from "../spacer/spacer.component";
import React from "react";

const ErrorComp = ({ children }) => {
  return (
    <ErrorContainer>
      <IconPNG source={require("../../../assets/error.png")} />
      <Spacer position="top" size="large">
        <Text variant="message">{children}</Text>
      </Spacer>
    </ErrorContainer>
  );
};

export default ErrorComp;
