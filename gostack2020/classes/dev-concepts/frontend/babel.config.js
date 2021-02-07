// babel converte arquivos js de forma que o browser consegue entender

module.exports = {
	presets: [  // conjuntos de configurações criadas por terceiros
		'@babel/preset-env',  // converte o código js mais moderno, para um mais antigo, baseado no contexto onde nossa aplicação está convertendo, convertendo apenas o código que o ambiente não entende( Ex.: browser, node ). Pode até especificar um versão de browser onde a aplicação irá rodar
		'@babel/preset-react' // adiciona as funcionalidades do react na conversão realizada pelo preset-env
	],
	plugins: [
		'@babel/plugin-transform-runtime' // para usar async await
	]
} 