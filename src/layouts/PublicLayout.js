import Header from 'components/Header';
import classes from './PublicLayout.module.scss'
import ContactUs from 'components/ContactUs';
import Footer from 'components/Footer';
import Banner from 'components/Banner';
import SideMenus from './SideMenus/SideMenus';

const PublicLayout = ({ children }) => {
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <Header />
      </div>
      <div className={classes.banner}>
        <Banner />
      </div>
      <div className={classes.content}>
        {children}
      </div>

      <div className={classes.contactUs}>
        <ContactUs />
      </div>
      <div className={classes.footer}>
        <Footer />
      </div>

      <SideMenus />
    </div>
  );
};

export default PublicLayout;
