export declare class PasswordService {
    private readonly saltRounds;
    hashPassword(password: string): Promise<string>;
    comparePassword(password: string, hash: string): Promise<boolean>;
}
