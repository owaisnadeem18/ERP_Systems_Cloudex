import bcrypt from "bcryptjs";

export const  generateHash = async (plainPassword) => {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(plainPassword, salt);

    console.log("plain password " , plainPassword)
    console.log("Hash to save in DB:", hash);

}

generateHash("pass123")