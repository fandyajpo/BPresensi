export default function Index() {}

export async function getServerSideProps() {
  return {
    redirect: {
      destination: "/auth/home",
      permanent: false,
    },
  };
}
