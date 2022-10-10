import styled from 'styled-components';

export const ContactFrm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: ${p => p.theme.space[3]}px;
`;

export const FormInput = styled.input`
  margin-top: ${p => p.theme.space[2]}px;
`;

export const FormBtn = styled.button`
  width: 100px;
  margin: 0 auto;
  cursor: pointer;
`;
