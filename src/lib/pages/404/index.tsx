import { Button, Text, Title } from '@tremor/react';
import Image from 'next/image';
import Link from 'next/link';

const Page404 = () => {
  return (
    <>
      <div className="grid gap-2 p-12 text-center">
        <Image
          src="/assets/404 Error-amico.svg"
          width={320}
          height={320}
          alt="404 Illustration"
        />
        <Button variant="light">
          <a href="https://storyset.com/web" className="text-xs">
            Web illustrations by Storyset
          </a>
        </Button>
      </div>

      <div className="grid gap-6 text-center">
        <div className="grid gap-2">
          <Title>Page not Found</Title>
          <Text>It&apos;s Okay!</Text>
        </div>

        <div>
          <Button>
            <Link href="/">Let&apos;s Go Back</Link>
          </Button>
        </div>
      </div>
    </>
  );
};

export default Page404;
