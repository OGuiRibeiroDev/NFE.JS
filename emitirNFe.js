const nsAPI = require('ns-nfe-node/ns_modules/nfe_module/emissao/emitirSincrono')
const nfeJSON = require('./nfe.json')

var retorno = nsAPI.emitirNFeSincrono(nfeJSON, '2', 'XP', 'Documentos/NFe')
retorno.then(()=>console.log(retorno))