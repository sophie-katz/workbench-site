import { Box, Button, Flex, Link, Text } from '@radix-ui/themes';
import CodeSnippet from '../../components/CodeSnippet';
import {
  ClipboardCopyIcon,
  GitHubLogoIcon,
  RocketIcon,
} from '@radix-ui/react-icons';
import FrontPageSection from './FrontPageSection';
import FrontPageSectionHalf from './FrontPageSectionHalf';

export default function InstallSection() {
  return (
    <FrontPageSection backgroundColor="var(--gray-4)">
      <FrontPageSectionHalf>
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
      </FrontPageSectionHalf>
      <FrontPageSectionHalf>
        <p>
          <Text>Also take a look at:</Text>
        </p>
        <Flex gap="4" wrap="wrap">
          <Link href="/#/docs/create-new-project">
            <Button size="4" color="blue" style={{ width: '14rem' }}>
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
            <Button size="4" color="green" style={{ width: '14rem' }}>
              <GitHubLogoIcon />
              Source code
            </Button>
          </Link>
        </Flex>
      </FrontPageSectionHalf>
    </FrontPageSection>
  );
}
