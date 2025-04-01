import { verEmailTemplate } from "./emailtemplate.js";
import { mailTrapClient, sender } from "./mailtrap.config.js";
export const sendVerificationEmail = async (email, verificationToken) => {
    const recipient =[{ email }];

    try {
        const response = await mailTrapClient.send({
            from: sender,
            to: recipient,
            subject: "Email Verification OTP",
            html: verEmailTemplate.replace("{verificationCode}", verificationToken),
            category: "Email Verification"
        }) 
        console.log("Email sent successfully", response);
    } catch(error) {
        console.error(`Error sending verification`, error);
        throw new Error(`Error sending verification email: ${error}`);
    }
}