import React, { useState } from "react"
import styled from "@emotion/styled"

const Textarea = styled.textarea`
  border: 1px solid black;
  min-height: 60px;
  width: 100%;
`

const Wrapper = styled.div`
  padding: 20px;
`

const Preview = styled.div`
  padding-top: 20px;
`

const parseLines = (text: string) => {
  console.log(text.split("\n"))
  return ""
}

const Paragraph = () => {
  const [state, setState] = useState("")

  return (
    <Wrapper>
      <Textarea
        defaultValue={state}
        onChange={e => setState(e.target.value)}
      ></Textarea>
      <Preview>{parseLines(state)}</Preview>
    </Wrapper>
  )
}

export default Paragraph
