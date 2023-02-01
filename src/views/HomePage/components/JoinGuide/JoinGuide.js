import { Step, StepContent, StepLabel, Stepper } from '@mui/material';
import { DarkButton, PrimaryButton } from 'components/Common';
import React from 'react';
import clsx from 'clsx';
import classes from './JoinGuide.module.scss';

const steps = [
  {
    label: 'Stake SPO',
    description: (
      <div>
        Spores will showcase a fixed tier system based on the number of tokens staked. The more token staked, the more
        guaranteed allocation users can get.
      </div>
    ),
    buttons: (
      <div className='flex gap-2'>
        <PrimaryButton>Buy SPO</PrimaryButton>
        <DarkButton>Stake SPO</DarkButton>
      </div>
    ),
    image: '/assets/images/step-image-1.png',
    height: 456,
  },
  {
    label: 'Register',
    description: <div>When you have tier, you can join any IDO/INO you prefers</div>,
    buttons: (
      <div>
        <DarkButton>All Project</DarkButton>
      </div>
    ),
    image: '/assets/images/step-image-2.png',
    height: 402,
  },
  {
    label: 'Participate',
    description: (
      <div>
        The guaranteed allocation will be assigned based on the pool weights and number of participants.
        <br />
        <span className='font-semibold'>VIP Round:</span>
        <br />
        VIP round is only available to our VIPs who staked $SPO and got a tier.
        <br />
        <span className='font-semibold'>Double/Triple Limit Round:</span>
        <br />
        The unsold tokens from the first round are made available on a FCFS basis, only to guaranteed tiers (Platinum
        and above). These members can purchase an additional amount (x2 time) their allocation in first round.
      </div>
    ),
    buttons: (
      <div>
        <PrimaryButton>Stake now</PrimaryButton>
      </div>
    ),
    image: '/assets/images/step-image-3.png',
    height: 424,
  },
];

const StepIcon = ({ text, isDone }) => (
  <div
    className={clsx(
      'font-bold leading-[12px] rounded-full h-6 w-6 flex items-center justify-center',
      isDone ? classes.stepIcon : '',
    )}
    style={{
      background: isDone ? '#D9AC63' : '#D0D5DD',
      color: isDone ? '#fff' : '#98A2B3',
    }}
  >
    <div>{text}</div>
  </div>
);

const JoinGuide = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  return (
    <div className='bg-white py-28 flex justify-center'>
      <div className='flex flex-col items-center max-w-[1320px]'>
        <div className='font-bold text-5xl text-[#344054] text-center mb-[60px]'>
          How to join
          <br />
          Spores Launchpad?
        </div>
        <div className='grid grid-cols-2 gap-16'>
          <div className='flex justify-end'>
            <img src={steps[activeStep].image} style={{ height: steps[activeStep].height }} />
          </div>
          <Stepper
            activeStep={activeStep}
            orientation='vertical'
            sx={{
              '& .MuiStepLabel-iconContainer': {
                paddingRight: '33px',
              },
              '& .MuiStepContent-root': {
                borderLeftWidth: '2px',
                paddingLeft: '45px',
              },
              '& .MuiStepConnector-line': {
                borderLeftWidth: '2px',
                minHeight: '76px',
                height: '100%',
              },
              '& .MuiStepConnector-root.Mui-active .MuiStepConnector-line': {
                borderColor: '#D9AC63',
              },
              '& .MuiStepConnector-root.Mui-completed .MuiStepConnector-line': {
                borderColor: '#D9AC63',
              },
              height: 'fit-content',
            }}
          >
            {steps.map((step, index) => {
              const isDone = index <= activeStep;

              return (
                <Step key={step.label}>
                  <StepLabel
                    icon={<StepIcon text={index + 1} isDone={isDone} />}
                    className='cursor-pointer p-0'
                    onClick={() => setActiveStep(index)}
                  >
                    <div className='font-bold text-xl text-[#344054]'>{step.label}</div>
                  </StepLabel>
                  <StepContent>
                    <div className='pt-4 max-w-[435px]'>
                      <div className='text-[#667085] mb-5'>{step.description}</div>
                      {step.buttons}
                    </div>
                  </StepContent>
                </Step>
              );
            })}
          </Stepper>
        </div>
      </div>
    </div>
  );
};

export default JoinGuide;
