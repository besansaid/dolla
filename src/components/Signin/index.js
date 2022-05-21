import React from 'react'
import { Container, FormContent, FormWrap, Icon,Form, FormH1, FormLabel, FormInput, FormButton, Text } from './SigninStyle';

const SignIn = () => {
  return (
    <>
    <Container>
        <FormWrap>
            <Icon to="/">dolla</Icon>
            <FormContent>
                <Form action="#">
                    <FormH1>Sign in to our account</FormH1>
                    <FormLabel htmlfor='for'>Email</FormLabel>
                    <FormInput type='email' required />
                    <FormLabel htmlfor='for'>Password</FormLabel>
                    <FormInput type='password' required />
                    <FormButton type='submit'>Continue</FormButton>
                    <Text>Forgot Password</Text>
                </Form>
            </FormContent>
        </FormWrap>
    </Container>
    </>
  );
};

export default SignIn;