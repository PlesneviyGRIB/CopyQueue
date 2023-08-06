import styled from "styled-components";
import {Property} from 'csstype';

export const FlexRow = styled.div<{ $gap?: Property.Gap, $justifyContent?: Property.JustifyContent}>`
    display: flex;
    justify-content: ${({ $justifyContent }) => $justifyContent };
    gap: ${({ $gap }) => $gap};
`;