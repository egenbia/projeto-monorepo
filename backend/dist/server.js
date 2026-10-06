"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const app_1 = require("./app");
const database_1 = require("./config/database");
dotenv_1.default.config();
const PORT = process.env.PORT || 3000;
async function main() {
    try {
        await database_1.sequelize.authenticate();
        console.log('Conexão com o PostgreSQL no Supabase realizada com sucesso.');
        app_1.app.listen(PORT, () => {
            console.log(`Servidor rodando na porta ${PORT}`);
            console.log(`Heath Check disponivel em: http://localhost:${PORT}/api/health`);
        });
    }
    catch (error) {
        console.log('Erro ao conectar com o banco de dados: ', error);
    }
}
main();
