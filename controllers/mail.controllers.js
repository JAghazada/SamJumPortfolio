const nodemailer = require("nodemailer")
const MailController = (req, res) => {
    const { name, surname, email, message, phone } = req.body;
    if (name !== "" || surname !== "" || email !== "" || message !== "" || !name || !surname ||
        !email || !message) {
        res.status(400).json({
            message: "İstənilənləri doldurun"
        })
    }

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'hotqezenfer@gmail.com',
            pass: 'iolhhmqtjmfctkdx'
        },
        secure: true
    });

    const mailOptions = {
        from: email,
        to: 'jamil.aghazada03@gmail.com',
        subject: 'Message From Portfolio',
        text: `
        Ad: ${name}
        Soyad: ${surname}
        Mail: ${email}
        Mesaj: ${message}
        Nömrə: ${phone}
      `
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(403).json({
                message: 'Xəta baş verdi'
            });
        } else {
            console.log('E-posta gönderildi: ' + info.response);
            res.status(200).json({
                message: 'Sizin mesajınız göndərildi!'
            });
        }
    });
};


module.exports = { MailController }