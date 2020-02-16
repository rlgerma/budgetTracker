import React from "react"
import styled from "styled-components"
import Charts from "../common/chart"
import CreateForm from "../common/form/"
import { Container, Section } from "../global"

const GetStarted = () => (
  <Section id="tracker">
    <StyledSection>
      <ChartContainer>
        <h1>See your money live</h1>
        <Charts />
      </ChartContainer>
      <FormContainer>
        <CreateForm />
      </FormContainer>
    </StyledSection>
  </Section>
)

export default GetStarted

const StyledSection = styled(Section)`
  background-color: ${props => props.theme.color.background.light};
  clip-path: polygon(0 0, 100% 14%, 100% 100%, 0% 100%);
`
const FormContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: left;
  flex-direction: column;
`

const ChartContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px 0 20px;
`
