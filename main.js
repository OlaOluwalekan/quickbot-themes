const colorDOMs = document.querySelectorAll('.theme-colors > div')

function rgbToHex(rgb) {
  // Extract the RGB components
  const result = rgb.match(/\d+/g)
  const r = parseInt(result[0], 10)
  const g = parseInt(result[1], 10)
  const b = parseInt(result[2], 10)

  // Convert each component to a hex string and pad with zeroes if necessary
  const hex = (component) => component.toString(16).padStart(2, '0')

  // Combine the hex components
  return `#${hex(r)}${hex(g)}${hex(b)}`
}

colorDOMs.forEach((colorDOM) => {
  colorDOM.onclick = (e) => {
    const element = e.currentTarget
    const styles = window.getComputedStyle(element)
    const color = rgbToHex(styles.color)
    const bg = rgbToHex(styles.background)
    const cls = element.className
    const theme = `"${cls}": "${bg}", "${cls}-content": "${color}"`
    navigator.clipboard
      .writeText(theme)
      .then(() => {
        alert('Text copied')
      })
      .catch((err) => {
        alert(err)
      })
    // console.log();
  }
})
