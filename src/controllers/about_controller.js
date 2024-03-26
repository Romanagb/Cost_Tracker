//Roman Agbyev ID: 322002098, Shai Shillo ID: 204684914
const CustomException = require(`../utils/CustomException`);

//Controller to handle the about get request
exports.getDevelopers = (req, res) => {
    try {
        //Our details
        const developers = [
            { firstname: `Roman`, lastname: `Agbyev`, id: 322002098, email: `romanagbyev@gmail.com` },
            { firstname: `Shai`, lastname: `Shillo`, id: 204684914, email: `shaishillo@gmail.com` }
        ];

        //Resolve with our details
        res.status(200).json(developers);

    } catch (err) {
        //Handle possible exceptions
        if (err instanceof CustomException) {
            res.status(err.status).json({ error: err.message });
        } else {
            console.error(`Unhandled error:`, err);
            res.status(500).json({ error: `Internal Server Error` });
        }
    }
};