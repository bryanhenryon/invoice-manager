import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";

import { colors } from "../assets/style/variables";

import AuthenticationContainer from "../components/AuthenticationContainer";
import FormTitle from "../components/FormTitle";
import FormInput from "../components/FormInput";
import Button from "../components/Button";

const Register = () => {
  const history = useHistory();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    history.push("/factures");
  };

  return (
    <AuthenticationContainer>
      <FormTitle>Création de compte</FormTitle>
      <form onSubmit={handleSubmit}>
        <FormInput
          placeholder='john.doe@gmail.com'
          required
          type='email'
          id='email'
          label='Adresse email'
          spellcheck={false}
        />
        <FormInput
          placeholder='•••••••••'
          required
          type='password'
          id='password'
          label='Mot de passe'
          spellcheck={false}
        />
        <FormInput
          placeholder='•••••••••'
          required
          type='password'
          id='confirm-password'
          label='Confirmation du mot de passe'
          spellcheck={false}
        />
        <CenterButtonContainer>
          <Button hasBoxShadow>S'enregistrer</Button>
        </CenterButtonContainer>
      </form>
      <AlreadyHaveAccount>
        Déjà un compte ? <Login to='/'>Se connecter</Login>
      </AlreadyHaveAccount>
    </AuthenticationContainer>
  );
};

const CenterButtonContainer = styled.div`
  text-align: center;
  margin-bottom: 2.9rem;
`;

const AlreadyHaveAccount = styled.div`
  text-align: center;
  color: ${(props) => props.theme.blackToWhite};
`;

const Login = styled(Link)`
  color: ${colors.paleViolet};

  &:hover {
    text-decoration: underline;
  }
`;

export default Register;