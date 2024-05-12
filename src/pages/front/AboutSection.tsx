import { Box, Flex, Heading, Text } from '@radix-ui/themes';
import ExampleRunning from '../../components/terminal/ExampleRunning';
import CodeSnippet from '../../components/CodeSnippet';
import FrontPageSection from './FrontPageSection';
import FrontPageSectionHalf from './FrontPageSectionHalf';
import { useWindowSize } from '@uidotdev/usehooks';

export default function AboutSection() {
  const windowSize = useWindowSize();

  return (
    <FrontPageSection backgroundColor="var(--gray-4)">
      <FrontPageSectionHalf>
        <Heading as="h1">
          <Text className="wb-heading-workbench">Workbench</Text> is a tool for
          managing workspaces and tasks
        </Heading>
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
        <p>
          <Text>
            Define tasks and dependencies and then run them to automate your
            workflow.
          </Text>
        </p>
        <p>
          <Heading as="h2" style={{ display: 'inline' }} size="3">
            Clarity
          </Heading>{' '}
          - Always know what's running and why.
        </p>
        <p>
          <Heading as="h2" style={{ display: 'inline' }} size="3">
            Speed
          </Heading>{' '}
          - Workbench is written in Rust for snappy performance.
        </p>
      </FrontPageSectionHalf>
      {(windowSize.width
        ? windowSize.width >
          parseFloat(
            window.getComputedStyle(document.documentElement).fontSize,
          ) *
            60
        : true) && (
        <FrontPageSectionHalf>
          <ExampleRunning />
        </FrontPageSectionHalf>
      )}
    </FrontPageSection>
  );
}
