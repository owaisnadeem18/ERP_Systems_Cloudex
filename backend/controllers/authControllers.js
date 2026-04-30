import { poolPromise } from "../config/db.js";
import jwt from "jsonwebtoken";

export const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const pool = await poolPromise;
    const result = await pool.request().input('uName', username).query("SELECT * FROM Users WHERE Username = @uName");
  
    const user = result.recordset[0];

    if (user && user.Password === password) {

    const token = jwt.sign(
        { id: user.UserID, role: user.UserRole }, 
        process.env.JWT_SECRET, 
        { expiresIn: '1d' }
    );

            return res.status(200).json({
                success: true,
                message: "Login Successful",
                token: token ,
                data: {
                    username: user.Username,
                    role: user.UserRole,
                    compId: user.CompID
                }
            });
        } else {
            return res.status(401).json({ success: false, message: "Invalid Username or Password" });
        }
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }

};
