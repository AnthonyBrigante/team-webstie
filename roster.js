document.addEventListener('DOMContentLoaded', () => {

const grid = document.getElementById('rosterGrid')

const render = list => {
    grid.innerHTML = ''
    list.forEach(p => {
        const col = document.createElement('div')
        col.className = 'col-6 col-lg-2'

        col.innerHTML =
         ` 
          <div class="card h-100 shadow-sm">
        <img src="${p.photo}" alt="${p.name}" class="card-img-top">
        <div class="card-body text-center">
            <h5 class="card-title mb-1">${p.name} AKA ${p.alias}</h5>
            <div class=' text-dark badge badge-position badge-pos-${p.team}'>${p.team}</div>
            <p class="small text-muted mb-0"> ${p.power} <p>
        </div>
    </div>
     `
     grid.appendChild(col)
    })
}











render(players)
})