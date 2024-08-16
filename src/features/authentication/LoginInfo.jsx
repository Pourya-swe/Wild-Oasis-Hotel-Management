import styled from "styled-components";

const Box = styled.div`
  /* box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);

  padding: 4rem;
  /* flex: 0 1 96rem; */
  text-align: center;

  & p {
    font-size: 1.5rem;
  }

  & p.credentials {
    color: yellow;
  }
`;

function LoginInfo() {
  return (
    <Box>
      <p>
        Due to the fact that this project is just a{" "}
        <strong>self-educate</strong> and an <strong>experimental</strong>, you
        can login with this credentials and take a look at it. Also it is not
        <br /> <strong>responsive</strong>, so open it in a big screen.
      </p>
      <br />
      <p className="credentials">UserName: albert@watchdog.com</p>
      <p className="credentials">Password: 12345678</p>
      <br />
      <a href="https://pouryavahedi.com/">CopyRight by Pourya Vahedi</a>
    </Box>
  );
}

export default LoginInfo;
