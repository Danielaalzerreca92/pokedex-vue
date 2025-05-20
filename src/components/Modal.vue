<template>
  <div class="modal-bg">
    <div class="modal-card">
      <img src="@/assets/squirtle.png" alt="Squirtle" class="modal-img" />
      <div class="modal-info">
        <div><b>Name:</b> Squirtle</div>
        <div><b>Weight:</b> 20</div>
        <div><b>Height:</b> 18</div>
        <div><b>Types:</b> Normal, Water</div>
      </div>
      <div class="modal-actions">
        <button class="share-btn">Share to my friends</button>
        <span class="star favorite">★</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal-bg {
  position: fixed;
  inset: 0;
  background: #0008;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
}
.modal-card {
  background: var(--white);
  border-radius: 16px;
  padding: 24px;
  width: 320px;
  box-shadow: 0 2px 16px #0002;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.modal-img {
  width: 180px;
  border-radius: 12px;
  margin-bottom: 16px;
}
.modal-info {
  width: 100%;
  margin-bottom: 16px;
}
.modal-actions {
  display: flex;
  align-items: center;
  gap: 12px;
}
.share-btn {
  background: var(--red);
  color: var(--white);
  border: none;
  border-radius: 24px;
  padding: 10px 24px;
  font-size: 1em;
  cursor: pointer;
}
.star.favorite {
  font-size: 2em;
  color: var(--yellow);
}
</style>