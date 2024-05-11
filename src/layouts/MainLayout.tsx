import WorkbenchNavBar, {
  WorkbenchNavBarProps,
} from '../components/WorkbenchNavBar';

export interface MainLayoutProps extends WorkbenchNavBarProps {
  children: React.ReactNode;
}

export default function MainLayout(props: MainLayoutProps) {
  const { children } = props;

  return (
    <>
      <WorkbenchNavBar {...props} />
      {children}
    </>
  );
}
