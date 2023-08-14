import { styled } from "styled-components"
import { mainContrastColor, negativeColor, positiveColor, textPrimaryColor, textSecondaryColor } from "../../constants/colors.js"

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 50px);
`

export const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 0 2px 5px 2px;
  margin-bottom: 15px;
  font-size: 26px;
  color: ${mainContrastColor};
`

export const ProductsContainer = styled.article`
  flex-grow: 1;
  height: 0px;
  background-color: ${mainContrastColor};
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${textSecondaryColor};
`

export const Footer = styled.section`
  margin-top: 15px;
  margin-bottom: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`