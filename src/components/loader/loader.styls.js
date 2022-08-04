import styled from "styled-components/native";
import { ActivityIndicator } from "react-native";

export const LoaderContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;
