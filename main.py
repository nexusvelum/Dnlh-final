import os
from flask import Flask, render_template_string, send_from_directory

app = Flask(__name__, template_folder='.', static_folder='.')

@app.route('/')
def index():
    """Rota do Portfólio Principal (Injeta o bypass sem alterar o arquivo físico dnlh.html)"""
    # 1. Lemos o arquivo dnlh.html original e intacto
    with open('dnlh.html', 'r', encoding='utf-8') as f:
        html_content = f.read()
    
    # 2. Criamos o script injetável que vai rodar no navegador
    bypass_script = """
    <script>
        document.addEventListener('DOMContentLoaded', () => {
            const urlParams = new URLSearchParams(window.location.search);
            if (urlParams.get('bypass') === 'true') {
                const welcomeScreen = document.getElementById('welcome-screen');
                const mainSite = document.getElementById('main-site');
                if (welcomeScreen && mainSite) {
                    welcomeScreen.style.display = 'none';
                    mainSite.classList.remove('hidden');
                }
            }
        });
    </script>
    """
    
    # 3. Injetamos o script logo antes do fechamento da tag </body> do dnlh.html original
    if '</body>' in html_content:
        html_content = html_content.replace('</body>', f'{bypass_script}\n</body>')
    
    # 4. Renderizamos o HTML modificado diretamente da memória (o arquivo físico continua igual)
    return render_template_string(html_content)


@app.route('/produtos')
def produtos():
    """Rota para carregar o Catálogo de Produtos"""
    with open('produtos.html', 'r', encoding='utf-8') as f:
        html_content = f.read()
    return render_template_string(html_content)


@app.route('/<path:filename>')
def serve_static_from_root(filename):
    """Serve os ficheiros de estilo, scripts e imagens da raiz"""
    return send_from_directory('.', filename)

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)