import styled from "styled-components/native";
import { SvgXml } from "react-native-svg";

export const IconSVG = styled(SvgXml)`
  width: 140px;
  height: 140px;
`;

export const IconPNG = styled.Image`
  width: 80px;
  height: 80px;
`;

export const ErrorContainer = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
`;
