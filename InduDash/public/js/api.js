// =============================================
// API DO INDUDASH
// =============================================

const API = {

    baseUrl: "",

    async request(url, options = {}) {

        try {

            const response = await fetch(this.baseUrl + url, options);

            if (!response.ok) {
                throw new Error(`Erro ${response.status}`);
            }

            return await response.json();

        } catch (erro) {

            console.error("Erro na API:", erro);

            return null;

        }

    }

};

// =============================================
// DASHBOARD
// =============================================

async function buscarDashboard() {

    return await API.request("/api/dashboard");

}

// =============================================
// MÁQUINAS
// =============================================

async function buscarMaquinas() {

    return await API.request("/api/maquinas");

}

async function adicionarMaquina(maquina) {

    return await API.request("/api/maquinas", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(maquina)

    });

}

// =============================================
// CATÁLOGOS
// =============================================

async function buscarSetores() {

    return await API.request("/api/setores");

}

async function buscarStatus() {

    return await API.request("/api/status");

}

async function buscarAlertas() {

    return await API.request("/api/alertas");

}
