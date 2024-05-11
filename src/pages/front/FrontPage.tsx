import { Flex } from '@radix-ui/themes';
import AboutSection from './AboutSection';
import SelfDocumentingSection from './SelfDocumentingSection';
import InstallSection from './InstallSection';
import './FrontPage.css';

export default function FrontPage() {
  return (
    <>
      <Flex direction="column" p="0">
        <AboutSection />
        <SelfDocumentingSection />
        <InstallSection />
      </Flex>
    </>
  );
}
