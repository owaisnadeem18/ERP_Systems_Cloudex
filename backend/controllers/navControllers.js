import { poolPromise } from '../config/db.js';

export const getNavData = async (req, res) => {
    try {
        const pool = await poolPromise;
        const result = await pool.request().query("SELECT Label as text, Route as route, IconName as icon FROM NavItems ORDER BY SortOrder");
        res.json(result.recordset);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};