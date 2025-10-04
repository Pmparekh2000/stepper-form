import React, { useState } from 'react'

const Stepper = ({steps=[], startingStepNumber=0, apiData={}}) => {
    const [currentStepNumber, setCurrentStepNumber] = useState(0);
  return (
    <div className='stepper'>
        <div>
            {steps?.map((step, index) => {
                const {stepNumber, component: Component, label, description, completed, props: defaultProps} = step;
                return (
                    <div key={stepNumber} className='stepper-container'>
                        <div className={`step-number ${stepNumber < currentStepNumber ? 'active' : ''}`}>
                            {stepNumber + 1}
                            {stepNumber < steps?.length-1 && <div className={`stepper-line ${stepNumber < currentStepNumber ? 'active' : ''}`}></div>}
                        </div>
                        <div className='step-label'>
                            {step?.label}
                        </div>
                        <div className='step-label-component-container'>
                            {currentStepNumber === index && (<Component
                                {...defaultProps}
                                {...apiData[currentStepNumber] || {}}
                            />)}
                        </div>
                    </div>
                )
            })}
        </div>
        <div>
            {(currentStepNumber < steps?.length-1) && <button className='next-button' onClick={() => setCurrentStepNumber(currentStepNumber+1)}>Next</button>}
        </div>
        <div>
            {(currentStepNumber > 0) && <button className='prev-button' onClick={() => setCurrentStepNumber(currentStepNumber-1)}>Prev</button>}
        </div>
        
    </div>
  )
}

export default Stepper