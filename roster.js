document.addEventListener('DOMContentLoaded', () => {

  const grid = document.getElementById('rosterGrid')

  const render = list => {
      grid.innerHTML = ''
      list.forEach(p => {
          const col = document.createElement('div')
          col.className = 'col-6 col-lg-2'

          // Normalize team name for CSS class
          const teamClass = p.team.toLowerCase().replace(/\s+/g, '-')

          col.innerHTML = `
            <div class="card h-100 shadow-sm">
              <img src="${p.photo}" alt="${p.name}" class="card-img-top">
              <div class="card-body text-center">
                  <h5 class="card-title mb-1">${p.name} AKA ${p.alias}</h5>
                  <div class='badge-position badge-pos-${teamClass}'>${p.team}</div>
                  <p class="small text-muted mb-2">${p.power}</p>
                  <button 
                      class="btn btn-sm btn-primary" 
                      data-bs-toggle="modal" 
                      data-bs-target="#heroModal" 
                      data-fact="${p.fact}">
                      Click Me!!
                  </button>
              </div>
            </div>
          `
          grid.appendChild(col)
      })
  }

  render(players)

  // Set up Bootstrap modal event listener
  const heroModal = document.getElementById('heroModal')
  const heroModalBody = document.getElementById('heroModalBody')

  // Listen when modal is about to be shown
  heroModal.addEventListener('show.bs.modal', event => {
      const button = event.relatedTarget
      const fact = button.getAttribute('data-fact')
      heroModalBody.textContent = fact
  })

})
