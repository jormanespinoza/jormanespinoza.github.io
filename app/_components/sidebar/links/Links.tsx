import { ReactNode } from 'react'

import { IoLogoGithub } from 'react-icons/io5'
import { FaXTwitter, FaThreads } from 'react-icons/fa6'
import { FaLinkedinIn, FaInstagram } from 'react-icons/fa'
import { PiButterfly } from 'react-icons/pi'

import styles from './Links.module.scss'

interface NetworkLink {
  href: string
  title: string
  icon: ReactNode
}

const links: NetworkLink[] = [
  {
    href: 'https://github.com/jormanespinoza',
    title: 'GitHub',
    icon: <IoLogoGithub />
  },
  {
    href: 'https://www.linkedin.com/in/jormanespinoza',
    title: 'LinkedIn',
    icon: <FaLinkedinIn />
  },
  {
    href: 'https://twitter.com/_jormanespinoza',
    title: 'Twitter',
    icon: <FaXTwitter />
  },
  {
    href: 'https://instagram.com/_jormanespinoza',
    title: 'Instagram',
    icon: <FaInstagram />
  },
  {
    href: 'https://www.threads.net/@_jormanespinoza',
    title: 'Threads',
    icon: <FaThreads />
  },
  {
    href: 'https://bsky.app/profile/jormanespinoza.bsky.social',
    title: 'Bsky',
    icon: <PiButterfly />
  }
]

export default function Links() {
  return (
    <ul className={styles.links}>
      {links.map((link, index) => (
        <li className={styles.link} key={index}>
          <a href={link.href} title={link.title} target='_blank'>
            {link.icon}
          </a>
        </li>
      ))}
    </ul>
  )
}