import { Code, Heading } from '@radix-ui/themes';
import CodeSnippet from '../../components/CodeSnippet';

export default function DocsPage() {
  return (
    <>
      <p>
        <Heading as="h1" size="7">
          <Code>wb</Code> command line
        </Heading>
      </p>
      <p>
        Run this command to get more information on how to use the{' '}
        <Code>wb</Code> command:
      </p>
      <p>
        <CodeSnippet text="wb --help">
          <span className="ultima-fg-yellow">$</span>{' '}
          <b className="ultima-fg-bright-green">wb</b> --help
        </CodeSnippet>
      </p>
    </>
  );
}
