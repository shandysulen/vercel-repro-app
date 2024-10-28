export default function TestPage(props: { randomNumber: number }) {
  return <div>{props.randomNumber}</div>;
}

export const getStaticProps = async () => {
  /* eslint-disable-next-line no-console */
  console.log("RUNNING TEST PAGE GETSTATICPROPS");

  const randomNumber = Math.floor(Math.random() * 10);

  return {
    props: { randomNumber },
    revalidate: 60,
  };
};
