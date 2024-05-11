import { Box, Button, Flex, Link, Text } from '@radix-ui/themes';
import CodeSnippet from '../../components/CodeSnippet';
import {
  ClipboardCopyIcon,
  GitHubLogoIcon,
  RocketIcon,
} from '@radix-ui/react-icons';

export default function InstallSection() {
  return (
    <Box
      style={{
        backgroundColor: 'var(--gray-4)',
        paddingBottom: 'var(--space-2)',
      }}
      className="wb-section"
    >
      <Flex direction="row" style={{ gap: '5rem' }}>
        <div>
          <p>
            <Text>To install Workbench, run this command:</Text>
          </p>
          <p>
            <CodeSnippet text="curl -sSf https://raw.githubusercontent.com/sophie-katz/workbench/main/install.sh | sh">
              <span className="ultima-fg-yellow">curl</span> -sSf{' '}
              <span className="ultima-fg-magenta">
                https://raw.githubusercontent.com/sophie-katz/workbench/main/install.sh
              </span>{' '}
              | <span className="ultima-fg-yellow">sh</span>
            </CodeSnippet>
          </p>
          <p>
            <Text>
              Alternatively, you can follow{' '}
              <Link
                href="https://github.com/sophie-katz/workbench/blob/main/docs/build-from-source.md"
                target="_blank"
              >
                these instructions
              </Link>{' '}
              to build it from source.
            </Text>
          </p>
        </div>
        <div>
          <p>
            <Text>Also take a look at:</Text>
          </p>
          <Flex gap="4">
            <Link href="/docs">
              <Button size="4" color="blue">
                <RocketIcon />
                Documentation
              </Button>
            </Link>
            {/* <Link href="https://github.com/sophie-katz/workbench/tree/main/examples">
              <Button size="4" color="indigo">
                <ClipboardCopyIcon />
                Examples
              </Button>
            </Link> */}
            <Link href="https://github.com/sophie-katz/workbench">
              <Button size="4" color="green">
                <GitHubLogoIcon />
                Source code
              </Button>
            </Link>
          </Flex>
        </div>
      </Flex>
      <div style={{ width: '100%', textAlign: 'center', paddingTop: '5rem' }}>
        <Text size="1" style={{ color: 'var(--gray-8)' }}>
          Copyright © 2024 Sophie Katz
        </Text>
      </div>
    </Box>
  );
}
