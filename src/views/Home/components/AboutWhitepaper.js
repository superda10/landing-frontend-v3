/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import {
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  FormControlLabel,
  Checkbox,
} from '@mui/material';

const AboutWhitepaper = ({ onClose }) => {
  const [isAgree, setIsAgree] = React.useState(false);
  return (
    <>
      <DialogTitle className='text-center'>
        <div className='font-black text-2xl md:text-3xl mb-3'>Term and Conditions</div>
        <div className='text-gray-500'>PLEASE READ THE ENTIRETY OF THIS "NOTICE AND DISCLAIMER" SECTION CAREFULLY.</div>
      </DialogTitle>

      <DialogContent dividers>
        <div className='p-6' style={{ backgroundColor: '#f8f8f8' }}>
          <Typography className='font-bold text-2xl mb-4' align='center'>
            NOTICE AND DISCLAIMER
          </Typography>
          <Typography align='justify' paragraph>
            PLEASE READ THE ENTIRETY OF THIS "NOTICE AND DISCLAIMER" SECTION CAREFULLY. NOTHING HEREIN CONSTITUTES
            LEGAL, FINANCIAL, BUSINESS OR TAX ADVICE AND YOU SHOULD CONSULT YOUR OWN LEGAL, FINANCIAL, TAX OR OTHER
            PROFESSIONAL ADVISOR(S) BEFORE ENGAGING IN ANY ACTIVITY IN CONNECTION HEREWITH. NEITHER SPORES AI LIMITED
            (THE COMPANY), ANY OF THE PROJECT TEAM MEMBERS (THE SPORES TEAM) WHO HAVE WORKED ON THE SPORES PLATFORM (AS
            DEFINED HEREIN) OR PROJECT TO DEVELOP THE SPORES PLATFORM IN ANY WAY WHATSOEVER, ANY DISTRIBUTOR/VENDOR OF
            SPO TOKENS (THE DISTRIBUTOR), NOR ANY SERVICE PROVIDER SHALL BE LIABLE FOR ANY KIND OF DIRECT OR INDIRECT
            DAMAGE OR LOSS WHATSOEVER WHICH YOU MAY SUFFER IN CONNECTION WITH ACCESSING THIS WHITEPAPER, THE WEBSITE AT
            HTTPS://SPORES.APP/ (THE WEBSITE) OR ANY OTHER WEBSITES OR MATERIALS PUBLISHED BY THE COMPANY.
          </Typography>

          <Typography className='font-bold text-xl' gutterBottom>
            Project purpose
          </Typography>
          <Typography align='justify' paragraph>
            You agree that you are acquiring SPO to participate in the Spores platform and to obtain services on the
            ecosystem thereon. The Company, the Distributor and their respective affiliates would develop and contribute
            to the underlying source code for the Spores platform. The Company is acting solely as an arms’ length third
            party in relation to the SPO distribution, and not in the capacity as a financial advisor or fiduciary of
            any person with regard to the distribution of SPO.
          </Typography>

          <Typography className='font-bold text-xl' gutterBottom>
            Nature of the Whitepaper
          </Typography>
          <Typography align='justify' paragraph>
            The Whitepaper and the Website are intended for general informational purposes only and do not constitute a
            prospectus, an offer document, an offer of securities, a solicitation for investment, or any offer to sell
            any product, item, or asset (whether digital or otherwise). The information herein may not be exhaustive and
            does not imply any element of a contractual relationship. There is no assurance as to the accuracy or
            completeness of such information and no representation, warranty or undertaking is or purported to be
            provided as to the accuracy or completeness of such information. Where the Whitepaper or the Website
            includes information that has been obtained from third party sources, the Company, the Distributor, their
            respective affiliates and/or the Spores team have not independently verified the accuracy or completeness of
            such information. Further, you acknowledge that circumstances may change and that the Whitepaper or the
            Website may become outdated as a result; and neither the Company nor the Distributor is under any obligation
            to update or correct this document in connection therewith.
          </Typography>

          <Typography className='font-bold text-xl' gutterBottom>
            Token Documentation
          </Typography>
          <Typography align='justify' paragraph>
            Nothing in the Whitepaper or the Website constitutes any offer by the Company, the Distributor, or the
            Spores team to sell any SPO (as defined herein) nor shall it or any part of it nor the fact of its
            presentation form the basis of, or be relied upon in connection with, any contract or investment decision.
            Nothing contained in the Whitepaper or the Website is or may be relied upon as a promise, representation or
            undertaking as to the future performance of the Spores platform. The agreement between the Distributor (or
            any third party) and you, in relation to any distribution or transfer of SPO, is to be governed only by the
            separate terms and conditions of such agreement.
          </Typography>
          <Typography align='justify' paragraph>
            The information set out in the Whitepaper and the Website is for community discussion only and is not
            legally binding. No person is bound to enter into any contract or binding legal commitment in relation to
            the acquisition of SPO, and no digital asset or other form of payment is to be accepted on the basis of the
            Whitepaper or the Website. The agreement for distribution of SPO and/or continued holding of SPO shall be
            governed by a separate set of Terms and Conditions or Token Distribution Agreement (as the case may be)
            setting out the terms of such distribution and/or continued holding of SPO (the Terms and Conditions), which
            shall be separately provided to you or made available on the Website. The Terms and Conditions must be read
            together with the Whitepaper. In the event of any inconsistencies between the Terms and Conditions and the
            Whitepaper or the Website, the Terms and Conditions shall prevail.
          </Typography>

          <Typography className='font-bold text-xl' gutterBottom>
            Deemed Representations and Warranties
          </Typography>
          <Typography align='justify' paragraph>
            By accessing the Whitepaper or the Website (or any part thereof), you shall be deemed to represent and
            warrant to the Company, the Distributor, their respective affiliates, and the Spores team as follows:
          </Typography>
          <ol className='list-disc'>
            <Typography component='li' className='ml-6' align='justify' paragraph>
              In any decision to acquire any SPO, you have shall not rely on any statement set out in the Whitepaper or
              the Website;
            </Typography>
            <Typography component='li' className='ml-6' align='justify' paragraph>
              You will and shall at your own expense ensure compliance with all laws, regulatory requirements and
              restrictions applicable to you (as the case may be);
            </Typography>
            <Typography component='li' className='ml-6' align='justify' paragraph>
              You acknowledge, understand and agree that SPO may have no value, there is no guarantee or representation
              of value or liquidity for SPO, and SPO is not an investment product nor is it intended for any speculative
              investment whatsoever;
            </Typography>
            <Typography component='li' className='ml-6' align='justify' paragraph>
              None of the Company, the Distributor, their respective affiliates, and/or the Spores team members shall be
              responsible for or liable for the value of SPO, the transferability and/or liquidity of SPO and/or the
              availability of any market for SPO through third parties or otherwise; and
            </Typography>
            <Typography component='li' className='ml-6' align='justify' paragraph>
              You acknowledge, understand and agree that you are not eligible to participate in the distribution of SPO
              if you are a citizen, national, resident (tax or otherwise), domiciliary and/or green card holder of a
              geographic area or country (i) where it is likely that the distribution of SPO would be construed as the
              sale of a security (howsoever named), financial service or investment product and/or (ii) where
              participation in token distributions is prohibited by applicable law, decree, regulation, treaty, or
              administrative act (including without limitation the United States of America and the People's Republic of
              China); and to this effect you agree to provide all such identity verification document when requested in
              order for the relevant checks to be carried out.
            </Typography>
          </ol>
          <Typography align='justify' paragraph>
            The Company, the Distributor and the Spores team do not and do not purport to make, and hereby disclaims,
            all representations, warranties or undertaking to any entity or person (including without limitation
            warranties as to the accuracy, completeness, timeliness, or reliability of the contents of the Whitepaper or
            the Website, or any other materials published by the Company or the Distributor). To the maximum extent
            permitted by law, the Company, the Distributor, their respective affiliates and service providers shall not
            be liable for any indirect, special, incidental, consequential or other losses of any kind, in tort,
            contract or otherwise (including, without limitation, any liability arising from default or negligence on
            the part of any of them, or any loss of revenue, income or profits, and loss of use or data) arising from
            the use of the Whitepaper or the Website, or any other materials published, or its contents (including
            without limitation any errors or omissions) or otherwise arising in connection with the same. Prospective
            acquirors of SPO should carefully consider and evaluate all risks and uncertainties (including financial and
            legal risks and uncertainties) associated with the distribution of SPO, the Company, the Distributor and the
            Spores team.
          </Typography>

          <Typography className='font-bold text-xl' gutterBottom>
            SPO Token
          </Typography>
          <Typography align='justify' paragraph>
            SPO is a non-refundable functional utility token which will be used as the medium of exchange between
            participants on the Spores platform in a decentralised manner. The goal of introducing SPO is to provide a
            convenient and secure mode of payment and settlement between participants who interact within the ecosystem
            on the Spores platform, and it is not, and not intended to be, a medium of exchange accepted by the public
            (or a section of the public) as payment for goods or services or for the discharge of a debt; nor is it
            designed or intended to be used by any person as payment for any goods or services whatsoever that are not
            exclusively provided by the issuer. SPO does not in any way represent any shareholding, participation,
            right, title, or interest in the Company, the Distributor, their respective affiliates, or any other
            company, enterprise or undertaking, nor will SPO entitle token holders to any promise of fees, dividends,
            revenue, profits or investment returns, and are not intended to constitute securities in Singapore or any
            relevant jurisdiction. SPO may only be utilised on the Spores platform, and ownership of SPO carries no
            rights, express or implied, other than the right to use SPO as a means to enable usage of and interaction
            within the Spores platform.
          </Typography>
          <Typography align='justify' paragraph>
            SPO also provides the economic incentives which will be distributed to encourage users to contribute to and
            participate in the ecosystem on the Spores platform, thereby creating a win-win system where every
            participant is fairly compensated for its efforts. SPO is an integral and indispensable part of the Spores
            platform, because without SPO, there would be no incentive for users to expend resources to participate in
            activities or provide services for the benefit of the entire ecosystem on the Spores platform. Given that
            additional SPO will be awarded to a user based only on its actual usage, activity and contribution on the
            Spores platform, users of the Spores platform and/or holders of SPO which did not actively participate will
            not receive any SPO incentives.
          </Typography>

          <Typography className='font-bold text-xl' gutterBottom>
            Informational purposes only
          </Typography>
          <Typography align='justify' paragraph>
            The information set out herein is only conceptual, and describes the future development goals for the Spores
            platform to be developed. In particular, the project roadmap in the Whitepaper is being shared in order to
            outline some of the plans of the Spores team, and is provided solely for INFORMATIONAL PURPOSES and does not
            constitute any binding commitment. Please do not rely on this information in deciding whether to participate
            in the token distribution because ultimately, the development, release, and timing of any products, features
            or functionality remains at the sole discretion of the Company, the Distributor or their respective
            affiliates, and is subject to change. Further, the Whitepaper or the Website may be amended or replaced from
            time to time. There are no obligations to update the Whitepaper or the Website, or to provide recipients
            with access to any information beyond what is provided herein.
          </Typography>

          <Typography className='font-bold text-xl' gutterBottom>
            Regulatory approval
          </Typography>
          <Typography align='justify' paragraph>
            No regulatory authority has examined or approved, whether formally or informally, any of the information set
            out in the Whitepaper or the Website. No such action or assurance has been or will be taken under the laws,
            regulatory requirements or rules of any jurisdiction. The publication, distribution or dissemination of the
            Whitepaper or the Website does not imply that the applicable laws, regulatory requirements or rules have
            been complied with.
          </Typography>

          <Typography className='font-bold text-xl' gutterBottom>
            Cautionary Note on forward-looking statements
          </Typography>
          <Typography align='justify' paragraph>
            All statements contained herein, statements made in press releases or in any place accessible by the public
            and oral statements that may be made by the Company, the Distributor and/or the Spores team, may constitute
            forward-looking statements (including statements regarding the intent, belief or current expectations with
            respect to market conditions, business strategy and plans, financial condition, specific provisions and risk
            management practices). You are cautioned not to place undue reliance on these forward-looking statements
            given that these statements involve known and unknown risks, uncertainties and other factors that may cause
            the actual future results to be materially different from that described by such forward-looking statements,
            and no independent third party has reviewed the reasonableness of any such statements or assumptions. These
            forward-looking statements are applicable only as of the date indicated in the Whitepaper, and the Company,
            the Distributor as well as the Spores team expressly disclaim any responsibility (whether express or
            implied) to release any revisions to these forward-looking statements to reflect events after such date.
          </Typography>

          <Typography className='font-bold text-xl' gutterBottom>
            References to companies and platforms
          </Typography>
          <Typography align='justify' paragraph>
            The use of any company and/or platform names or trademarks herein (save for those which relate to the
            Company, the Distributor or their respective affiliates) does not imply any affiliation with, or endorsement
            by, any third party. References in the Whitepaper or the Website to specific companies and platforms are for
            illustrative purposes only.
          </Typography>

          <Typography className='font-bold text-xl' gutterBottom>
            English language
          </Typography>
          <Typography align='justify' paragraph>
            The Whitepaper and the Website may be translated into a language other than English for reference purpose
            only and in the event of conflict or ambiguity between the English language version and translated versions
            of the Whitepaper or the Website, the English language versions shall prevail. You acknowledge that you have
            read and understood the English language version of the Whitepaper and the Website.
          </Typography>

          <Typography className='font-bold text-xl' gutterBottom>
            No Distribution
          </Typography>
          <Typography align='justify' paragraph>
            No part of the Whitepaper or the Website is to be copied, reproduced, distributed or disseminated in any way
            without the prior written consent of the Company or the Distributor. By attending any presentation on this
            Whitepaper or by accepting any hard or soft copy of the Whitepaper, you agree to be bound by the foregoing
            limitations.
          </Typography>
        </div>
      </DialogContent>

      <DialogActions className='flex flex-col pb-6'>
        <FormControlLabel
          control={<Checkbox checked={isAgree} onChange={(event, value) => setIsAgree(value)} />}
          label='I have read and agree to the terms and conditions'
          className='mb-2'
        />
        <div className='space-x-6'>
          <Button variant='outlined' color='inherit' className='border-gray-500 w-36' onClick={onClose}>
            Cancel
          </Button>
          <Button
            variant='contained'
            disabled={!isAgree}
            className='w-36'
            onClick={() => {
              window.open('https://drive.google.com/file/d/14o134X8zbig-OlCjEupJyWALdHy0BOuJ/view', '_blank');
            }}
          >
            Agree
          </Button>
        </div>
      </DialogActions>
    </>
  );
};

export default AboutWhitepaper;
