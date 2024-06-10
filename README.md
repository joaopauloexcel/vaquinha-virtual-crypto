# Vaquinha Virtual Crypto (BNB)

### Sistema de vaquinha online para criptomoeda BNB 
- **Tecnologias**: (Next + Web3 + Solidity + MetaMask)

### Aplicação Front-end Web com o Next + Web3
![2](https://github.com/joaopauloexcel/vaquinha-virtual-crypto/assets/44754960/dc204ee3-d8d8-42ab-92ac-418364c0b5d1)

### Aplicação Back-end com Solidity
- Utilização da plataforma Remix, ferramenta gratuita para programar as Smart Contratcs (arquivos .sol) para executar na blockchain da rede Ethereum.
(**Blockchain** => É um conceito criado por um padrao de criptomoeda específica que hospeda e fornece serviços de operações digitais.)
1. Baixe o arquivo ```virtualCripto.sol``` e o compile na plataforma do [Remix](https://remix.ethereum.org/).
2. Realize o Deploy na plataforma e o vincule com sua carteira digital cripto da MetaMask.
3. Na própria plataforma do Remix, é possível simular uma blockchain, sendo assim, copie o endereço gerado no deploy e o substitua no arquivo ```services/Web3Service.js``` do front-end.

### Carteira MetaMask
- Nossa carteira de integração que possibilitará as transações de criptomoedas. No nosso caso, estamos utilizando uma conta e criptomoedas BNB de testes disponibilizadas pela Binance no site: https://testnet.bscscan.com => (basta clicar no botão "Add BSC Testnet Network")
  
### Funcionalidades inclusas
1. Listar Requests das vaquinhas criadas
2. Autenticação no sistema de doação via carteira MetaMask
3. Gravar transferência de doação para uma das vaquinhas listadas via carteira MetaMask
4. Cadastrar nova request de vaquinha online
5. Fechar ordem das suas requests de vaquinhas criadas
