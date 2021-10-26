import React from "react";
import Head from "next/head";

import Countdown from "react-countdown";
import BackIllu from "../components/backIllu";
import Social from "../components/social";
import { Title, Box, Pages, AbsoluteDiv } from "../styles";
import {
  CountBox,
  CountContainer,
  CountFlexItem,
  TimerNumb,
  UnderNumb,
} from "../styles/countdownStyle";

const Home = () => {
  const theDate = new Date(2021, 12, 25);

  const renderer = ({ formatted: { days, hours, minutes, seconds } }) => {
    return (
      <CountContainer>
        <Head>
          <title>We&#39;re Launching Soon</title>
        </Head>
        <CountBox>
          <CountFlexItem>
            <TimerNumb>{days}</TimerNumb>
          </CountFlexItem>
          <UnderNumb>days</UnderNumb>
        </CountBox>
        <CountBox>
          <CountFlexItem>
            <TimerNumb>{hours}</TimerNumb>
          </CountFlexItem>
          <UnderNumb>hours</UnderNumb>
        </CountBox>
        <CountBox>
          <CountFlexItem>
            <TimerNumb>{minutes}</TimerNumb>
          </CountFlexItem>
          <UnderNumb>minutes</UnderNumb>
        </CountBox>
        <CountBox>
          <CountFlexItem>
            <TimerNumb>{seconds}</TimerNumb>
          </CountFlexItem>
          <UnderNumb>seconds</UnderNumb>
        </CountBox>
      </CountContainer>
    );
  };

  return (
    <Pages>
      <AbsoluteDiv>
        <Title>We&#39;re Launching Soon</Title>
        <Countdown date={theDate} renderer={renderer} />
        <Social />
      </AbsoluteDiv>
      <BackIllu />
    </Pages>
  );
};

export default Home;
