const express = require("express");
const path = require("path");

const maquinas = require("../data/maquinas");
const setores = require("../data/setores");
const status = require("../data/status");
const alertas = require("../data/alertas");

const app = express();

app.use(express.json());

app.use(express.static(path.join(__dirname, "../public")));

// ==============================
// Página principal
// ==============================

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

// ==============================
// API - Dashboard
// ==============================

app.get("/api/dashboard", (req, res) => {

    res.json({
        maquinas,
        setores,
        status,
        alertas
    });

});

// ==============================
// API - Máquinas
// ==============================

app.get("/api/maquinas", (req, res) => {
    res.json(maquinas);
});

app.post("/api/maquinas", (req, res) => {

    const novaMaquina = {
        id: maquinas.length + 1,
        ...req.body
    };

    maquinas.push(novaMaquina);

    res.status(201).json({
        mensagem: "Máquina adicionada com sucesso!",
        maquina: novaMaquina
    });

});

// ==============================
// API - Setores
// ==============================

app.get("/api/setores", (req, res) => {
    res.json(setores);
});

// ==============================
// API - Status
// ==============================

app.get("/api/status", (req, res) => {
    res.json(status);
});

// ==============================
// API - Alertas
// ==============================

app.get("/api/alertas", (req, res) => {
    res.json(alertas);
});

// ==============================
// Inicialização
// ==============================

const PORT = 3000;

app.listen(PORT, () => {

    console.clear();

    console.log("====================================");
    console.log("🚀 InduDash iniciado com sucesso!");
    console.log("🌐 Dashboard: http://localhost:3000");
    console.log("📡 API Máquinas: http://localhost:3000/api/maquinas");
    console.log("🏭 API Setores: http://localhost:3000/api/setores");
    console.log("📊 API Status: http://localhost:3000/api/status");
    console.log("🚨 API Alertas: http://localhost:3000/api/alertas");
    console.log("====================================");

});
