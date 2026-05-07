import HomePage from "./Home/page";
import StatPage from "../Components/Stat/page";
import TrendingAppsPage from "./Trending Apps/page";

export default function Home() {

  return (
    <>
      <HomePage></HomePage>
      <StatPage></StatPage>
      <TrendingAppsPage></TrendingAppsPage>
    </>
  );
}
