const dummyData = [
    { name: "Car Company A", models: ["Model 1", "Model 2", "Model 3"] },
    { name: "Car Company B", models: ["Model X", "Model Y", "Model Z"] },
    { name: "Car Company C", models: ["Model Alpha", "Model Beta"] },
    // Add more companies and models here
  ];
  let filteredData = [...dummyData];
  
  function toggleSidebar() {
    // ... (previous code)
  }
  
  function searchCards() {
    // ... (previous code)
  }
  
  function displayCards(data) {
    // ... (previous code)
  }
  
  function openModal() {
    // ... (previous code)
  }
  
  function closeModal() {
    // ... (previous code)
  }
  
  function addNewCard() {
    // ... (previous code)
  }
  
  function searchContent() {
    const contentSearchInput = document.getElementById('contentSearchInput');
    const searchTerm = contentSearchInput.value.toLowerCase();
  
    const selectedCardData = filteredData.find(data => data.name === selectedCardName);
    if (!selectedCardData) return;
  
    const nestedCardsContainer = document.getElementById('nested-cards-container');
    nestedCardsContainer.innerHTML = '';
  
    const filteredNestedData = selectedCardData.models.filter(model => model.toLowerCase().includes(searchTerm));
    filteredNestedData.forEach(model => {
      const nestedCard = document.createElement('div');
      nestedCard.classList.add('nested-card');
      nestedCard.textContent = model;
      nestedCardsContainer.appendChild(nestedCard);
    });
  }
  
  let selectedCardName = null;
  
  function expandContent() {
    if (!selectedCardName) return;
  
    const selectedCardData = filteredData.find(data => data.name === selectedCardName);
    if (!selectedCardData) return;
  
    const nestedCardsContainer = document.getElementById('nested-cards-container');
    nestedCardsContainer.innerHTML = '';
  
    selectedCardData.models.forEach(model => {
      const nestedCard = document.createElement('div');
      nestedCard.classList.add('nested-card');
      nestedCard.textContent = model;
      nestedCardsContainer.appendChild(nestedCard);
    });
  }
  
  function handleCardClick(cardName) {
    selectedCardName = cardName;
    expandContent();
  }