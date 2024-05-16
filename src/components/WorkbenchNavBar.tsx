/// <reference types="vite-plugin-svgr/client" />

import { Box, Flex, Link, TabNav } from '@radix-ui/themes';
import './WorkbenchNavBar.css';
import { GitHubLogoIcon } from '@radix-ui/react-icons';
import LogoTransparent from '../assets/logo-transparent.svg?react';
import { useWindowScroll } from '@uidotdev/usehooks';

export interface WorkbenchNavBarProps {
  activeTab: 'about' | 'docs';
}

export default function WorkbenchNavBar({ activeTab }: WorkbenchNavBarProps) {
  const windowScroll = useWindowScroll()[0];

  return (
    <>
      <Box
        style={{
          borderColor:
            (windowScroll.y ?? 0) < 5 ? 'var(--gray-4)' : 'var(--gray-6)',
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
              {/* <div style={{  }}> */}
              <LogoTransparent style={{ height: 'var(--space-5)' }} />
              {/* <img
                src={LogoTransparent}
                alt="Workbench logo"
                style={{ height: 'var(--space-5)' }}
                // style={{
                //   height: 'calc(4 * var(--space-5))',
                //   transform: 'scale(0.25)',
                // }}
              /> */}
              {/* </div> */}
            </Link>
          </Flex>
          <TabNav.Root>
            <TabNav.Link href="/" active={activeTab == 'about'}>
              About
            </TabNav.Link>
            <TabNav.Link
              href="/#/docs/create-new-project"
              active={activeTab == 'docs'}
            >
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
