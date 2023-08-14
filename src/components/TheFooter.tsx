import SocialIcons from './SocialIcons'

export default function TheFooter() {
  return (
    <footer
      className="space-y-6 py-4 text-center"
      style={{
        mask: 'linear-gradient(to bottom, transparent, black 60%)',
        backdropFilter: 'blur(10px)',
      }}
    >
      <SocialIcons></SocialIcons>
      <p>Made with ❤️</p>
      <p>Enrique Fernández-Polo Puertas</p>
      <p>Copyright © 2023</p>
    </footer>
  )
}
