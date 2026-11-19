import 'dotenv/config';
import express, { type Express } from 'express';

export interface ServerConfig {
  port: number;
}

export function getServerConfig(): ServerConfig {
  return {
    port: Number(process.env.PORT) || 3001,
  };
}

/**
 * Esqueleto estrutural preparado para futura integração Express + API REST.
 * Rotas, middlewares, banco de dados e autenticação serão implementados em missões futuras.
 */
export function createServerApp(): Express {
  const app = express();
  app.use(express.json());
  return app;
}
