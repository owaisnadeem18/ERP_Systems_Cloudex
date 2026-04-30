import { poolPromise } from "../config/db.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export const login = async (req, res) => {
  const { username, password, rememberMe } = req.body;

  try {
    const pool = await poolPromise;
    const result = await pool.request().input('uName', username).query("SELECT * FROM Users WHERE Username = @uName");
  
    const user = result.recordset[0];

    if (!user) {
        return res.status(401).json({ success: false, message: "Invalid Username or Password" });
    }

    if (user && user.Password === password) {

        // let's setup the user's token expiry:

        const expiry = rememberMe ? '7d' : '1h';

    const token = jwt.sign(
        { id: user.UserID, role: user.UserRole }, 
        process.env.JWT_SECRET, 
        { expiresIn: expiry }
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


// Forgot Password API: 

export const forgotPassword = async (req , res) => {
    const {username} = req.body;

    try {
        const pool = await poolPromise;
        const result = await pool.request().input('uName', username).query("SELECT * FROM Users WHERE Username = @uName");

        const user = result.recordset[0];

        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }


        // create a reset token: 


        const resetToken = jwt.sign (
            { id: user.UserID },
      process.env.JWT_SECRET,
      { expiresIn: "15m" }
        )

        await pool
      .request()
      .input("id", user.UserID)
      .input("token", resetToken)
      .query("UPDATE Users SET ResetToken = @token WHERE UserID = @id");

    return res.status(200).json({
      success: true,
      message: "Reset token generated",
      resetToken, 
    });

    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }

} 