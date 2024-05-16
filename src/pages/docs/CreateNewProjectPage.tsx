import { Box, Code, Flex, Heading, Link } from '@radix-ui/themes';
import CodeSnippet from '../../components/CodeSnippet';

export default function DocsPage() {
  return (
    <>
      <p>
        <Heading as="h1" size="7">
          Create a new project
          <Link></Link>
        </Heading>
      </p>
      <p>
        In your project directory, create a new file called{' '}
        <Code>workbench.yml</Code> with this content:
      </p>
      <p>
        <CodeSnippet text={'tasks:\n  build:\n    run: ["npx", "tsc"]'}>
          <span className="ultima-fg-yellow">tasks:</span>
          <br />
          &nbsp;&nbsp;
          <span className="ultima-fg-yellow">build:</span>
          <br />
          <span className="ultima-fg-bright-black"></span>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <span className="ultima-fg-yellow">run:</span> [
          <span className="ultima-fg-magenta">"npx"</span>,{' '}
          <span className="ultima-fg-magenta">"tsc"</span>]
        </CodeSnippet>
      </p>
      <p>
        The <Code>tasks</Code> section is where all of the tasks are defined.
        Our first task is called <Code>build</Code>. You can call it like this:
      </p>
      <p>
        <CodeSnippet text="wb build">
          <span className="ultima-fg-yellow">$</span>{' '}
          <b className="ultima-fg-bright-green">wb</b> build
          <br />
          <span className="ultima-fg-dimmed-green">◆</span>{' '}
          <span className="ultima-fg-green">'b' completed</span>{' '}
          <span className="ultima-fg-bright-black">in 0.28s: npx tsc</span>
        </CodeSnippet>
      </p>
      <p>
        And it will run <Code>npx tsc</Code>.
      </p>
    </>
  );
}
