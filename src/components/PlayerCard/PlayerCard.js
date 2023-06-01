import styled from "styled-components";

const StyledCard = styled.div`
  height: 379px;
  width: 300px;
  
  border-radius: 10px;
  transition: background 0.8s;
  overflow: hidden;
  background-color:rgb(209 26 28) ;
  background-size: 300px
  box-shadow: 0 70px 63px -60px #000000;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const InnerBorder = styled.div`
  height: 359px;
  width: 280px;

  border-width: 1px;
  border-radius: 0.5px;
  background-image: url(https://c8.alamy.com/zooms/9/ff9d1fe4132b41afbe2ee31f4739bf2a/2da09b5.jpg);
`;

const PlayerCard = () => {
  return (
    <StyledCard>
      <InnerBorder></InnerBorder>
    </StyledCard>
  );
};

export default PlayerCard;
