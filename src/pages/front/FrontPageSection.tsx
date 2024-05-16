import { Box, Flex } from '@radix-ui/themes';
import { useWindowSize } from '@uidotdev/usehooks';

export interface FrontPageSectionProps {
  children: React.ReactNode;
  backgroundColor: string;
  wrapReverse?: boolean;
}

export default function FrontPageSection({
  children,
  backgroundColor,
  wrapReverse,
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
          maxWidth: '110rem',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
        wrap={wrapReverse ? 'wrap-reverse' : 'wrap'}
        gap={{ sm: '5rem', initial: '1rem' }}
      >
        {children}
      </Flex>
    </Box>
  );
}
