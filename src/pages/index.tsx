import type { GetServerSideProps, InferGetServerSidePropsType } from 'next';

const defaultRedirectUrl = '/profile-page';
const resumeUrl = 'https://soluble.io/about/resume';

const urlRedirectMap = new Map<string, string>([
  ['cv.soluble.io', resumeUrl],
  ['me.soluble.io', resumeUrl],
  // ['localhost', resumeUrl],
]);

type Props = {
  redirectUrl: string;
};

export default function HomeRedirectRoute(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  const { redirectUrl } = props;
  return (
    <div>
      <h1>This site has moved</h1>
      <p>
        New address is <a href={redirectUrl}>{redirectUrl}</a>
      </p>
    </div>
  );
}

/**
 * Always throws an error on purpose for monitoring
 */
export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  const { req, res } = context;
  const { headers } = req;
  const origin = headers?.origin ?? headers?.host;
  if (origin) {
    const url = new URL(
      origin.match(/^https?:\/\//) ? origin : `https://${origin}`
    );
    const mappedUrl = urlRedirectMap.get(url.hostname);
    if (mappedUrl) {
      return {
        redirect: {
          destination: mappedUrl,
          permanent: false,
        },
      };
    }
  }
  return {
    props: {
      redirectUrl: defaultRedirectUrl,
    },
  };
};
