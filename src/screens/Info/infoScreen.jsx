import { useParams } from "react-router-dom";
import Container from "../../components/Container/container";

const InfoScreen = () => {
  const { id } = useParams();
  return (
    <div>
      <Container>
        <h1>This is info : {id}</h1>
      </Container>
    </div>
  );
};

export default InfoScreen;
