import { Box, Flex } from '@radix-ui/themes';

export interface FrontPageSectionHalfProps {
  children: React.ReactNode;
}

export default function FrontPageSectionHalf({
  children,
}: FrontPageSectionHalfProps) {
  return (
    <Flex
      direction="column"
      style={{ flex: 1, flexBasis: '30rem' }}
      overflowX="auto"
    >
      {children}
    </Flex>
  );
}
