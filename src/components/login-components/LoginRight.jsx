import React from "react";
import {
  Right,
  IconCard,
  Pitch,
  Lead,
  BulletList,
  BulletItem,
} from "../styled/login-style-comp/LoginRight.styled.jsx";
import PuzzleIcon from "../../assets/icons/puzzle.svg?react";

const LoginRight = () => {
  return (
    <Right>
      <IconCard>
        <div className="emoji">
          <PuzzleIcon /> <PuzzleIcon /> <PuzzleIcon />
        </div>
        <div className="text">
          <strong>People connecting</strong>
          <br />
          through activities
        </div>
      </IconCard>

      <Pitch>
        <h3>Join activities.</h3>
        <h3>Make friends.</h3>
        <h3>Build community.</h3>
      </Pitch>

      <Lead>
        Discover local activities in <strong>Copenhagen</strong>, meet
        like-minded people, and create meaningful connections in your community.
      </Lead>

      <BulletList>
        <BulletItem>Discover activities near you</BulletItem>
        <BulletItem>Connect with your community</BulletItem>
        <BulletItem>Build lasting friendships</BulletItem>
      </BulletList>
    </Right>
  );
};

export default LoginRight;
