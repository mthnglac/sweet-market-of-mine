import styled from "styled-components";
import Theme from './Theme'
import { ItemsPage } from "./features/items/pages/ItemsPage";
import { Navbar } from './common/components/navbar/navbar'

const Container = styled.div`
  width: 100%;
  font-family: ${props => props.theme.fonts[0]};
`

function App() {
  return (
    <Theme>
      <Container>
        <Navbar />
        <ItemsPage />
      </Container>
    </Theme>
  );
}

export default App;
