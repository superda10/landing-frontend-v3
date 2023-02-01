import Header from 'components/Header';
import classes from './PublicLayout.module.scss';
import Footer from 'components/Footer';

const PublicLayout = ({ children }) => {
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <Header />
      </div>
      
      <div>{children}</div>
      {/* <div>
        <ContactUs />
      </div> */}

      <div>
        <Footer />
      </div>
      {/* <SideMenus /> */}
    </div>
  );
};

export default PublicLayout;
