import { AppHeader } from 'containers';

const PublicLayout = ({ children }) => {
  return (
    <>
      <AppHeader />
      {children}
    </>
  );
};

export default PublicLayout;
