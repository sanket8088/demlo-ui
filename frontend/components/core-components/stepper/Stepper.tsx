import * as React from 'react';
import Box from '@mui/material/Box';
import Step from '@mui/material/Step';
import Stepper from '@mui/material/Stepper';
import StepLabel from '@mui/material/StepLabel';

const steps = ['Profile', 'Interests'];

interface ChildProps {
  count: number;
}

const HorizontalStepper = ({ count }: ChildProps) => {
  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={count} alternativeLabel>
        {steps.map((label) => (
          <Step
            key={label}
            sx={{
              '& .MuiStepLabel-root .Mui-completed': {
                color: '#51CDDE', // circle color (COMPLETED)
              },
              '& .MuiStepLabel-label.Mui-completed.MuiStepLabel-alternativeLabel':
                {
                  color: 'grey.500', // Just text label (COMPLETED)
                },
              '& .MuiStepLabel-root .Mui-active': {
                color: '#51CDDE', // circle color (ACTIVE)
              },
              '& .MuiStepLabel-label.Mui-active.MuiStepLabel-alternativeLabel':
                {
                  color: 'common.white', // Just text label (ACTIVE)
                },
              '& .MuiStepLabel-root .Mui-active .MuiStepIcon-text': {
                fill: 'black', // circle's number (ACTIVE)
              },
              '& .MuiStepLabel-label.Mui-disabled.MuiStepLabel-alternativeLabel':
                {
                  color: '#CDCDCD', // Just text label (DISABLED)
                },
              '& .MuiStepLabel-root .Mui-disabled .MuiStepIcon-text': {
                fill: '#51CDDE', // circle's number (DISABLED)
              },
              '& .MuiStepLabel-root .Mui-disabled': {
                color: '#51CDDE', // circle color (DISABLED)
              },
            }}
          >
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};

export default HorizontalStepper;
