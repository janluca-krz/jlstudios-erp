import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import * as bcrypt from 'bcrypt';
import { RegisterDTO } from "./dto/register.dto";
import { LoginDTO } from "./dto/login.dto";
import { JwtService } from "@nestjs/jwt/dist/jwt.service";

@Injectable()
export class AuthService {
    constructor(
        private prisma: PrismaService,
        private jwtService: JwtService
    ) {}

    async register(data: RegisterDTO) {
        const hashedPassword = await bcrypt.hash(data.PASSWORT, 10);

        return this.prisma.user.create({
            data: {
                EMAIL: data.EMAIL,
                PASSWORT: hashedPassword,
                VORNAME: data.VORNAME,
                NACHNAME: data.NACHNAME,
                FIRMA: data.FIRMA,
            },
        });
    }

    async login(data: LoginDTO) {
        const user = await this.prisma.user.findUnique({
            where: { EMAIL: data.EMAIL },
        });

        if (!user) {
            throw new Error('Invalid credentials');
        }

        const isPasswordValid = await bcrypt.compare(
            data.PASSWORT,
            user.PASSWORT
        );

        if(!isPasswordValid) {
            throw new Error('Wrong Password');
        }

        const token = this.jwtService.sign({
            userId: user.UUID,
            email: user.EMAIL,
        });
        
        return { access_token: token };
    }
    
}