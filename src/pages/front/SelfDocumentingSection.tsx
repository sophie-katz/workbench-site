import { Heading, Text } from '@radix-ui/themes';
import CodeSnippet from '../../components/CodeSnippet';
import ExampleTaskHelp from '../../components/terminal/ExampleTaskHelp';
import FrontPageSection from './FrontPageSection';
import FrontPageSectionHalf from './FrontPageSectionHalf';

export default function SelfDocumentingSection() {
  return (
    <FrontPageSection backgroundColor="var(--gray-3)" wrapReverse={true}>
      <FrontPageSectionHalf>
        <ExampleTaskHelp />
      </FrontPageSectionHalf>
      <FrontPageSectionHalf>
        <Heading as="h1">
          <Text className="wb-heading-self-documenting-tasks">
            Self-documenting tasks
          </Text>{' '}
          instead of separate readmes
        </Heading>
        <p>
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
        </p>
        <p>
          <Text>
            Add descriptions and examples to tasks to share how your projects
            are used without having to write separate documentation.
          </Text>
        </p>
        <p>
          <Heading as="h2" style={{ display: 'inline' }} size="3">
            Less confusion
          </Heading>{' '}
          - No hunting for separate documentation or documentation that gets
          stale.
        </p>
        <p>
          <Heading as="h2" style={{ display: 'inline' }} size="3">
            Faster workflow
          </Heading>{' '}
          - Crystal-clear instructions keep projects moving without having to
          search for instructions.
        </p>
      </FrontPageSectionHalf>
    </FrontPageSection>
  );
}
