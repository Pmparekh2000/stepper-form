import AccountInfo from "../components/StepperComponents/AccountInfo";
import Confirmation from "../components/StepperComponents/Confirmation";
import Payment from "../components/StepperComponents/Payment";
import PersonalInfo from "../components/StepperComponents/PersonalInfo";
import Review from "../components/StepperComponents/Review";

export const STEPS = [
    {
        stepNumber: 0,
        component: PersonalInfo,
        label: "Personal Info",
        description: "Please fill up your all personal information.",
        completed: false,
        props: {
            firstName: "Prerak",
            lastName: "Parekh",
        },
    },
    {
        stepNumber: 1,
        component: AccountInfo,
        label: "Account Info",
        description: "Please fill up your all account information",
        completed: false,
        props: {
            accountNumber: "00000000000000",
        },
    },
    {
        stepNumber: 2,
        component: Confirmation,
        label: "Confirmation",
        description: "Please review all your plugged in information",
        completed: false,
    }, 
    {
        stepNumber: 3,
        component: Payment,
        label: "Payment",
        description: "Please make the payment for availing the subscription.",
        completed: false,
    },
    {
        stepNumber: 4,
        component: Review,
        label: "Review",
        description: "Please review the successful payment and subscription details.",
        completed: false,
    }
]
