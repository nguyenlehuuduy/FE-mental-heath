import HomePageView from "./home-page-view";
const listTest = "text data from server";
type PropsComponent = {
  searchParams: {
    page_num: string;
  };
};
export default async function Home(props: PropsComponent) {
  return (
    <div>
      {/* /home?page_num=123 */}
      <p>searchParams: {props.searchParams.page_num}</p>
      <HomePageView listTest={listTest} />
    </div>
  );
}
