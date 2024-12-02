const https = require('https');
const fs = require('fs');
const express = require('express');

// Cria a aplicação Express
const app = express();
app.use(express.json()); // Middleware para interpretar JSON

// Middleware para registrar todas as requisições
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
});

// Endpoint para webhook
app.post('/webhook', (req, res) => {
    console.log('Webhook recebido:', req.body);
    res.status(200).send('Webhook recebido com sucesso!');
});

// Configuração HTTPS com mTLS
const options = {
    //key: fs.readFileSync('./private-key.pem'),                    // Sua chave privada
    cert: fs.readFileSync('./api.webhook.hm.bb.com.br.cer'),      // Certificado do servidor
    ca: [
        fs.readFileSync('./GeoTrust_EV_RSA_CA_G2.cer'),           // Certificado intermediário
        fs.readFileSync('./DigiCert_Global_Root_G2.cer')          // Certificado raiz
    ],
   // secureOptions: require('crypto').constants.SSL_OP_NO_SSLv3,    // Desabilitar SSLv3
    requestCert: false,                                            // Solicitar certificado do cliente (Banco do Brasil)
    rejectUnauthorized: false                                      // Rejeitar conexões sem certificado válido
};

// Inicia o servidor HTTPS
https.createServer( options, app).listen(443, () => {
    console.log('Servidor HTTPS com mTLS rodando em https://localhost:443');
});


// const express = require('express');
// const app = express();
// const bodyParser = require('body-parser');
// const PORT = process.env.PORT || 3000;

// // Configurando o bodyParser para tratar os dados JSON
// app.use(bodyParser.json());


// // Endpoint para receber notificações de webhook
// app.post('/webhook', (req, res) => {
//   const { tipo, valor, data } = req.body;
//   console.log(`Recebido webhook: Tipo=${tipo}, Valor=${valor}, Data=${data}`);
//   // Processar os dados do webhook aqui

//   // Enviar resposta ao servidor do Banco do Brasil
//   res.status(200).send('Webhook recebido com sucesso');
// });

// // Iniciando o servidor
// app.listen(PORT, () => {
//   console.log(`Servidor rodando na porta ${PORT}`);
// });
