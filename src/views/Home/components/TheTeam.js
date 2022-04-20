import { useState } from 'react';
import { Link, Grid, IconButton } from '@mui/material';
import { LinkedIn, Twitter } from '@mui/icons-material';
import classNames from 'classnames';

const TheTeam = () => {
  const [showAllCXOTeamInfo, setShowAllCXOTeamInfo] = useState(false);
  const [showAllAdviorTeamInfo, setShowAllAdvisorTeamInfo] = useState(false);

  return (
    <div id='team'>
      <div className='custom-container'>
        <h1 className='title text-center mb-40'>Our Foundation Team</h1>
        <Grid
          container
          spacing={{ xs: 3, xl: 3 }}
          columns={{ xs: 12, sm: 12, md: 12, xl: 12 }}
          className='justify-center '
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
            <Grid item key={index} xs={12} sm={8} md={4} xl={4}>
              <div className='flex flex-col items-center team h-full py-6 px-4'>
                <img src={item.image} className='team-avatar-large' />
                <div className='font-bold text-lg mt-4 text-white'>{item.name}</div>
                <div className='font-normal mb-4 text-white'>{item.position}</div>
                <div className='space-x-4 mb-4'>
                  {item.Twitter && (
                    <IconButton component={Link} href={item.Twitter} className='bg-primary-main btn-social'>
                      <Twitter color='white' />
                    </IconButton>
                  )}
                  {item.LinkedIn && (
                    <IconButton component={Link} href={item.LinkedIn} className='bg-primary-main btn-social'>
                      <LinkedIn color='white' />
                    </IconButton>
                  )}
                </div>
                <div className='text-sm text-center whitespace-pre-line mb-6 text-white'>{item.description}</div>
              </div>
            </Grid>
          ))}
        </Grid>

        <h1 className='mb-40 text-center title mt-110'>CXO Team</h1>
        <Grid container spacing={{ xs: 3, xl: 3 }} className='justify-center '>
          {[
            {
              name: 'GREGORY BUTZ',
              image: require('assets/images/teams/Gregory_Butz.png').default.src,
              position: 'Chief Marketing Officer',
              Twitter: 'https://twitter.com/gregorybutz',
              LinkedIn: 'https://www.linkedin.com/in/gregorybutz',
              description:
                'A marketing executive with 20+ years of experience across world class client and agency-side organizations\nProven consumer advocate who has driven $3B in net-new revenue through brand strategy, innovation, and digital activations\nSnapshot of experience includes BBDO, DDB, Razorfish, Salesforce, PepsiCo, McDonald’s, MillerCoors, and Walgreens.\nA passionate Web3 marketer helping brands transition into the metaverse\nMBA: University of Chicago Booth School of Business',
            },
            {
              name: 'ALLEN DAM',
              image: require('assets/images/teams/Allen_Dam.png').default.src,
              position: 'Chief Content Officer',
              LinkedIn: 'https://www.linkedin.com/in/allen-v-dam-66b7bb1',
              description:
                'Over 20 years of experiences in Hollywood Film Industry\nExecutive Producer of Expendable 4, Rambo 5 featuring Sylvester Stallone, Lamborghini the Legend featuring Alec Baldwin and Antonio Banderas and Bull Brothers\nA Hollywood executive with film credits on Fast & Furious 6 and Tokyo Drift, Trainspotting, Notorious and Wonder\nMajored in Visual Environmental Studies at Harvard',
            },
            // {
            //   name: 'RUBY NGUYEN',
            //   image: require('assets/images/teams/Ruby_Nguyen.png').default.src,
            //   position: 'Chief Operations Officer',
            //   Twitter: 'https://twitter.com/zubi_on_rail',
            //   LinkedIn: 'https://www.linkedin.com/in/runguyen',
            //   description: 'COO at Spores Network\n8+ years of experience in building new ventures, technology investment, sales, and operations\nFormer Founding Member at One Mount, a corporate venture builder with over $100M in investment\nFormer SEA Regional Lead, Partner Management at Facebook\nMBA, University of Chicago Booth School of Business'
            // },
            {
              name: 'Phung Minh',
              image: require('assets/images/teams/phung-minh.png').default.src,
              position: 'Engineering Director',
              Twitter: '',
              LinkedIn: '',
              description:
                'Engineering Director at Spores\n\nAn e-commerce expert with 17+ years of experience across multiple fields and start-ups. A passionate advocate for blockchain and its applications.',
            },
          ].map((item, index) => (
            <Grid item key={index} xs={12} sm={8} md={4} xl={4}>
              <div
                className={classNames(
                  'flex flex-col items-center team py-6 px-4 h-full team-item-h relative',
                  showAllCXOTeamInfo && 'team-item-h-full',
                )}
              >
                <img src={item.image} className='team-avatar' />
                <div className='font-bold text-lg mt-4 text-white text-uppercase'>{item.name}</div>
                <div className='font-normal mb-4 text-white size-xs text-uppercase'>{item.position}</div>
                <div className='space-x-4 mb-4'>
                  {item.Twitter && (
                    <IconButton component={Link} href={item.Twitter} className='bg-primary-main btn-social'>
                      <Twitter color='white' />
                    </IconButton>
                  )}
                  {item.LinkedIn && (
                    <IconButton component={Link} href={item.LinkedIn} className='bg-primary-main btn-social'>
                      <LinkedIn color='white' />
                    </IconButton>
                  )}
                </div>
                <div className='text-sm text-center whitespace-pre-line mb-6 text-white'>{item.description}</div>

                <div
                  className='more-info'
                  onClick={() => {
                    setShowAllCXOTeamInfo((prev) => !prev);
                  }}
                >
                  <img src={'/assets/images/prev.svg'} className='arrow-icon' />
                </div>
              </div>
            </Grid>
          ))}
        </Grid>

        <h1 className='mb-40 text-center title mt-110'>Advisor Team</h1>
        <Grid container spacing={{ xs: 3, xl: 3 }} className='justify-center mb-100 '>
          {[
            {
              name: 'Roger Lim',
              image: require('assets/images/teams/roger-lim.png').default.src,
              position: 'Advisor',
              Twitter: '',
              LinkedIn: '',
              description:
                'Founding partner of NGC Ventures, one of the largest institutional investors of blockchain and distributed ledger technologies and has been a key contributor to a number of leading blockchain projects\nCo-Founder and Group CEO of Webvisions, a successful Pan-Asian cloud hosting company\nGeneral Partner of Innosight Ventures',
            },
            {
              name: 'Dennis Chookaszian',
              image: require('assets/images/teams/dennis-chookaszian.png').default.src,
              position: 'Advisor, Governance',
              Twitter: 'https://twitter.com/chookasd',
              LinkedIn: 'https://www.linkedin.com/in/dennis-chookaszian/',
              description:
                'Former Chairman and CEO of CNA Insurance Companies, which was a $17 Billion multi line insurer with 20,000 employees\nFormer Board Director at 13 publicly-traded corporations\nDirector and Chairman of Audit Committee at CME Group\nDirector, Global Digital Asset & Cryptocurrency Association\nBA, Northwestern University\nMSc, Economics, The London School of Economics and Political Science\nMBA: University of Chicago Booth School of Business',
            },
            {
              name: 'Rishad Tobaccowala',
              image: require('assets/images/teams/rishad-tobaccowala.png').default.src,
              position: 'Advisor, Spores Network',
              Twitter: 'https://twitter.com/rishad',
              LinkedIn: 'https://www.linkedin.com/in/rishadtobaccowala/',
              description:
                'Author of Restoring the Soul of Business: Staying Human in the Age of Data\nAn advertising titan with 35+ years of experience with Publicis Groupe including::\nChief Growth Officer and Member of the Management Committee, Publicis Groupe\nChief Strategy & Innovation Officer, Viviaki\nCEO, Denuo\nChief Innovation Officer, Publicis Groupe Media\nPresident, Starcom IP\nPresident, Giant Step\nDirector and Founder of Interactive Marketing Group, Leo Burnett\nMBA: University of Chicago Booth School of Business',
            },
            {
              name: 'Tho Tran',
              image: require('assets/images/teams/tho-tran.png').default.src,
              position: 'Advisor',
              Twitter: '',
              LinkedIn: '',
              description:
                'Founder of Sonat Game\n8+ years of experience in game development, responsible for some of the most played and downloaded games in Japanese, Korean, and European Markets',
            },
          ].map((item, index) => (
            <Grid item key={index} xs={12} sm={8} md={4} xl={3}>
              <div
                className={classNames(
                  'flex flex-col items-center team py-6 px-4 h-full team-item-h relative',
                  showAllAdviorTeamInfo && 'team-item-h-full',
                )}
              >
                <img src={item.image} className='team-avatar' />
                <div className='font-bold text-lg mt-4 text-white text-uppercase'>{item.name}</div>
                <div className='font-normal mb-4 text-white size-xs text-uppercase'>{item.position}</div>
                <div className='space-x-4 mb-4'>
                  {item.Twitter && (
                    <IconButton component={Link} href={item.Twitter} className='bg-primary-main btn-social'>
                      <Twitter color='white' />
                    </IconButton>
                  )}
                  {item.LinkedIn && (
                    <IconButton component={Link} href={item.LinkedIn} className='bg-primary-main btn-social'>
                      <LinkedIn color='white' />
                    </IconButton>
                  )}
                </div>
                <div className='text-sm text-center whitespace-pre-line mb-6 text-white'>{item.description}</div>
                <div
                  className='more-info'
                  onClick={() => {
                    setShowAllAdvisorTeamInfo((prev) => !prev);
                  }}
                >
                  <img src={'/assets/images/prev.svg'} className='arrow-icon' />
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>

      <div className='divider mb-50' />
      <div className='custom-container-small'>
        <h1 className='title text-center mb-50'>Our Partners</h1>
        <Grid container columnSpacing={2} rowSpacing={4} className='justify-center '>
          {[
            { name: '1_NGC_Venture.svg', width: 122 },
            { name: '2_Polygon.png', width: 137 },
            { name: '3_Chain_Guardians.png', width: 104 },
            { name: '4_Skyvision_Capital.svg', width: 116 },
            { name: '5_Exnetwork_Capital.png', width: 82 },
            { name: '6_SL2_Capital.svg', width: 117 },
            { name: '7_OIG_Group.png', width: 112 },
            { name: '8_Twin_Apex_Capital.png', width: 139 },
            { name: '9_Card_Starter.png', width: 73 },
            { name: '10_Pantera_ICO.png', width: 107 },
            { name: '11_Token_Suite.png', width: 91 },
            { name: '12_Lupa_Capital.svg', width: 184 },
            { name: '13_Maven_Capital.png', width: 137 },
          ].map((item, index) => (
            <Grid item key={index} xs={6} md={3} lg={2} className='flex justify-center items-center'>
              <img src={require(`assets/images/partners/${item.name}`).default.src} style={{ width: item.width }} />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default TheTeam;
