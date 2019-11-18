import styled from "@emotion/styled"
import React, { KeyboardEventHandler, SyntheticEvent } from "react"
import {
  withLoginUser,
  LoginUserMutation,
  LoginUserMutationFn,
  LoginUserMutationResult,
  Mutation
} from "../lib/graphql"
import { MutationFunction } from "react-apollo"

const LoginBlock = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const InputBlock = styled.div`
  padding: 20px 0;
`

const Input = styled.input`
  height: 40px;
  width: 100%;
  font-size: 17px;
  border: unset;
  border-bottom: 1px solid;
`

const Button = styled.button`
  width: 100px;
  height: 30px;
  border: 1px solid;

  &:hover {
    background: lightgrey;
  }
`

interface Props {
  loginClient: any
}

const Login: React.FunctionComponent<Props> = (props: Props) => {
  const [state, setState] = React.useState({
    email: "",
    password: ""
  })
  console.log(props, "fds")

  const onChangeInput = (e: any) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  const onLogin = (e: any) => {
    e.preventDefault()
    props.loginClient({
      variables: {
        loginInput: {
          email: "lopliok@gmail.com",
          password: "123456"
        }
      }
    })
  }

  return (
    <div style={{ height: "90vh" }}>
      <LoginBlock>
        <form>
          <InputBlock>
            <Input placeholder="username" />
          </InputBlock>
          <InputBlock>
            <Input placeholder="password" />
          </InputBlock>
          <Button onClick={onLogin}>Login</Button>
        </form>
      </LoginBlock>
    </div>
  )
}

export default withLoginUser({
  name: "loginClient"
})(Login as any)
