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
  opacity: 0.9;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const TitleBox = styled.div`
  height: 30px;
  width: 250px;
  background-color: ${(props) => props.bgColor};
  border-radius: 0 0 8px 8px;
  border-width: 5px;
  border-style: solid;
  border-color: ${(props) => props.trimColor};
  border-top: none;
  color: #ffffff;
  font-family: "Racing Sans One", cursive;
  font-size: 20px;
  padding-top: 3px;
`;

const PlayerImage = styled.img`
  max-height: 80%;
  max-width: 280px;
  border: solid;
  margin: 0px;
  object-fit: cover;
`;

const PlayerCard = ({ bgcolor, trimcolor, image, name }) => {
  return (
    <StyledCard bgColor={bgcolor} trimColor={trimcolor}>
      <InnerBorder trimColor={trimcolor}>
        <TitleBox bgColor={bgcolor} trimColor={trimcolor}>
          {name}
        </TitleBox>
        <PlayerImage src={image} />
      </InnerBorder>
    </StyledCard>
  );
};

export default PlayerCard;
