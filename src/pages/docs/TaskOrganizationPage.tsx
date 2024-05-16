import { Code, Heading } from '@radix-ui/themes';
import CodeSnippet from '../../components/CodeSnippet';

export default function DocsPage() {
  return (
    <>
      <p>
        <Heading as="h1" size="7">
          Task organization
        </Heading>
      </p>
      <p>All tasks have a path that contains three components:</p>
      <p>
        <ul>
          <li>
            <b>Namespace (optional)</b> - sdf
          </li>
          <li>
            <b>Task name</b> - sdf
          </li>
          <li>
            <b>Property (optional)</b> - sdf
          </li>
        </ul>
      </p>
    </>
  );
}
