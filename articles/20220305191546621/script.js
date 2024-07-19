let figures = document.getElementsByTagName('figure')

for (let i = 0; i < figures.length; i++) {

  let [figure, n] = [figures[i], i + 1]

  let figure_header = `

    <table class='table-custom-figure-header'>
      <tr>
        <td>Figure ${n}</td>
      </tr>
    </table>

  `

  let table_custom_figure = figure.querySelector('table.table-custom-figure')

  let thead = document.createElement('thead')
  let tr = document.createElement('tr')
  let th = document.createElement('th')

  thead.appendChild(tr)
  tr.appendChild(th)
  th.classList.add('th-custom-figure-header')
  th.innerHTML = figure_header

  table_custom_figure.insertBefore(thead, table_custom_figure.children[0])

}
