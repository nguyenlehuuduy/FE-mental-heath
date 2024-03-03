"use client";

type PropsComponent = {
  listTest: string;
};
export default function HomePageView(props: PropsComponent) {
  return (
    <div>
      <p>Day la trnag chu: {props.listTest}</p>
    </div>
  );
}
