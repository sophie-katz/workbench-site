import { Box, Flex, Heading, Text } from '@radix-ui/themes';
import ExampleRunning from '../../components/terminal/ExampleRunning';
import CodeSnippet from '../../components/CodeSnippet';

export default function AboutSection() {
  return (
    <Box style={{ backgroundColor: 'var(--gray-4)' }} className="wb-section">
      <Flex direction="row" style={{ justifyContent: 'space-between' }}>
        <Box>
          <Heading as="h1">
            <Text className="wb-heading-workbench">Workbench</Text> is a tool
            for managing project tasks
          </Heading>
          <p>
            <Text>
              Define tasks and dependencies and then run them to automate your
              workflow.
            </Text>
          </p>
          <ul>
            <li>
              <Text weight="bold">Clarity:</Text> Always know what's running and
              why.
            </li>
            <li>
              <Text weight="bold">Speed:</Text> Workbench is written in Rust, so
              it runs just as fast.{' '}
            </li>
          </ul>
          <p>Configuration is written simply in YAML:</p>
          <p>
            <CodeSnippet>
              <span className="ultima-fg-yellow">tasks:</span>
              <br />
              &nbsp;&nbsp;
              <span className="ultima-fg-yellow">test:</span>
              <br />
              <span className="ultima-fg-bright-black"></span>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span className="ultima-fg-yellow">run:</span> npx vitest --run
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span className="ultima-fg-yellow">dependencies:</span> <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- generate-types
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- build
            </CodeSnippet>
          </p>
        </Box>
        <ExampleRunning />
      </Flex>
    </Box>
  );
}
