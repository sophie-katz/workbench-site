import WorkbenchNavBar, {
  WorkbenchNavBarProps,
} from '../components/WorkbenchNavBar';
import { Text } from '@radix-ui/themes';

export interface MainLayoutProps extends WorkbenchNavBarProps {
  children: React.ReactNode;
}

export default function MainLayout(props: MainLayoutProps) {
  const { children } = props;

  return (
    <>
      <WorkbenchNavBar {...props} />
      {children}
      <div
        style={{
          width: '100%',
          textAlign: 'center',
          paddingBottom: 'var(--space-2)',
        }}
      >
        <Text size="1" style={{ color: 'var(--gray-8)' }}>
          Copyright © 2024 Sophie Katz
        </Text>
      </div>
    </>
  );
}
