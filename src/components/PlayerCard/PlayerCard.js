import styled from "styled-components";

const StyledCard = styled.div`
  height: 379px;
  width: 300px;
  margin: 10px;
  padding: 5px;
  border-radius: 10px;
  border-width: 5px;
  border-style: solid;
  border-color: ${(props) => props.trimColor};
  transition: background 0.8s;

  background-color: ${(props) => props.bgColor};
  background-size: 300px;
  box-shadow: 0 70px 63px -60px #000000;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const InnerBorder = styled.div`
  height: 359px;
  width: 280px;
  border-width: 5px;
  border-style: solid;
  border-color: ${(props) => props.trimColor};
  border-radius: 5px;
  background-image: url(https://c8.alamy.com/zooms/9/ff9d1fe4132b41afbe2ee31f4739bf2a/2da09b5.jpg);
  opacity: 0.75;
  display: flex;
  justify-content: center;
`;

const TitleBox = styled.div`
  height: 30px;
  width: 250px;
  background-color: ${(props) => props.bgColor};
  border-radius: 8px;
  border-width: 5px;
  border-style: solid;
  border-color: ${(props) => props.trimColor};
  border-top: none;
`;

const PlayerCard = ({ bgcolor, trimcolor }) => {
  return (
    <StyledCard bgColor={bgcolor} trimColor={trimcolor}>
      <InnerBorder trimColor={trimcolor}>
        <TitleBox bgColor={bgcolor} trimColor={trimcolor}>
          Player
        </TitleBox>
      </InnerBorder>
    </StyledCard>
  );
};

export default PlayerCard;
