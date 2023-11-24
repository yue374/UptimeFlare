import { Container, Group, Text } from '@mantine/core'
import classes from '@/styles/Header.module.css'
import config from '@/uptime.config'

export default function Header() {
  const linkToElement = (link: { label: string; link: string; highlight?: boolean }) => {
    return (
      <a
        key={link.label}
        href={link.link}
        target="_blank"
        className={classes.link}
        data-active={link.highlight}
      >
        {link.label}
      </a>
    )
  }

  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
        <div>
          <a href="https://my.nextdns.io/" target="_blank">
            <Text
              size="xl"
              span
              fw={700}
              variant="gradient"
              gradient={{ from: 'blue', to: 'cyan', deg: 90 }}
            >
              NextDNS
            </Text>
          </a>
        </div>

        <Group gap={5} visibleFrom="sm">
          {config.page.links.map(linkToElement)}
        </Group>

        <Group gap={5} hiddenFrom="sm">
          {config.page.links.filter((link) => (link as any).highlight).map(linkToElement)}
        </Group>
      </Container>
    </header>
  )
}
