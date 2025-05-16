// Dados iniciais do jogo
const playerPokemon = {
    name: "Pikachu",
    hp: 100,
    attack: 15,
    heal: 10
  };
  
  const enemyPokemon = {
    name: "Charmander",
    hp: 100,
    attack: 10,
    heal: 8
  };
  
  // Atualiza a interface do jogo
  function updateGameUI() {
    // Atualiza os dados do Pokémon do jogador
    document.getElementById("player-name").textContent = playerPokemon.name;
    document.getElementById("player-hp-value").textContent = playerPokemon.hp;
  
    // Atualiza os dados do Pokémon inimigo
    document.getElementById("enemy-name").textContent = enemyPokemon.name;
    document.getElementById("enemy-hp-value").textContent = enemyPokemon.hp;
  }
  
  // Função para registrar o log da batalha
  function logBattle(message) {
    const log = document.getElementById("log");
    const li = document.createElement("li");
    li.textContent = message;
    log.appendChild(li);
  }
  
  // Função de ataque
  function playerAttack() {
    const damage = playerPokemon.attack;
    enemyPokemon.hp -= damage;
    logBattle(`${playerPokemon.name} atacou ${enemyPokemon.name} causando ${damage} de dano!`);
    if (enemyPokemon.hp <= 0) {
      logBattle(`${enemyPokemon.name} foi derrotado! Você venceu a batalha!`);
      disableButtons();
    }
    enemyAttack();
    updateGameUI();
  }
  
  // Função de ataque do inimigo
  function enemyAttack() {
    const damage = enemyPokemon.attack;
    playerPokemon.hp -= damage;
    logBattle(`${enemyPokemon.name} atacou ${playerPokemon.name} causando ${damage} de dano!`);
    if (playerPokemon.hp <= 0) {
      logBattle(`${playerPokemon.name} foi derrotado! Você perdeu a batalha.`);
      disableButtons();
    }
    updateGameUI();
  }
  
  // Função de cura do jogador
  function playerHeal() {
    const healAmount = playerPokemon.heal;
    playerPokemon.hp += healAmount;
    logBattle(`${playerPokemon.name} se curou em ${healAmount} pontos de HP!`);
    enemyAttack();
    updateGameUI();
  }
  
  // Desabilitar os botões após a batalha
  function disableButtons() {
    document.getElementById("attack-btn").disabled = true;
    document.getElementById("heal-btn").disabled = true;
  }
  
  // Inicializa o jogo
  function startGame() {
    updateGameUI();
    document.getElementById("attack-btn").addEventListener("click", playerAttack);
    document.getElementById("heal-btn").addEventListener("click", playerHeal);
  }
  
  // Iniciar o jogo ao carregar a página
  window.onload = startGame;