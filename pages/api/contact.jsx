import Email from '@sendgrid/mail';

Email.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {

  const { email,message,firstName,lastName,subject} = req.body;
  const msg = {
    to: process.env.EMAIL_TO,
    from: process.env.EMAIL_FROM,
    subject:subject,
    html: `<h3>Name: ${firstName+lastName}</h3><br/>
            <h3>Email: ${email}</h3><br/>
            <h5>Message:</h5><br/>
            <p>${message}</p>`,
  };

  try {
    await Email.send(msg);
    res.status(200).json({message:true})
  } catch (error) {
    res.status(500).json({failed:true})
  }

}
