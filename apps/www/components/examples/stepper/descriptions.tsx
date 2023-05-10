import { Button } from "@/components/ui/button"
import { Stepper, StepperConfig, StepperStep } from "@/components/ui/stepper"
import { useStepper } from "@/components/ui/use-stepper"

const steps = [
  { label: "Step 1", description: "Frist description" },
  { label: "Step 2", description: "Second description" },
  { label: "Step 3", description: "Third description" },
] satisfies StepperConfig[]

export const StepperWithDescriptions = () => {
  const {
    nextStep,
    prevStep,
    resetSteps,
    activeStep,
    isDisabledStep,
    isLastStep,
    isOptionalStep,
  } = useStepper({
    initialStep: 0,
    steps,
  })

  return (
    <div className="flex w-full flex-col gap-4">
      <Stepper activeStep={activeStep}>
        {steps.map((step, index) => (
          <StepperStep index={index} key={index} {...step}>
            <div className="h-40 w-full rounded-lg bg-slate-100 p-4 text-slate-900 dark:bg-slate-300">
              <p>Step {index + 1} content</p>
            </div>
          </StepperStep>
        ))}
      </Stepper>
      <div className="flex items-center justify-end gap-2">
        {activeStep === steps.length ? (
          <>
            <h2>All steps completed!</h2>
            <Button onClick={resetSteps}>Reset</Button>
          </>
        ) : (
          <>
            <Button disabled={isDisabledStep} onClick={prevStep}>
              Prev
            </Button>
            <Button onClick={nextStep}>
              {isLastStep ? "Finish" : isOptionalStep ? "Skip" : "Next"}
            </Button>
          </>
        )}
      </div>
    </div>
  )
}
