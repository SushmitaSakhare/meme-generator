// Style your components here
import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`
export const MemeGeneratorContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 550px;
  padding: 32px 24px;

  @media screen and (min-width: 768px) {
    width: 85%;
    max-width: 1140px;
  }
`

export const Heading = styled.h1`
  font-family: 'Open Sans';
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  color: #35469c;
  margin-bottom: 16px;
  @media screen and (min-width: 768px) {
    font-size: 36px;
    text-align: left;
  }
`
export const FormAndMemeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    flex-direction: row-reverse;
  }
`
export const MemeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  background-image: url(${props => props.backgroundImage});
  background-size: cover;
  height: 300px;
  padding-left: 10px;
  padding-right: 10px;
  margin-bottom: 50px;
  @media screen and (min-width: 768px) {
    width: 48%;
    margin-top: 5px;
    margin-bottom: 20px;
  }
`

export const TextContent = styled.p`
  font-family: 'Open Sans';
  font-size: ${props => props.activeFontSizeId}px;
  font-weight: 600;
  color: #fff;
`

export const MemeGeneratorForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (min-width: 768px) {
    width: 40%;
  }
`

export const CustomLabel = styled.label`
  font-family: 'Open Sans';
  font-size: 12px;
  font-weight: 500;
  color: #7e858e;
  line-height: 1.4;
  margin-bottom: 0px;
`

export const CustomInput = styled.input`
  font-family: 'Open Sans';
  color: #5a7184;
  background-color: #fff;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #d7dfe9;
  outline: none;
  padding: 14px 12px;
  margin-top: 5px;
  margin-bottom: 20px;
`

export const CustomSelect = styled.select`
  font-family: 'Open Sans';
  color: #1e293b;
  background-color: #fff;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #d7dfe9;
  outline: none;
  padding: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
`
export const CustomOption = styled.option`
  font-size: 16px;
  padding: 14px 12px;
`

export const GenerateButton = styled.button`
  font-family: 'Open Sans';
  font-size: 14px;
  font-weight: 600;
  color: #fff;
  background-color: #0b69ff;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  outline: none;
  min-width: 25px;
  max-width: 150px;
  padding: 12px 24px;
  margin-top: 15px;
`
