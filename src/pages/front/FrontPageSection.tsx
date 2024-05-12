import { Box, Flex } from '@radix-ui/themes';
import { useWindowSize } from '@uidotdev/usehooks';

export interface FrontPageSectionProps {
  children: React.ReactNode;
  backgroundColor: string;
}

export default function FrontPageSection({
  children,
  backgroundColor,
}: FrontPageSectionProps) {
  const windowSize = useWindowSize();

  return (
    <Box
      style={{
        backgroundColor,
        padding:
          windowSize.width &&
          windowSize.width >=
            parseFloat(
              window.getComputedStyle(document.documentElement).fontSize,
            ) *
              50
            ? '8rem'
            : '1rem',
      }}
    >
      <Flex
        direction="row"
        style={{
          gap: '5rem',
          maxWidth: '110rem',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
        wrap="wrap"
      >
        {children}
      </Flex>
    </Box>
  );
}
