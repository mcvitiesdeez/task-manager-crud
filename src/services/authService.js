const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const prisma = require("../db/prismaClient");

const register = async(email, password) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    return prisma.user.create({
        data: { email, password: hashedPassword },
        select: { id: true, email: true, createdAt: true},
    });
};

const login = async(email,password) => {
    const user = await prisma.user.findUnique({ where: {email}});
    if (!user) throw new Error("Invalid credentials");

    const isMatch = await bcrypt.compare( password, user.password);
    if(!isMatch) throw new Error("Invalid credentials");

    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
        expiresIn: "1800",
    })

    return { token };
};

module.exports = { register, login };