import { DotFilledIcon, DotIcon } from '@radix-ui/react-icons';
import { Box, Button, Container, Flex, Link } from '@radix-ui/themes';
import { useWindowSize } from '@uidotdev/usehooks';

export interface DocsLayoutProps {
  children: React.ReactNode;
  links: { title: string; slug: string }[];
  selected: number;
}

export default function DocsLayout({
  children,
  links,
  selected,
}: DocsLayoutProps) {
  const windowSize = useWindowSize();

  return (
    <Flex
      direction={
        windowSize.width &&
        windowSize.width <
          parseFloat(
            window.getComputedStyle(document.documentElement).fontSize,
          ) *
            75
          ? 'column'
          : 'row'
      }
    >
      <Flex
        direction="column"
        width="16rem"
        align="stretch"
        gap="3"
        p="6"
        pt="8"
        position={
          windowSize.width &&
          windowSize.width <
            parseFloat(
              window.getComputedStyle(document.documentElement).fontSize,
            ) *
              75
            ? 'relative'
            : 'fixed'
        }
      >
        {links.map((link, index) => {
          return (
            <Link href={`/#/docs/${link.slug}`}>
              <Button
                // variant={index == selected ? 'soft' : 'ghost'}
                variant="ghost"
                // m={index == selected ? '0' : '2'}
                style={{
                  justifyContent: 'stretch',
                  //   paddingLeft: 'var(--space-3)',
                  //   paddingRight: 'var(--space-3)',
                  //   paddingTop: 'var(--space-2)',
                  //   paddingBottom: 'var(--space-2)',
                  //   height: 'var(--space-6)',
                  width: '100%',
                  backgroundColor:
                    index == selected ? 'var(--indigo-5)' : undefined,
                }}
                color={index == selected ? 'indigo' : 'gray'}
              >
                {link.title}
              </Button>
            </Link>
          );
        })}
      </Flex>
      <Container size="3" p="7">
        <Box
          style={{
            background: 'var(--gray-3)',
            borderRadius: 'var(--space-2)',
          }}
          p="8"
        >
          {children}
        </Box>
      </Container>
    </Flex>
  );
}
