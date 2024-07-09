const nodemailer = require("nodemailer");
require("dotenv").config();

const PASS = process.env.PASS;
const LINK_FORM = process.env.LINK_FORM;

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'magiclub79@gmail.com',
        pass: PASS
    }
});

exports.sendEmail = (email, name) => {

    const mailOptions = {
        from: `magiclub79@gmail.com`,
        to: email,
        subject: "Recruit members",
        html: `<p>Dear ${name}</p>
           <p>We hope this message finds you well. We are excited to announce the launch of <strong>Magi</strong>, a newly established club with a vision to become a vibrant community for technology enthusiasts. Our mission is to foster a collaborative environment where members can learn, innovate, and excel in the ever-evolving tech landscape.</p>
           <p>At Magi, we believe in the magic of technology and the power of a united community. We are looking for passionate individuals who are eager to dive into the world of tech, share their knowledge, and grow together. If you aspire to become one of the magicians in the tech industry, this is the perfect place for you !</p>
           <p>Joining Magi comes with several exciting opportunities and responsibilities. As a member, you will:</p>
           <ul>
               <li><strong>Engage Actively:</strong> Participate in workshops, hackathons, and regular meetups. Your active involvement will be key to both your personal growth and the collective success of the club.</li>
               <li><strong>Maintain Confidentiality:</strong> Respect and protect the confidentiality of sensitive data and projects. Trust and security are the bedrock of our community.</li>
               <li><strong>Foster a Spirit of Learning:</strong> Continuously seek knowledge and stay curious. We provide a rich library of resources and mentorship opportunities to support your learning journey.</li>
               <li><strong>Embrace a Progressive Mindset:</strong> Be open to new ideas, innovative thinking, and constructive feedback. Growth happens outside of your comfort zone.</li>
               <li><strong>Encourage Sharing:</strong> Share your insights, skills, and experiences with fellow members. Collaboration and knowledge sharing are crucial to our collective progress.</li>
           </ul>
           <p>If you are passionate about technology and excited about the prospect of being part of a dynamic and supportive community, we invite you to join us. Please fill out the following form to express your interest: <a href=${LINK_FORM}>Join Magi</a>. We will contact you shortly after receiving your information.</p>
           <p>We look forward to embarking on this magical journey with you and can't wait to see the amazing contributions you'll bring to our club!</p>
           <p>Best regards,</p>
           <p>The Magi Club Team</p>`
    };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log("Sended email: %s", info.messageId);
    });
};
