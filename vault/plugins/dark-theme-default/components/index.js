export const DarkThemeDefault = () => {
  const Component = () => null
  Component.beforeDOMLoaded =
    'if (localStorage.getItem("theme") === null) localStorage.setItem("theme", "dark")'
  return Component
}
