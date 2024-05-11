import {
  Box,
  Flex,
  Heading,
  IconButton,
  Link,
  TabNav,
  Text,
  TextField,
} from '@radix-ui/themes';
import { useState } from 'react';
import './WorkbenchNavBar.css';
import { GitHubLogoIcon, MagnifyingGlassIcon } from '@radix-ui/react-icons';
import LogoTransparent from '../assets/logo-transparent.svg';

export interface WorkbenchNavBarProps {
  activeTab: 'about' | 'docs';
}

export default function WorkbenchNavBar({ activeTab }: WorkbenchNavBarProps) {
  const [scrollPosition, setScrollPosition] = useState(0);

  document.addEventListener('scroll', () => {
    setScrollPosition(window.scrollY);
  });

  return (
    <>
      <Box
        style={{
          borderColor: scrollPosition < 5 ? 'var(--gray-4)' : 'var(--gray-6)',
        }}
        className="wb-nav-bar"
      >
        <Flex
          direction="row"
          align="center"
          px="2"
          style={{ justifyContent: 'space-between' }}
          justify="center"
        >
          <Flex
            direction="column"
            style={{
              height: 'var(--space-8)',
              paddingBottom: 'var(--space-2)',
            }}
            justify="end"
          >
            <Link href="/" underline="none">
              {/* <Heading as="h1" className="wb-heading-workbench">
                Wb
              </Heading> */}
              <img
                src={LogoTransparent}
                alt="Workbench logo"
                style={{ height: 'var(--space-5)' }}
              />
            </Link>
          </Flex>
          <TabNav.Root>
            <TabNav.Link href="/" active={activeTab == 'about'}>
              About
            </TabNav.Link>
            <TabNav.Link href="/docs" active={activeTab == 'docs'}>
              Documentation
            </TabNav.Link>
          </TabNav.Root>
          <Flex direction="row" px="2" gap="4" align="center">
            {/* <TextField.Root placeholder="Search the docs…">
              <TextField.Slot>
                <MagnifyingGlassIcon height="16" width="16" />
              </TextField.Slot>
            </TextField.Root> */}
            <Link
              href="https://github.com/sophie-katz/workbench"
              target="_blank"
            >
              <GitHubLogoIcon />
            </Link>
          </Flex>
        </Flex>
      </Box>
      <Box
        style={{ backgroundColor: 'var(--gray-4)' }}
        height="var(--space-8)"
      ></Box>
    </>
  );
}
