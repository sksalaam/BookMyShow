/* eslint-disable react/jsx-no-undef */
import { HomeBanner } from "../../components/pages";
import { MoviesList } from "../../components/pages";
import { TextImage } from "../../components/pages";
import { LiveEvents } from "../../components/pages";
import { Premieres } from "../../components/pages";

export const Home = () => {
  return (
    <>
    <HomeBanner />
    <MoviesList/>
    <TextImage/>
    <LiveEvents/>
    <Premieres/>
    </>
  
  )
};
