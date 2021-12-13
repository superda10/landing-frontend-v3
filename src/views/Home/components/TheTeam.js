import { Container, Link, Grid, IconButton } from '@mui/material';
import { ClearAll, LinkedIn, Twitter } from '@mui/icons-material';
import { Contact } from 'views/Home/components';

const TheTeam = () => {
  return (
    <div id='team'>
      <div className='py-20 md:py-32' style={{ background: '#F0F0F0' }}>
        <Container>
          <div className='flex flex-col items-center mb-8 md:mb-16'>
            <h1 className='font-black text-center text-4xl md:text-6xl py-4 md:py-8'>OUR FOUNDATION TEAM</h1>
            <img src={require('assets/icons/icon-bumb.png').default.src} />
          </div>
          <Grid
            container
            spacing={{ xs: 3, xl: 6 }}
            columns={{ xs: 12, sm: 12, md: 12, xl: 10 }}
            className='justify-center'
          >
            {[
              {
                name: 'ERIC HUNG NGUYEN',
                image: require('assets/images/teams/Eric_Hung_Nguyen.png').default.src,
                position: 'CEO',
                description: `Experience: Senior investment analyst of Elliott Management with over $35bn assets under management. Investment Analyst at Nomura International.\n\nBSc. London School of Economics\n\nMsc. Imperial College London., Finance`,
                Twitter: 'https://twitter.com/eric_hungnguyen',
                LinkedIn: 'https://www.linkedin.com/in/hungngocnguyen',
              },
              {
                name: 'DUC LUU',
                image: require('assets/images/teams/Duc_Luu.png').default.src,
                position: 'CHAIRMAN',
                description: `Experience: COO at One Mount Group / OneHousing. Founder of Edge Learning Centers, sold to Rise education Cayman Limited (Nasdaq:REDU) befor its U.S. IPO in late 2017 at valuation of $1bn+\n\nBA: Yale University\n\nMBA: University of Chicago Booth School of Business`,
                Twitter: 'https://twitter.com/askduc',
                LinkedIn: 'https://www.linkedin.com/in/duc-luu',
              },
              {
                name: 'PAVEN DO',
                image: require('assets/images/teams/Paven_Do.png').default.src,
                position: 'CTO',
                description: `Experience: Blockchain & criptonimics researcher at Hong Kong Applied Science & Technology Research Institute since 2019 Blockchain & AI consultant at Clover Green, Hong Kong.\n\nPh.D. candidate, Hong Kong University of Science and Technology, has studied blockchain and tokenomics since 2017. He has 2 research publications a international blockchain conferences.`,
                Twitter: 'https://twitter.com/pavendo86',
                LinkedIn: 'https://www.linkedin.com/in/paven-do',
              },
            ].map((item, index) => (
              <Grid item key={index} xs={12} sm={8} md={4} xl={3}>
                <div className='flex flex-col justify-between items-center bg-primary-main rounded-3xl h-full p-6'>
                  <img src={item.image} />
                  <div className='font-bold text-lg mt-3'>{item.name}</div>
                  <div className='font-medium mb-3'>{item.position}</div>
                  <div className='text-sm text-center whitespace-pre-line mb-6'>{item.description}</div>
                  <div className='space-x-2'>
                    {item.Twitter && (
                      <IconButton component={Link} href={item.Twitter} className='bg-dark-10 hover:bg-dark-20'>
                        <Twitter />
                      </IconButton>
                    )}
                    {item.LinkedIn && (
                      <IconButton component={Link} href={item.LinkedIn} className='bg-dark-10 hover:bg-dark-20'>
                        <LinkedIn />
                      </IconButton>
                    )}
                  </div>
                </div>
              </Grid>
            ))}
          </Grid>

          <div className='flex flex-col items-center mt-20 md:mt-32 mb-8 md:mb-16'>
            <h1 className='font-black text-center text-4xl md:text-6xl py-4 md:py-8'>OUR TEAM</h1>
            <img src={require('assets/icons/icon-bumb.png').default.src} />
          </div>
          <Grid container spacing={{ xs: 3, xl: 6 }} className='justify-center'>
            {[
              {
                name: 'RUBY NGUYEN',
                image: require('assets/images/teams/Ruby_Nguyen.png').default.src,
                position: 'CHIEF OPERATING OFFICER',
                Twitter: 'https://twitter.com/zubi_on_rail',
                LinkedIn: 'https://www.linkedin.com/in/runguyen',
              },
              {
                name: 'GREGORY BUTZ',
                image: require('assets/images/teams/Gregory_Butz.png').default.src,
                position: 'CHIEF MARKETING OFFICER',
                Twitter: 'https://twitter.com/gregorybutz',
                LinkedIn: 'https://www.linkedin.com/in/gregorybutz',
              },
              {
                name: 'JEFFREY LEE',
                image: require('assets/images/teams/Jeffrey_Lee.png').default.src,
                position: 'CHIEF ART CURATOR',
                Twitter: 'https://twitter.com/jdiddymac',
                LinkedIn: 'https://www.linkedin.com/in/jeffreylee888',
              },
              {
                name: 'ALLEN DAM',
                image: require('assets/images/teams/Allen_Dam.png').default.src,
                position: 'CHIEF CONTENT OFFICER',
                LinkedIn: 'https://www.linkedin.com/in/allen-v-dam-66b7bb1',
              },
            ].map((item, index) => (
              <Grid item key={index} xs={12} sm={6} md={3}>
                <div className='flex flex-col justify-between items-center bg-primary-main rounded-3xl h-full p-6'>
                  <img src={item.image} />
                  <div className='font-bold text-center text-lg mt-3'>{item.name}</div>
                  <div className='font-medium text-center mb-3'>{item.position}</div>
                  <div className='space-x-2'>
                    {item.Twitter && (
                      <IconButton component={Link} href={item.Twitter} className='bg-dark-10 hover:bg-dark-20'>
                        <Twitter />
                      </IconButton>
                    )}
                    {item.LinkedIn && (
                      <IconButton component={Link} href={item.LinkedIn} className='bg-dark-10 hover:bg-dark-20'>
                        <LinkedIn />
                      </IconButton>
                    )}
                  </div>
                </div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
      <div className='pb-20'>
        <Container maxWidth='md'>
          <div className='flex flex-col items-center mt-20 md:mt-32 mb-16'>
            <h1 className='font-black text-center text-4xl md:text-6xl py-4 md:py-8'>OUR PARTNERS</h1>
            <img src={require('assets/icons/icon-bumb.png').default.src} />
          </div>
          <Grid container columnSpacing={6} rowSpacing={10} className='justify-center'>
            {[
              { name: '1_NGC_Venture.svg', width: 280 },
              { name: '2_Polygon.png', width: 280 },
              { name: '3_Chain_Guardians.png', width: 200 },
              { name: '4_Skyvision_Capital.svg', width: 280 },
              { name: '5_Exnetwork_Capital.png', width: 220 },
              { name: '6_SL2_Capital.svg', width: 260 },
              { name: '7_OIG_Group.png', width: 220 },
              { name: '8_Twin_Apex_Capital.png', width: 280 },
              { name: '9_Card_Starter.png', width: 260 },
              { name: '10_Pantera_ICO.png', width: 240 },
              { name: '11_Token_Suite.png', width: 240 },
              { name: '12_Lupa_Capital.svg', width: 300 },
              { name: '13_Maven_Capital.png', width: 280 },
            ].map((item, index) => (
              <Grid item key={index} xs={6} md={4} lg={3} className='flex justify-center items-center'>
                <img
                  src={require(`assets/images/partners/${item.name}`).default.src}
                  style={{ width: item.width - 60 }}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
        <Container>
          <div className='flex flex-col items-center mt-32 mb-16'>
            <h1 className='font-black text-center text-4xl md:text-6xl py-4 md:py-8'>ROADMAP</h1>
            <img src={require('assets/icons/icon-bumb.png').default.src} />
          </div>
          <Grid container columnSpacing={6} className='justify-center'>
            {[
              [
                { timeline: 'Q3 2021', fetures: ['LP Staking', 'Launch NFT marketplace', 'ERC-1155 experiment'] },
                {
                  timeline: 'Q4 2021',
                  fetures: ['Integrating BSC ecosystem', 'Polygon/Matic layer-2 solution', 'Gamestore'],
                },
              ],
              [
                {
                  timeline: 'H1 2022',
                  fetures: [
                    'Mobile web / Mobile app',
                    'NFT-DeFi experiments',
                    'Fiat payment solution',
                    'Cardano: experiment and testing',
                  ],
                },
                {
                  timeline: 'H2 2022',
                  fetures: ['Cardano integration', 'DeFi applications for NFTs', 'NFT evaluation tools intergration'],
                },
              ],
              [
                { timeline: 'H1 2023', fetures: ['Cross-chain payment solution', 'Expanding to more blockchains'] },
                {
                  timeline: 'H2 2023',
                  fetures: [
                    'White label solutions',
                    'SKD for partnership development',
                    'Integrating NFT cross-chain solutions',
                  ],
                },
              ],
            ].map((items, index) => (
              <Grid item key={index} xs={12} md={8} lg={4}>
                {items.map((item, index) => (
                  <div key={index}>
                    <div className='flex items-center'>
                      <ClearAll fontSize='large' /> <span className='font-bold text-2xl ml-2'>{item.timeline}</span>
                    </div>
                    <div className='mt-4 mb-12'>
                      {item.fetures.map((feature, index) => (
                        <div key={index} className='text-lg bg-gray-100 rounded mb-4 p-4'>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
      <Contact />
    </div>
  );
};

export default TheTeam;
