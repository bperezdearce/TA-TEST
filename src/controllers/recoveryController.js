import axios from 'axios';

export const getRecovery = async (req, res) => {
    try {
        const response = await axios.get(process.env.API_MAIN);
        return res.status(200).json(response.data);
    } catch (error) {
        try {
            const responseRespaldo = await axios.get(process.env.API_RESPALDO);
            return res.status(200).json(responseRespaldo.data);
        }
        catch (error) {
            return res.status(500).json({message: "Algo salió mal"});
        }
    }
}