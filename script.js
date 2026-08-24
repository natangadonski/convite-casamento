  const stage = document.getElementById('stage');
  const seal = document.getElementById('seal');

  seal.addEventListener('click', () => {
    if (stage.classList.contains('open')) return;

    seal.classList.add('broken');
    stage.classList.add('open');
  });
