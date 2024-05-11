import { Box, Code, Flex, Heading, Text } from '@radix-ui/themes';
import CodeSnippet from '../../components/CodeSnippet';
import ExampleTaskHelp from '../../components/terminal/ExampleTaskHelp';

export default function SelfDocumentingSection() {
  return (
    <Box style={{ backgroundColor: 'var(--gray-3)' }} className="wb-section">
      <Flex direction="row">
        <ExampleTaskHelp />
        <Box style={{ flexGrow: 1, paddingLeft: '5rem' }}>
          <Heading as="h1">
            <Text className="wb-heading-self-documenting-tasks">
              Self-documenting tasks
            </Text>{' '}
            instead of separate readmes
          </Heading>
          <p>
            <Text>
              Adding descriptions and examples to tasks means that you can share
              how your projects are used without having to write separate
              documentation.
            </Text>
          </p>
          <ul>
            <li>
              <Text weight="bold">Clear tasks, Less confusion:</Text> No hunting
              for separate documentation, everyone's on the same page.
            </li>
            <li>
              <Text weight="bold">Faster workflow, Less wasted time:</Text>{' '}
              Crystal-clear instructions keep projects moving without having to
              search for instructions.
            </li>
          </ul>
          <p>
            <Text>
              Add this to your <Code>workbench.yml</Code> file:
            </Text>
          </p>
          <CodeSnippet>
            <span className="ultima-fg-yellow">lint:</span>
            <br />
            &nbsp;&nbsp;<span className="ultima-fg-bright-black">...</span>
            <br />
            <br />
            &nbsp;&nbsp;
            <span className="ultima-fg-yellow">description:</span> Run both
            ESLint and Prettier to lint codebase.
            <br />
            <br />
            &nbsp;&nbsp;<span className="ultima-fg-yellow">examples:</span>{' '}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;-{' '}
            <span className="ultima-fg-yellow">run:</span>
            <br /> &nbsp;&nbsp;&nbsp;&nbsp;-{' '}
            <span className="ultima-fg-yellow">run:</span> --fix <br />{' '}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span className="ultima-fg-yellow">description:</span> Also fix
            style problems if possible
          </CodeSnippet>
        </Box>
      </Flex>
    </Box>
  );
}
