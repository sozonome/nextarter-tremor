import { Text, Title } from '@tremor/react';

const SomeText = () => {
  return (
    <div className="grid gap-2.5">
      <Title className="bg-gradient-to-br from-gray-200 to-teal-700 bg-clip-text text-2xl font-bold text-transparent md:text-3xl">
        nextarter-tailwind
      </Title>
      <Text className="text-xs text-gray-500 md:text-sm">
        Next.js starter template with TailwindCSS and TypeScript setup
      </Text>
    </div>
  );
};

export default SomeText;
