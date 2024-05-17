import { CopyrightOutlined } from '@ant-design/icons'
import { Layout } from 'antd'
import useTheme from 'hooks/useTheme'

const { Footer } = Layout

const FooterRender = () => {
  const { dark, setDark, handleDark } = useTheme();

  return (
    <Footer
      style={{
        textAlign: 'center',
        background: dark === "on" ? "#1f1f1f" : "#ccc",
        color: dark === "on" ? "white" : "black",
      }}
    >
      COPYRIGHT <CopyrightOutlined /> {new Date().getFullYear()} UIUX_HI10
    </Footer>
  )
}

export default FooterRender
