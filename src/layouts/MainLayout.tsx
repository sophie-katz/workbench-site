import WorkbenchNavBar, {
  WorkbenchNavBarProps,
} from '../components/WorkbenchNavBar';
import { Text } from '@radix-ui/themes';
import './MainLayout.css';

export interface MainLayoutProps extends WorkbenchNavBarProps {
  children: React.ReactNode;
}

export default function MainLayout(props: MainLayoutProps) {
  const { children } = props;

  return (
    <>
      <WorkbenchNavBar {...props} />
      {children}
      <div className="MainLayout--footer">
        <Text size="1" className="MainLayout--copyright">
          Copyright © 2024 Sophie Katz
        </Text>
      </div>
    </>
  );
}
