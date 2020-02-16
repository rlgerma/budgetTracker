import React from "react"
import styled from "styled-components"
import Charts from "../common/chart"
import Form from "../common/form/form"
import { Container, Section } from "../global"

const GetStarted = () => (
  <Section id="tracker">
    <StyledSection>
      <GetStartedTitle>See your money live</GetStartedTitle>
      <FormContainer>
        <Form />
      </FormContainer>
      <ChartContainer>
        <Charts />
      </ChartContainer>
    </StyledSection>
  </Section>
)

export default GetStarted

const StyledSection = styled(Section)`
  background-color: ${props => props.theme.color.background.light};
  clip-path: polygon(0 0, 100% 14%, 100% 100%, 0% 100%);
`
const FormContainer = styled(Container)`
  float: left;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 40px 0 20px;
`

const ChartContainer = styled(Container)`
  float: right;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 40px 0 20px;
`

const GetStartedTitle = styled.h3`
  margin: 0 auto 32px;
  text-align: center;
`
