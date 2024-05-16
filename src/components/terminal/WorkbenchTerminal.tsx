import { Box, Flex, Link, Text } from '@radix-ui/themes';
import Terminal, { Props } from 'react-terminal-ui';
import '../../terminal-ultima.css';

export interface TerminalProps extends Omit<Props, 'children'> {
  children: React.ReactNode;
  showThemeAttribution?: boolean;
}

export default function WorkbenchTerminal(props: TerminalProps) {
  const { children, showThemeAttribution } = props;

  return (
    <Flex direction="column" gap="1">
      <Box>
        <Terminal {...props}>{children}</Terminal>
      </Box>
      {showThemeAttribution && (
        <Text align="center" size="1" style={{ color: 'var(--gray-8)' }}>
          Terminal theme provided by{' '}
          <Link
            href="https://github.com/egorlem/ultima.terminals-scheme"
            color="gray"
          >
            Ultima
          </Link>
        </Text>
      )}
    </Flex>
  );
}
